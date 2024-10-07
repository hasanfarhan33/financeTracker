const express = require('express')

const router = express.Router() 

// GET all transactions 
router.get("/", (req, res) => {
    res.json({msg: "GET all transactions"})
})

// GET one transaction 
router.get("/:id", (req, res)=>{
    res.json({msg: "GET one transaction"})
})

// POST a transaction 
router.post("/", (req, res) => {
    res.json({msg: "POST a transaction"})
})

// DELETE a transaction 
router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE a transaction"})
})

// UPDATE a transaction 
router.patch("/:id", (req, res)=> {
    res.json({mssg: "UPDATE a transaction"})
})

module.exports = router 