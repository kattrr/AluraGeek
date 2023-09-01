import { productServices } from "../service/serviceProducts.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const imgUrl = document.querySelector("[data-url]").value
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    console.log(name + " " + price +" "+ imgUrl);
    productServices.crearProducto(name, imgUrl, price).then(respose =>{
        window.location.href = "../screens/productos.html"
    }).catch(err => console.log(err));
});