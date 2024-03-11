

folder/
   |
   +-- util.js (util.mjs) 
         |
       require() / import 
         |
         |          +--------- module
         v         /
+-----------------+---+
|                     |
|                     |
|                     |
|                     |
|          export  -------->  
|                     |
|                     |
|          require() <------       
|          import     |
|                     |
+---------------------+







## e-shop / v1.0


       entry point
        |
  main  |  
 (HoC)  v
+-----------------+---+
|                     |
|          import   <----------+ 
|                     |        | 
|                     |        +--- ui
|                     |        |    |
|                     |        |    +-- renderCatalog
+---------------------+        |
                               |    
                               +--- data
                                    |
                                    +-- products    










import ui from './modules/ui.mjs'
       ^        -------+--------        
       |               |  1. load ALL EXPORTED code into an object
       +---------------+  2. give it as "ui" variable











================================
CATALOG
================================
 1 Some Product 1     100
 2 Another Product 2  200
 3 Product 3          3000







# HW2: make a helper function
#      abc("CATALOG")
        v
================================
CATALOG
================================
        v
  USE THIS FUNCTION inside renderCatalog()










                   interface
                    |  
+---------------+   v
|               |<--|<------- stdin 
|    process    |   | 
|               |-->|-------> stdout
+---------------+













# node / fs (file system)
  > sync
  > callback
  > promise

data.mjs

  getProducts() ------------------------> consumer
    ^
    |
    |
  storage/products.json  







getProducts()
 |
 |
 v
fs.readFile(....,   ) 
                  |
                  |
                  v
                ( err, data )
                  |
                  .
                  .
                  v
                 products ?     








HW1: make a function called - getCart()
     which using promises will load the cart at the beginning  












## Node HTTP / server
    > http (s): client / server




