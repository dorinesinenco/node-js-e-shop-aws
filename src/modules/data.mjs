import {readFile} from 'node:fs/promises'





const getProducts = () => {
    return readFile("./storage/products.json")
      .then(data => {
        let products = JSON.parse(data.toString());
        return products
      })
      .catch(err => {
        console.log("Error: cannot read products!");
      });
}

























const cart = {
  items: []
}


export { getProducts, cart };