import mongoose from 'mongoose'; 
const {Schema, model} = mongoose; 

const userSchema = new Schema({
    firstName: {type: String, default: ""}, 
    lastName: {type: String, default: ""}, 
    username: {type: String, required: true}, 
    password: {type: String, required: true}, 
    totalSavings: {type: Decimal128, default: 0.0} 
})

const transactionSchema = new Schema({
    userId: userSchema, 
    amount: {type: Number, required: true}, 
    transactionType: {type: String, default: "Other"}, 
    description: {type: String, default: ""}
}, {timestamps: true})

const userModel = model("Users", userSchema)
const transactionModel = model("Transactions", transactionSchema)

module.exports = {userModel, transactionModel}