window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        headers ={
            headers:{
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadEmployee();
        
    }
    else{
        window.location.href = "index.html";
    }
    document.querySelector('.btn-danger'),addEventListener('click', deleteEmployee);
}

function loadEmployee(){
    axios.get(url + "/employee", headers).then(function(res) {
        console.log(res);
        displayEmployee(res.data.message);
    }).catch(function (err) {
        console.log(err);
    })
}

function displayEmployee(employee) {
    for (var i = 0; i < employee.length; i++) {
        var x = document.getElementById("mytable").rows[1+i].cells;
        x[0].innerHTML += `${employee[i].empleado_id}`;
        x[1].innerHTML += `${employee[i].Nombre}`;
        x[2].innerHTML += `${employee[i].Apellidos}`;
        x[3].innerHTML += `${employee[i].Telefono}`;
        x[4].innerHTML += `${employee[i].Correo}`;
        x[5].innerHTML += `${employee[i].Direccion}`;
        x[6].innerHTML += `${employee[i].Password}`;
        x[7].innerHTML += `${employee[i].Rol}`;
        
    }
}

function deleteEmployee(){
    var id = document.getElementById('input-id').value;
    
    axios.delete('http://localhost:3000/employee/del/'+id,  {
            headers:{
                'Authorization': "bearer " + localStorage.getItem("token")
            }
    }).then(function(res){
        console.log(res);
        alert("Successfully deleted");
    }).catch(function(err){
        console.log(err);
    })
}