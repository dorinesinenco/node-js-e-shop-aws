import readline from 'readline'
import { cart, getProducts } from "./data.mjs";



const io = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
})








const renderMainMenu = () => {
    console.clear()
    console.log("================================")
    console.log("MAIN MENU")
    console.log("================================")
    console.log("1. Catalog")
    console.log("2. Cart")
    console.log("0. Exit")

    io.question("choose > ", answer => {
        let option = parseInt(answer)
        switch (option) {
          case 1:

            getProducts().then((products) => {
              renderCatalog(products, (n, product, q) => {
                cart.items.push({ n, product, q });
                renderMainMenu();
              });
            });


            break;
          case 2:
            renderCart(cart)
            break;

          case 0:
            io.close();
            break;
        }
    })
}







const renderCart = (cart) => {
    console.clear()
    console.log("================================")
    console.log("CART")
    console.log("================================")
    
    cart.items.forEach((item, idx) => {
        // HW1: align columns
        console.log(idx + 1, item.product.name, item.q);
    });
    
    console.log("================================")
    console.log("1. Remove item");
    console.log("2. Change quantity");
    console.log("3. Checkout");
    console.log("0. Exit to Main menu");


    io.question("choose > ", (answer) => {
        let option = parseInt(answer);
        switch (option) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;

        case 0:
            getProducts().then((products) => {
              renderCatalog(products, (n, product, q) => {
                cart.items.push({ n, product, q });
                renderMainMenu();
              });
            });
            break;
        }
    });
}





// HW1: 
//    finish Remove item & Change quantity in CART MENU






const renderCatalog = (products, confirmCb) => {
    console.clear()
    console.log("================================")
    console.log("CATALOG")
    console.log("================================")
    
    products.forEach((product,idx) => {
        // HW1: align columns
        console.log(idx+1, product.name, product.price)
    })
    console.log("================================")
    console.log("0. Exit to Main menu");

    io.question("choose > ", answer => {
        let n = parseInt(answer)
        // HW3: check if you've got a number !
        if (1 <= n && n <= products.length) {
            let product = products[n-1]
            io.question(`how many "${product.name}": ? `, answer => {
              let q = parseInt(answer);
              // HW3: check if you've got a number !
              // ...
              let cost = q * product.price
              io.question(`product cost = "${cost}": confirm (y/n)? `, answer => {
                 switch (answer) {
                    case 'y':
                        confirmCb(n, product, q)
                    break;
                    case 'n':console.log(`product "${product.name}" was not confirmed!`);break;
                    default: console.log('Invalid option'); break;
                 }
                
              })
              
            })
        } else if (n === 0) {
            renderMainMenu()
        }


    })
}





export { renderCatalog, renderMainMenu, renderCart };