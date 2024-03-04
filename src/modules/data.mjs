import fs from 'node:fs'



const getProducts = (cb) => {

    fs.readFile("./storage/products.json", (err, data)=> {
      if (err !== null) {
          console.log("Error: cannot read products!")
      } else if (data) {
          let products = JSON.parse(data.toString())
          cb(products)
      }
    })

}

























const cart = {
  items: []
}


export { getProducts, cart };