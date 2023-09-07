
alert("Bienvenidos a El Cielo");

let producto = prompt("¿Quieres comprar Agua o Vino?");

producto = producto.toLowerCase();

if (producto == "vino") {
    let edad = prompt("Por favor, ingrese su edad:");
    
if ( edad < 18) {
        alert("Lo siento, debe ser mayor de edad para comprar Vino.");
    } else {
        alert("Favor recuerde beber moderadamente y de forma responsable");
    }
} else if (producto == "agua") {
    alert("Favor considerar una espera de despacho de 5 días hábiles debido a la escasez.");
} else {
    alert("Favor seleccione una de las opciones válidas (Agua o Vino).");
}


let cantidad;

do {
    cantidad = (prompt("¿Cuántas unidades necesita?"));
    if (cantidad <= 0) {
        alert("Favor ingresar una cantidad válida");
    } else if (cantidad > 5) {
        alert("Favor considerar que solo puede comprar 5 unidades como máximo.");
    }
} while (cantidad > 5);

alert("Su pedido será procesado, ¡Gracias por su compra!");







