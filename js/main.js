//Traigo Array
let stockJuegos = [];
fetch('js/juegos.json')
    .then( (res) => res.json())
    .then( (juegos) => {
        stockJuegos = juegos;  
        juegos.forEach((game, indice) => {
          console.log(game)
          let juegoContenedor = document.createElement("div");
          juegoContenedor.classList.add("col-md-3", "my-2");
          let html = `<div class="card" style="width: 18rem;">
                    <img src="${game.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${game.nombre} <br> ${game.anio}</h5>
                      <p class="card-text">$ ${game.precio} + IVA</p>
                      <a href="#carro" class="btn btn-primary" id="button" title="Agregar juego al carrito" onClick="agregarAlCarrito(${indice})">Agregar al Carrito</a>
                    </div>
                 </div>`;
          juegoContenedor.innerHTML = html;
        contenedorJuegos.appendChild(juegoContenedor);
    })
    guardarProductosLS(stockJuegos);
  });
// LS
function guardarProductosLS(stockJuegos) {
  localStorage.setItem("juegos", JSON.stringify(stockJuegos));
}
function cargarProductosLS() {
  return JSON.parse(localStorage.getItem("juegos"));
}
//Carrito de Compras
 let popupCarrito = document.getElementById("carro");
 const agregarAlCarrito = (indicestockJuegos) => {  
  const indiceEncontradoCarrito = carro.findIndex((elemento) => {
     return elemento.id === stockJuegos[indicestockJuegos].id;
   });
   if (indiceEncontradoCarrito === -1) {
     //Agrego el juego
     const juegoAgregar = stockJuegos[indicestockJuegos];
     juegoAgregar.cantidad = 1;
     carro.push(juegoAgregar);
 
     dibujarCarrito();
   } else {
     //Incremento Cantidad
     carro[indiceEncontradoCarrito].cantidad++;
 
     dibujarCarrito();
   }
   localStorage.setItem("carrito", JSON.stringify(carro));
   juegoAgregado();
};
const dibujarCarrito = () => {
   let total = 0;
   popupCarrito.className = "carro";
   popupCarrito.innerHTML = "";
   if (carro.length > 0) {
     totalesCarrito.style.display = "block";     
     carro.forEach((game, indice) => {
       total = total + game.precio * game.cantidad * 1.21;
       const carritoContainer = document.createElement("tr");
          carritoContainer.innerHTML = `
          <th scope="row" class="text-center">${game.nombre}</th>
          <td class="text-center">${game.cantidad}</td>
          <td class="text-center">$ ${game.precio * 1.21}</td>
          <td class="text-center">$ ${game.precio * game.cantidad* 1.21}</td>
          <td class="text-center"><button class="btn btn-primary p-0" id="remover" onClick="removeProduct(${indice})"><img src="media/eliminar1.png" alt="Carrito" width="22" title="Eliminar juego seleccionado"></button></td>
        `   
      popupCarrito.appendChild(carritoContainer);
     });
     // TOTALES + FINALIZAR COMPRA
     const totalContainer = document.createElement("div");
     totalContainer.className = "container";
     totalContainer.innerHTML = `<div class= "container-fluid d-flex justify-content-center  bg-secondary text-light my-3" id="card"><strong> TOTAL $ ${total}</strong></div>
     <button class= "btn " data-bs-toggle="modal" title="Confirmar juegos seleccionados" data-bs-target="#exampleModal" data-bs-whatever="@mdo" id="button"> Confirmar juegos seleccionados </button>`;
     popupCarrito.appendChild(totalContainer);
   } else {
     popupCarrito.classList.remove("carro");
   }
};
let carro = [];
localStorage.getItem("carrito") && (
  carro = JSON.parse(localStorage.getItem("carrito")),
  dibujarCarrito());

const removeProduct = (indice) => {
   carro.splice(indice, 1);
   localStorage.setItem("carrito", JSON.stringify(carro));
   juegoEliminado();
   dibujarCarrito();   
 };

const finalizarCompra = () => { 
  localStorage.removeItem("carrito", JSON.stringify(carro));
  compraFinalizada();
};

const juegoAgregado = () => {
  Toastify({
    text: "Juego agregado al carrito con éxito!",    
    duration: 2500    
    }).showToast();
};

function juegoEliminado() {
  Toastify({
    text: "Juego eliminado del carrito",    
    duration: 2500,
    style: {
      background: "linear-gradient(to right, #ff5959, #ff0000)",
    }    
    }).showToast();
};
function compraFinalizada() {
  Swal.fire({
      position: 'center',
      title: 'Compra Exitosa!',
      icon: 'success',
      text: 'Dentro de las 72 hs hábiles, estarás recibiendo el producto en el domicilio informado. Recordá que el pago de tu pedido lo deberás realizar una vez recibido el mismo',
      confirmButtonText: "Entendido!",
    }).then((result) => {
        if (result.isConfirmed) {
          location.reload()
        }
    });
}
cargarProductosLS();
document.getElementById("btnConfirmar").addEventListener("click",finalizarCompra);


