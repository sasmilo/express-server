This is one simple example of a Express.js server with the addition of the nodemon package, which will automatically restart the server when changes are made to the code.

Run the server with the script: npm start

Using the server: http://localhost:3000

The REST API calls are in the file: http.rest (we are using REST Client extension for VS Code). If you want to run the calls, you need to install the extension and then open the file and click on the "Send Request" button, which is located right above the call.

REST API endpoints are:

http://localhost:3000/ - GET - returns a simple message, it's a home page

http://localhost:3000/products - GET - returns an actual list of products. Starts with the content of the file products.js in the JSON format

http://localhost:3000/products/id - GET - returns the JSON representation of the product with the given id 

http://localhost:3000/products - POST - creates a new product. The body of the request should be in the JSON format. The id of the new product is generated manually. The new product is added to the actual list of products.js. The response is the JSON representation of the new product.

http://localhost:3000/products/id - PUT - updates the product with the given id. The body of the request should be in the JSON format. The response is the JSON representation of the updated product.

http://localhost:3000/products/id - DELETE - deletes the product with the given id. The response is the JSON representation of the deleted product.

The file products.js contains the actual list of products. It is used to initialize the list of products and to save the updated list of products after the POST, PUT and DELETE calls.




