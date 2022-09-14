import Express from "express"
import Products from "./products.js"

const app = Express()
const port = 3000
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)})


app.get("/", (req, res) => {
    res.send('Welcome to the API')
})

    
app.get("/products", (req, res) => {
    res.json(Products)
    res.send(req.params)
})


app.get("/products/:id", (req, res) => {
    res.json(Products.find((product) => product.id === Number(req.params.id)))
    res.send(req.params)
    // res.json(Products)
})


app.post("/add", (req, res) => {
    // res.send(req.body)
    res.json(Products.push(req.body))
     res.send(Products)


})


app.put("/", (req, res) => {})
app.delete("/", (req, res) => {})

