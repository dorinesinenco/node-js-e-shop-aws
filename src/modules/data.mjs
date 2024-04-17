// import {readFile, writeFile} from 'node:fs/promises'
import postgres from "postgres";
const sql = postgres(
  "postgres://postgres:qazwsx@localhost:10000/e_shop_db",
  {}
);
// HW1: REWRITE THIS CODE USING DB



const getProducts = async () => {
  let products = await sql`SELECT * FROM products;`
  return products
}

const getProductById = async (id) => (await sql`SELECT * FROM products WHERE id = ${id};`).shift();


const saveOrder = async (order) => {
    await sql`INSERT INTO orders (
       id, productId, fullName, emailAddress, phoneNumber
    ) VALUES (${order.id}, ${order.productId}, ${order.fullName}, ${order.emailAddress}, ${order.phoneNumber})`;
}

const confirmOrder = async (id) => {
    await sql`UPDATE orders SET payed = true WHERE id = ${id};`;
}

















const saveCart = async (cart) => {
    await writeFile("./storage/cart.json", JSON.stringify(cart,null,2) );
    return true
}






















export { getProducts, saveCart, getProductById, saveOrder, confirmOrder };