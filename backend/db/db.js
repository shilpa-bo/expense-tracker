require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URI);
                  console.log('DB Connected')
    } catch (error) {
        console.log('DB Connection failed', error)
    } 
}
 
module.exports = {db};