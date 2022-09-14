import Express from "express"
import Products from "./products.js"
import fs from "fs"



const app = Express()
const port = 3000
let path = "./products.js"

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(Express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)})

// Get the first page
app.get("/", (req, res) => {
    res.send('Welcome to the API')
})

// Get the list of all products   
app.get("/products", (req, res) => {
    res.json(Products)
    
})

// Get one product by id
app.get("/products/:id", (req, res) => {
    res.json(Products.find((product) => product.id === Number(req.params.id)))

})

// Create a new product
app.post("/products", (req, res) => {
    // res.send(req.body)
    Products.push(req.body)
    const newListOfProducts = `const products = ${JSON.stringify(Products)}\nexport default products;`
    fs.writeFile(path, newListOfProducts, (err) => {console.error(err)})

        res.json(req.body)
    //  res.send(Products)

})

// Update a product by id and status property
app.put("/products/:id", (req, res) => {
    const product = Products.find((product) => product.id === Number(req.params.id))
    if (product) {
        product.status = req.body.status
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
    const newListOfProducts = `const products = ${JSON.stringify(Products)}\nexport default products;`
    fs.writeFile(path, newListOfProducts, (err) => {console.error(err)})
})

// Delete a product by id
app.delete("/products/:id", (req, res) => {
    const product = Products.find((product) => product.id === Number(req.params.id))
    if (product) {
        res.json(product)
        Products.splice(Products.indexOf(product), 1)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
    const newListOfProducts = `const products = ${JSON.stringify(Products)}\nexport default products;`
    fs.writeFile(path, newListOfProducts, (err) => {console.error(err)})
})


