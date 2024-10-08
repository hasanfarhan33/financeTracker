const pgp = require('pg-promise')() 

const cn = {
    host: "localhost", 
    port: 5432, 
    database: "transactionsDB", 
    user: "postgres", 
    password: "Farhan@1998"
}

// Database instance (CONNECTING TO THE DB)
const db = pgm(cn) 

module.exports = db