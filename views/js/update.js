window.onload = init;

function init(){
    if (localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "admin.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', update);
    }
    else{
        window.location.href = "admin.html";
    }
}


function update(){
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    var pass = document.getElementById('input-password').value;
    var rol = document.getElementById('input-rol').value;

    axios({
        method: 'put',
        url: 'http://localhost:3000/employee/up/'+id,
        data: {
            Nombre: name,
            Apellidos: lastname,
            Telefono: phone,
            Correo: mail,
            Direccion: address,
            Password: pass,
            Rol: rol
        }
    }).then(function(res){
        console.log(res);
        alert("successful update");
        window.location.href = "admin.html";
    }).catch(function(err){
        console.log(err);
    })
}