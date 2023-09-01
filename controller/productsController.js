import { productServices } from "../service/serviceProducts.js"

const crearNuevoProducto = (imgUrl, name, price, id) => {
    const producto = document.createElement("div");
    const contenido =
        `<div class="card">
            <img class="card__img" src="${imgUrl}">
            <h3 class="card__text card__text--title">${name}</h3>
            <p class="card__text card__text--price">${price}</p>
            <a class="card__link" href="">${id}</a>
        </div>`;
    producto.innerHTML = contenido;
    return producto;
}     

const product = document.querySelector("[data-product]");

productServices.listaProductos().then((data)=>{
    data.forEach( producto  =>{
        const nuevoProducto = crearNuevoProducto(producto.imgUrl, producto.name, producto.price, producto.id);
        product.appendChild(nuevoProducto);
    });
}).catch((error)=>console.log(error));