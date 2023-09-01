//GET
const listaProductos = () => fetch("http://localhost:3000/producto").then(response => response.json());

//POST
const crearProducto = (name, imgUrl, price) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({name, imgUrl, price, id: uuid.v4()})
    });
};
export const productServices = {
    listaProductos,
    crearProducto
};