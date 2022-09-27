/*----------------------Login---------------*/ 

/*---------Login------------*/ 
let UserValidate= "coderhouse";
let PasswordValidate= "coderhouse123";

let User = prompt("Ingrese Su Usuario");

if(User === UserValidate ) {
    let Password = prompt("Ingrese su Contraseña ");
    
    if(Password === PasswordValidate ) {
        alert ("Bienvenido a Hardteck");
    }
    for( let i = 0; i < 2; i++) {
        passwordUsuario = prompt("Contraseña incorrecta, vuelva a intentarlo: ");
    }
} 
else {
    alert ("el usuario no existe");
}



/*---------Login------------*/ 

