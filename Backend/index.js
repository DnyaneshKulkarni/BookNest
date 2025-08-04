import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors' //cors is a package that allows you to enable Cross-Origin Resource Sharing (CORS) in your Express.js application

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'


const app = express()

app.use(cors())  //this is middleware to allow cross-origin requests
app.use(express.json()) //this is middleware to parse JSON request bodies 

dotenv.config()

const port=process.env.PORT || 4000
const URI = process.env.MongoDBURI

// conntecting to mongoDB
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB successfully");
    
}catch(error){
  console.error("Error connecting to MongoDB:", error)
}

// defining routes
app.use("/book",bookRoute)
app.use("/user", userRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
