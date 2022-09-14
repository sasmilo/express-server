import Express from "express"
import Products from "./products.js"

const app = Express()
const port = 3000
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

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
app.post("/add", (req, res) => {
    // res.send(req.body)
    res.json(Products.push(req.body))
    //  res.send(Products)

})

// Update a product by id and status property
app.put("/updatestatus/:id", (req, res) => {
    const product = Products.find((product) => product.id === Number(req.params.id))
    if (product) {
        product.status = req.body.status
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }

})

// Delete a product by id
app.delete("/delete/:id", (req, res) => {
    const product = Products.find((product) => product.id === Number(req.params.id))
    if (product) {
        res.json(product)
        Products.splice(Products.indexOf(product), 1)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }

})


