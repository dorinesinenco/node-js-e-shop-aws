import {readFile, writeFile} from 'node:fs/promises'

// HW1: REWRITE THIS CODE USING DB



const getProducts = async () => {
    let data = await readFile("./storage/products.json");
    let products = JSON.parse(data.toString());

    return products;
}

const getProductById = async id => (await getProducts()).find( product => product.id === id)


const saveOrder = async (order) => {
    let data = await readFile("./storage/orders.json");
    let orders = JSON.parse(data.toString());
    orders.push(order);
    data = JSON.stringify(orders,null,2)
    writeFile("./storage/orders.json",data);
}

















const saveCart = async (cart) => {
    await writeFile("./storage/cart.json", JSON.stringify(cart,null,2) );
    return true
}






















export { getProducts, saveCart, getProductById, saveOrder };