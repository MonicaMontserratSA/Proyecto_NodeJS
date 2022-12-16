window.onload = init;


function init(){
    if (localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "admin.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', search);
    }
    else{
        window.location.href = "view-employee.html";
    }

    
}

function search(){
    var name = document.getElementById('input-name').value;
    
    axios.get('http://localhost:3000/employee/consult/'+name,  {
        headers:{
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        if (res.data.code === 200) {
            displayEmployee(res.data.message);
        }
        else{
            alert("The employee does not exist");
        }
    }).catch(function(err){
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

