const express = require('express');
const jwt = require('jsonwebtoken');
const employee = express.Router();
const db = require('../config/database');

employee.post("/signin", async(req,res,next)=>{
    const {Nombre, Apellidos, Telefono, Correo, Direccion,Password} = req.body;

    if (Nombre && Apellidos && Telefono && Correo && Direccion && Password) {
        let query= "INSERT INTO empleados(Nombre, Apellidos, Telefono, Correo, Direccion, Password, Rol) ";
        query += `VALUES ('${Nombre}','${Apellidos}','${Telefono}','${Correo}','${Direccion}','${Password}','U');`;
        const rows = await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(201).json({code: 201, message: "Employee registered correctly"});
        }
        return res.status(500).json({code:500, message: "En error occurred"});
    }
    return res.status(500).json({code:500, message: "Incomplete fields"});
});

employee.post("/login", async(req,res,next)=>{
    const {Correo, Password} = req.body;
    const query = `SELECT * FROM empleados WHERE Correo = '${Correo}' AND Password = '${Password}';`;
    const query2 = `SELECT Rol FROM empleados WHERE Correo = '${Correo}' AND Password = '${Password}';`
    const rows = await db.query(query);
    const rows2 = await db.query(query2);
    
        if (Correo && Password) {
            if (rows.length == 1) {
                if (rows2[0].Rol == 'A') {
                    const token = jwt.sign({
                        empleado_id: rows[0].empleado_id, //todo esto eslo que entra para ser codificado
                        Correo: rows[0].Correo,
                    }, "debugkey");
                    return res.status(200).json({code:200, message: token});
                }
                else{
                    window.alert("You do not have the correct role to enter ask for help in human resources.");
                    return res.status(401).json({code:401, message:"You are not authorized"});
                }
                
            }
            else{
                return res.status(200).json({code:401, message:"Incorrect user name and/or password"});
            }
        }
        return res.status(500).json({code:500, message: "Incomplete fields"});
});

employee.get("/", async(req, res, next)=>{
    const emp= await db.query("SELECT * FROM empleados");
    res.status(200).json({code: 200, message: emp});
});

employee.post("/", async(req, res, next)=>{
    const {Nombre, Apellidos, Telefono, Correo, Direccion, Password, Rol} = req.body;
    
    if (Nombre && Apellidos && Telefono && Correo && Direccion && Password && Rol) {
        let query = "INSERT INTO empleados (Nombre, Apellidos, Telefono, Correo, Direccion, Password, Rol)";
        query += ` VALUES ('${Nombre}', '${Apellidos}', '${Telefono}', '${Correo}', '${Direccion}', '${Password}', '${Rol}');`;
    
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
        res.status(201).json({code: 201, message:"Employee inserted correctly"});
        }
        else{
            res.status(500).json({code: 500, message:"An error occurred"});
        }
    }
    return res.status(500).json({code:500, message:"Incomplete fields"});
});

employee.get('/consult/:name([A-Za-z]+)',async(req, res, next)=>{
    const {name} = req.params;
    const empl = await db.query(`SELECT * FROM empleados WHERE Nombre = '${name}';`);
    if(empl.length > 0) {
        return res.status(200).json({code: 200, message: empl});
    } 
    return res.status(404).json({code: 404, message: "Employee not found"});
});

employee.put("/up/:id([0-9]{1,3})", async(req, res, next)=>{
    const {Nombre, Apellidos, Telefono, Correo, Direccion, Password, Rol} = req.body;
    
    if (Nombre && Apellidos && Telefono && Correo && Direccion && Password && Rol) {
        let query = `UPDATE empleados SET Nombre='${Nombre}' ,Apellidos='${Apellidos}' ,`;
        query+= `Telefono='${Telefono}' ,Correo='${Correo}' ,Direccion='${Direccion}' ,`
        query+= `Password='${Password}' ,Rol='${Rol}' WHERE empleado_id=${req.params.id}`;
    
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
        return res.status(200).json({code: 200, message:"Employee updated correctly"});
        }
        else{
            return res.status(500).json({code: 500, message:"An error occurred"});
        }
    }
    return res.status(500).json({code:500, message:"Incomplete fields"});
});

employee.delete("/del/:id([0-9]{1,3})" , async(req, res, next)=>{
    const query = `DELETE FROM empleados WHERE empleado_id=${req.params.id}`;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
        return res.status(200).json({code: 200, message: "Employee successfully deleted"});
    }
    return res.status(404).json({code:404, message: "Employee not found"});
});

module.exports = employee;