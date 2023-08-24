
const formAdd = document.getElementById("formAdd");
const formEdit = document.getElementById("formEdit");
const formDelete = document.getElementById("formDelete");
const productContainer = document.getElementById("productContainer");
const idProduct = document.getElementById("idProduct").innerText;



async function getProducts() {
    const res = await fetch("/api/v1/products");
    const data = await res.json();
    return data;
}

const addCartProduct = async (pid) => {
    const userFound = await fetch("/api/v1/session/cartid", {
        method: "GET",
    });
    const userData = await userFound.json();
    
    const cartId = userData.carts;
    const res = await fetch(`/api/v1/carts/${cartId}/products/${pid}`, {
        method: "POST",
    });
    const data = await res.json();
    if (data.message === "Product added successfully") {
        alert("Producto agregado al carrito n° " + cartId);
    }
    return data;
}









