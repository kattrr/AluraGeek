//GET
const productsList = () => {
    fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .catch(error => console.log(error))
}

//POST
const createProduct = (name, imgUrl, price) => {
    fetch("http://localhost:3000/productos",{
    method: "POST",
    headers: {
        "Content-type": "application/json"
        },
    body: JSON.stringify({
        name,
        imgUrl,
        price
        })
    }).then(response => {
        if (response.ok){
            return response.body
        }
    })
    throw new Error("Couldn't create product")
}

//PUT

//DELETE

export const serviceProducts = {
    productsList,
    createProduct
}