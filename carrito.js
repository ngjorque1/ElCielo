
document.addEventListener('DOMContentLoaded', function () {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
  
    
    const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito')) || [];
  
    
    function cargarProductosEnCarrito() {
      contenedorCarrito.innerHTML = ''; 
  
      productosEnCarrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-en-carrito');
        div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button class="btn-aumentar" data-id="${producto.id}">Aumentar Cantidad</button>
          <button class="btn-disminuir" data-id="${producto.id}">Disminuir Cantidad</button>
        `;
        contenedorCarrito.appendChild(div);
      });
  
      
      const btnAumentar = document.querySelectorAll('.btn-aumentar');
      const btnDisminuir = document.querySelectorAll('.btn-disminuir');
  
      btnAumentar.forEach(btn => {
        btn.addEventListener('click', aumentarCantidad);
      });
  
      btnDisminuir.forEach(btn => {
        btn.addEventListener('click', disminuirCantidad);
      });
    }
  
    
    function aumentarCantidad(e) {
      const idProducto = e.currentTarget.getAttribute('data-id');
      const producto = productosEnCarrito.find(p => p.id === parseInt(idProducto));
  
      if (producto) {
        producto.cantidad++;
        guardarProductosEnLocalStorage();
        cargarProductosEnCarrito();
      }
    }
  
    
    function disminuirCantidad(e) {
      const idProducto = e.currentTarget.getAttribute('data-id');
      const producto = productosEnCarrito.find(p => p.id === parseInt(idProducto));
  
      if (producto && producto.cantidad > 0) {
        producto.cantidad--;
        guardarProductosEnLocalStorage();
        cargarProductosEnCarrito();
      }
    }
  
    
    function guardarProductosEnLocalStorage() {
      localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
    }
  
    
    cargarProductosEnCarrito();
  });
  







