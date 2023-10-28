const productos = [
    {id: 290930,
     nombre: "Moet Organico",
     categoria: "Champagne",
     imagen:"./images/moetchandon.jpg",
     precio: 1200,
     cantidad: 0,},

     {id: 300930,
     nombre: "Moet Oro",
     categoria: "Champagne",
     imagen:"./images/moetchandonbarato.jpg",
     precio: 2000,
     cantidad: 0,},

     {id: 310930,
     nombre: "Moet Rosa",
     categoria: "Champagne",
     imagen:"./images/moetchandonmedio.jpg",
     precio: 800,
     cantidad: 0,},

     {id: 320930,
     nombre: "Green Label",
     categoria: "Whiskey",
     imagen:"./images/greenlabel.jpg",
     precio: 20000,
     cantidad: 0,},

     {id: 330930,
     nombre: "Black Label",
     categoria: "Whiskey",
     imagen:"./images/blacklabel.jpg",
     precio: 50000,
     cantidad: 0,},

     {id: 340930,
     nombre: "Blue Label",
     categoria: "Whiskey",
     imagen:"./images/bluelabel.jpg",
     precio: 100000,
     cantidad: 0,},]

    
const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");



function cargarProductos(){
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class= "imagenproducto" src="${producto.imagen}" alt="${producto.nombre}">
    <h2 class="titulo-producto"> ${producto.nombre}</h2>
    <p class="precio">${producto.precio}</p>
    <p class="categoria">${producto.categoria}</p>
    <button class="producto-agregar" id="${producto.nombre}"> Agregar al carrito</button></div>`;

    contenedorProductos.append(div);
    })
};

cargarProductos();

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

actualizarBotonesAgregar();
const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const NombreBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.nombre === NombreBoton);

    if (productoAgregado) {
        productosEnCarrito.push(productoAgregado);
        console.log("Producto agregado al carrito:", productoAgregado);
        Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1000,
            width: 300,
            padding: '50',

            
        });
    } else {
        console.log("No se encontró el producto con el ID:", NombreBotonBoton);}}

    productosEnCarrito.push();
    console.log(productosEnCarrito);


    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

    document.getElementById('btn-buscar').addEventListener('click', function() {
        const textoBuscado = document.getElementById('input-buscador').value.toLowerCase();
        const productos = document.querySelectorAll('.producto');
    
        productos.forEach(function(producto) {
            const nombreProducto = producto.querySelector('.titulo-producto').textContent.toLowerCase();
            const categoriaProducto = producto.querySelector('.categoria').textContent.toLowerCase();
    
            if (nombreProducto.includes(textoBuscado) || categoriaProducto.includes(textoBuscado)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
    
  
    

    






    


















// let categoriaBuscada = prompt("Busca Champagne o Whiskey?");
// if (categoriaBuscada.toLowerCase() === "champagne" || categoriaBuscada.toLowerCase() === "whiskey") {
//     const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() == categoriaBuscada.toLowerCase());

//     if (productosFiltrados.length > 0) {
//         const mensaje = productosFiltrados.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
//         const productoElegido = prompt("¿Cual desea comprar?:\n" + mensaje);

//         const productoEncontrado = productosFiltrados.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());


//         if (productoEncontrado) {
//             const cantidad = parseInt(prompt(`¿Cuántos ${productoEncontrado.nombre} desea comprar?`));
//             if (!isNaN(cantidad) && cantidad > 0) {

//                 carrito.push({
//                     nombre: productoEncontrado.nombre,
//                     precio: productoEncontrado.precio,
//                     cantidad: cantidad

//                 });

//             alert(`${cantidad} ${productoEncontrado.nombre} se ha(n) agregado al carrito.`);
//             } else {
//                 alert("La cantidad ingresada no es válida.");
//             }
//         } else {
//             alert("El producto seleccionado no se encontró en la lista.");
//         }
//     } else {
//         alert("No se encontraron productos en la categoría buscada.");
//     }
// } else {
//     alert("Favor ingresar una de las categorías mencionadas.");
// }











