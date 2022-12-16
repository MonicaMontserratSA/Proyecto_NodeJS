window.onload = init;

function init(){
    if (!localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "login.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', signin);
    }
    else{
        window.location.href = "dashboard.html";
    }
}


function signin(){
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/employee/signin',
        data: {
            Nombre: name,
            Apellidos: lastname,
            Telefono: phone,
            Correo: mail,
            Direccion: address,
            Password: pass
        }
    }).then(function(res){
        console.log(res);
        alert("Successful registration");
        window.location.href = "login.html";
    }).catch(function(err){
        console.log(err);
    })
}
