# Ecommerce_API

It is an API for an ecommerce platform admin to manage product inventory.
-	Tech Stack: Node.js & Mongo DB

1. API to add products to the database
 URL [POST]: /products/create
 
2. API to list products
 URL [GET] : /products
3. API to delete products
URL [DELETE] : /products/:id
4. API to update quantity of a product (can be incremented or decremented)
URL [POST] : /products/update

   body:{
    id:"give the product Id",
    number:"quantity to increment or decrement"
   }

