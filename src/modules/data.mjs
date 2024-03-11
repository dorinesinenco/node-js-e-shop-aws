import {readFile, writeFile} from 'node:fs/promises'





const getProducts = async () => {
    let data = await readFile("./storage/products.json");
    let products = JSON.parse(data.toString());

    return products;
}


const saveCart = async (cart) => {
    await writeFile("./storage/cart.json", JSON.stringify(cart,null,2) );
    return true
}






















const cart = {
  items: []
}


export { getProducts, saveCart, cart };