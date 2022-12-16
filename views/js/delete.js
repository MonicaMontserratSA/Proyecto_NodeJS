window.onload = init;

function init(){
    if (localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click',function() {
        window.location.href = "admin.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', deleteEmployee);
    }
    else{
        window.location.href = "admin.html";
    }
}
function deleteEmployee(){
    
    axios.delete('http://localhost:3000/employee/del/',  {
            headers:{
                'Authorization': "bearer " + localStorage.getItem("token")
            }
    }).then(function(res){
        console.log(res);
        alert("Successfully deleted");
        window.location.href = "admin.html";
    }).catch(function(err){
        console.log(err);
    })
}