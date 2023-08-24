

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
    if (data.message == "Product added successfully") {
        alert("Producto agregado al carrito n° " + cartId);
    }
    return data;
}









