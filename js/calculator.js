//----------Calculadora--------- // 
alert("Bienvenido"); 
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a calcular"));
    for(let i = 0; i < cantidadProductos; i++) {
        let nombreProducto = prompt ("Ingrese el nombre del producto");
        let valorProducto = parseInt(prompt("Ingrese valor del producto"));
        let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que lo quiere pagar "));
        let totalCuotas = calcularCuotas (valorProducto, cantidadCuotas) ;
        alert("para el producto: " + nombreProducto + " le quedarian " + cantidadCuotas + " Cuotas, con un valor de =" + totalCuotas);    
    }

    //------------------------ Funcion---------------------//: 

function calcularinteres(valorProducto) {
    let interes = (valorProducto * 0.10);
    return interes;
}
function calcularCuotas(valorProducto, cantidadCuotas, interes) {
    let totalCuotas = ((valorProducto / cantidadCuotas) + interes);
    return totalCuotas;
}
