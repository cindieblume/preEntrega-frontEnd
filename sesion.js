
document.getElementById('btnInicioSesion').addEventListener('click',function()
{

document.getElementById('ventanaEmergente').style.display='block'

});

document.getElementById('btnGuardar').addEventListener('click',function()
{
    var nombre= document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var contrasena= document.getElementById('contrasena').value;
    window.location.href = 'index.html';
})

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // no deja que la página se recargue cuando manda el form
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var contrasena = document.getElementById('contrasena').value;
    
})

alert('Felicidades Nuevo Usuario!');
