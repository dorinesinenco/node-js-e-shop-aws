import http from 'node:http'
import querystring from 'node:querystring'

import { getProducts, getProductById, saveOrder } from './modules/data.mjs'
import { render } from './modules/template.mjs'
import { readFile } from 'node:fs/promises'

import { v4 as uuid } from 'uuid'


import stripeMod from 'stripe'
const stripe = stripeMod("sk_test_6FRLqRGKysXgFEslhoragL8o");




const server = http.createServer(async (req,res) => {

    res.setHeader("Content-type", "text/html")
    
    let html 

    if (req.url === "/") {

      const products = await getProducts()
      html = await render('./pages/home.html', { products: products })

    } else if (req.url.startsWith("/images")) {
      html = await readFile(`.${req.url}`);
    } else if (req.url.startsWith("/buy")) {  // "/buy/1"

      // HW1: try to use regexp capture
      // HW2*: what if "/buy?id=1"

      let id = parseInt(req.url.split("/").pop())
      let product = await getProductById(id) 
      html = await render("./pages/order.html", { product: product })
     
    } else if (req.url.startsWith("/pay")) {
      // PAYMENT ///////////////////////////////////

      let parameters = req.url.split("?");
      let data = querystring.parse(parameters[1]);

      data.id = uuid();
      data.payed = false;
      data.productId = parseInt(data.productId)

      await saveOrder(data);
      


      let product = await getProductById(data.productId); 
    
      // working with stripe
      const productStripe = await stripe.products.create({
        name: product.name,
      });

      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: product.price * 100, // 10.00$
        product: productStripe.id,
      });

      const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
      });


      html = `You will be redirected to stripe in 3 seconds, otherwise click <a href="${paymentLink.url}">here</a>`;
      res.setHeader("Refresh", `3; URL=${paymentLink.url}`);
      // PAYMENT ///////////////////////////////////
    } else {
      html = `Oops, not found ;(`;
      res.statusCode = 404;
    }
      
    res.end(html)
})


server.listen("3000","localhost")
































