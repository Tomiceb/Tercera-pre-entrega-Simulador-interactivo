/*----------------------Login---------------*/ 
alert("Bienvenidos a Hardteck");

const usuarioAutorizado = "coderhouse";
const passwordAutorizada = "1234";

let usuario = prompt("Ingrese su usuario: ");
let password = prompt("Ingrese su contraseña: ");

if(usuario === usuarioAutorizado && password === passwordAutorizada) {
    alert("Bienvenido " + usuario); 
} else {
    alert("usuario o contraseña incorrecta");
}