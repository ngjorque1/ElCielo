const carrito = []

const productos = [
    {sku: 290930,
     nombre: "Pilsen de sur",
     categoria: "Cerveza",
     precio: 1200,
     cantidad: 0,},

     {sku: 300930,
     nombre: "Corona",
     categoria: "Cerveza",
     precio: 2000,
     cantidad: 0,},

     {sku: 310930,
     nombre: "Baltica",
     categoria: "Cerveza",
     precio: 800,
     cantidad: 0,},

     {sku: 320930,
     nombre: "Red Label",
     categoria: "Whiskey",
     precio: 20000,
     cantidad: 0,},

     {sku: 330930,
     nombre: "Black Label",
     categoria: "Whiskey",
     precio: 50000,
     cantidad: 0,},

     {sku: 340930,
     nombre: "Blue Label",
     categoria: "Whiskey",
     precio: 100000,
     cantidad: 0,},]

let categoriaBuscada = prompt("Busca Cerveza o Whiskey?");
if (categoriaBuscada.toLowerCase() === "cerveza" || categoriaBuscada.toLowerCase() === "whiskey") {
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() == categoriaBuscada.toLowerCase());

    if (productosFiltrados.length > 0) {
        const mensaje = productosFiltrados.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
        const productoElegido = prompt("¿Cual desea comprar?:\n" + mensaje);

        const productoEncontrado = productosFiltrados.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());


        if (productoEncontrado) {
            const cantidad = parseInt(prompt(`¿Cuántos ${productoEncontrado.nombre} desea comprar?`));
            if (!isNaN(cantidad) && cantidad > 0) {
                carrito.push({
                    nombre: productoEncontrado.nombre,
                    precio: productoEncontrado.precio,
                    cantidad: cantidad
                });
                alert(`${cantidad} ${productoEncontrado.nombre} se ha(n) agregado al carrito.`);
            } else {
                alert("La cantidad ingresada no es válida.");
            }
        } else {
            alert("El producto seleccionado no se encontró en la lista.");
        }
    } else {
        alert("No se encontraron productos en la categoría buscada.");
    }
} else {
    alert("Favor ingresar una de las categorías mencionadas.");
}

console.log("Carrito de compras:");
console.log(carrito);









