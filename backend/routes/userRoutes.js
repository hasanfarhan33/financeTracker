const express = require('express')
const router = express.Router() 

const userController = require("../controllers/userController")

// get ALL users 
router.get("/", (req, res, next) => {
    userController.getAllUsers('userTable', (err, result) => {
        if (err) {
            next(err)
        } else {
            res.send(result); 
        }
    })
})

// get a SINGLE user 
router.get("/:id", (req, res, next) => {
    const {username} = req.params

    if (typeof username === 'string' || username instanceof String) {
        userController.getSingleUser('userTable', username, (err, result) => {
            if(err) {
                next(err)
            }
            else {
                res.send(result); 
            }
        })
    }
    else {
        console.log("Invalid Username")
        return 
    }
})

//  create a user 

//  udpate a user 

// delete a user 