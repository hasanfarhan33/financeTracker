const express = require('express')
require('dotenv').config()

const app = express() 

// listen for requests 
const port = process.env.PORT || 4000 

const transactionRoutes = require("./routes/transactionRoutes")

app.use(express.json()) 

// Middleware 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use("/api/transactions", transactionRoutes)

app.get("/", (req, res) => {
    res.json({"msg":"Welcome to the app!"})
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${port}` )
})