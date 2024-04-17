

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





LOCAL REPO


init        commit       commit         commit
x-----------x------------x--------------x-------------> master
                                         \
                                          ----- http-server-callback



                                                   host machine 
                                                    /
                       +---------------------------+---------+
BROWSER                |                         node        | 
-----------+           |                          ^          | 
           |           |                main.mjs  |          | 
           |           |    3000       +-----------------+   | 
           |           |  +----------->| server          |   | 
           |  HTTP     | /             .     ^           .   | 
           +--- req -->+ localhost           |               |   handler
                       | 127.0.0.1           +-------------------- (req,res) 
                       | +-----------  zoom                  .           |
                       |    1052       app1                  .           |
                       |                                     .           v
  



                        HTTP

       | ------------- req --------------> |       
CLIENT |                                   | SERVER 
       | <------------ res --------------- | 

                      [H]
                      [H]
                      [H]
                      [B]
                      [B]
                      [B]
                      [B]
                      [B]










# TEMPLATING ENGINES
 
   template
      |
      v
+-----------+
|           |
|  engine   | <-------- DATA
|           |
+-----------+
      |
      v
    rendered result  






# TODO: add images to products 



  |
  v
 GET "/images/1.webp" 
 GET "/images/2.webp" 
 GET "/images/no-photo.webp" 
  |
  v
req.url.startsWith("/images") ?
  |
  true
  |
  v 
    





USER 
 |
 v
home.html (catalog) 
        |
        +-- Product 1
              |
              +-- <a href="/buy/1">  ------------> /buy/xxxxx
                                                      |
        +-- Product 2                                 +<---- product data
              |                                       v 
              +-- <a href="/buy/2">                 order.html
                                                      |
        +-- Product 3                                 v
              ...                                   USER
                                                      |
                                                      v
                                                     PAY   















PAYMENT GATEWAYS
  > onsite
  > offsite


  payment link







CLIENT                                                 SERVER
 
    -------------- req GET ----- "/buy/1" -----------> req.url
                                                         v
                                                        id   
                                                         v
                                                         V   product = getProductById(id)  <--- data
                                                         v     v
                                        render(order.html, { product: product }) 
                                                         v
form <------------ res HTML -----------------------------+                                           
|
v
fills data
|
v
SUBMIT
v
name="productId"    | H
name="fullName"     |
name="emailAddress" | --> /pay?fullName=John Doe&emailAddress=... -----+
name="phoneNumber"  |                                                  | 
                                                                       v
                                                    /pay?fullName=John&emailAddress=jd%40example.host&...
                                                        |
                                                        v
                                                      fullName=John&emailAddress=jd%40example.host&...
                                                        |
                                                       .parse() 
                                                        v  
                                                        {
                                                          fullName: ...,
                                                          ...
                                                        }




                  SHOW FORM                        PROCESS FORM
              
              s              e                    s             e
              +--- req ------+                    +--- req -----+     
              |              |                    |      v      |
              |     id       v                    |     id      v
x-------------x==============x--------------------x=============x--------------------------->
                             |                    ^
                             v                    |
                             +--------------------+
                                 id (input > form)
                                    window
                                    CLIENT






HOW TO SAVE
-------------------
                         parse
                          |
orders.json ----- read ---+-> [{},{}]
                                |
                                v
                              .push()  
                                |
                                v
                              [{},{},{}]  
                                |
                                v
orders.json <--- write ----+----+                                
                           |
                         stringify  





GET --------- req ?productId=1&fullName=John+Doe+101&emailAddress=jd101%40example.host&phoneNumber=123456101 --------->
                          |
                         querystring.parse() 
                          v
                         data = {
                          id: ...       <------------- uuid()
                          payed: ...    <------------- false
                          productId: ...
                          fullName: ...
                          emailAddress: ...
                          phoneNumber: ...
                         }
                          |
                          v
                         saveOrder() 
                          |
                          v
                         orders.json 












stripe / gateway

  > payment link + redirect




  app ------- api / info / product + price + payment link --------->  STRIPE
                                               |
      <------------ url -----------------------+

 client -------- url ---------------------------+
                                                |
                                               pay/cancel
                                                |
                                                v
        <------------------- redirect ----------+                                           


 




# e-shop / docker / postgresql
  > docker
  > docker-compose
  
HOST (linux)
  \
+--+-------------------------------------------------------------+
                                       docker-compose.yml
                                             |
                                           config
                                             |  
  node-pgdb (container)                      v
      \                                    docker   <-----  postgres:16.2-bullseye (image) <--- docker-hub
  +----+-----------------------+             |
  |                            |             |
  |                <-------------------------+
  |                            |
  |                            |
  |     postgresql-server      |
  |      |   |      |          | ports
  |      |   |      +-- 5432 ------> 10000  <---- psql - no connection
  |      |   |                 |
  |      |   +-- e_shop_db     |
  |      |                     |
  |      v                     | volumes
  | /var/lib/postgresql/data -------> /data
  |                            |
  |                            |
  |                            |
  +----------------------------+



    CASCADING
     |
     |  products
     +-> +-- id         (PK)
     |   +-- name
     |   +-- price_amout
     |   +-- price_currency
     |   +-- image
     |  
     |  orders
     |   +-- id         (PK)
     +-- +-- productId 
         +-- fullName
         +-- emailAddress
         +-- phoneNumber
         +-- payed








     nodejs
       ^
       |
      run
       |
+------+------+
|             |
|             |
|    app (js) <---------- postgres ---------> postgresql-server
|             |        (driver/connector)
|             |
+-------------+