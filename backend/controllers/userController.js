const db = require('../db/dbConnector')

// get ALL Users
const getAllUsers = async (tableName, callback) => {
    db.any(`SELECT * FROM ${tableName}`)
    .then((result) => {
        callback(null, result); 
    })
    .catch((err) => {
        callback(err); 
    })
}

// get a SINGLE user 
const getSingleUser = async (tableName, username, callback) => {
    if (username == null) {
        console.log("ERROR username is empty")
        return 
    }

    db.one(`SELECT * FROM ${tableName} WHERE username = ${username}`)
    .then((result) => {
        if(result.length) {
            callback(null, result)
        }
        else {
            console.log("USER NOT FOUND")
        }
    })
    .catch((err) => {
        callback(err)
    })
}

// post a user 
const addUser = () => {
    
}

//  update a user 
const updateUser = () => {

}

// delete a user
const deleteUser = () => {

}

module.exports = {
    getAllUsers, 
    getSingleUser,
}