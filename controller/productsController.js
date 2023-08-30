import { serviceProducts } from "../service/serviceProducts";

const newProduct = (name, imgUrl, price, id) => {
    const card = document.createElement("div")
    const content = ` 
    <div class="card">
        <img class="card__img" src="${imgUrl}">
        <h3 class="card__text card__text--title">${name}</h3>
        <p class="card__text card__text--price">${price}</p>
        <a class="card__link" href="../screens/productos.html?id=${id}">ver producto</a>
    </div>`

    card.innerHTML = content
    card.dataset.id = id

    return card
}

const products = document.querySelector('[data-product]')