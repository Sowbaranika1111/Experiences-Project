//Creating express server

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



//app config
const app = express()
const port = 4000


//middleware
app.use(express.json()) //using this middleware req from front-end to back-end will be parsed using json
app.use(cors()) // to access any backend from frontend

// db connection
connectDB();

//When we hit the end point , we get this msg 
//A http method to req the data from the server
app.get("/",(req,res)=>{ //using this response we are creating one response=>
    res.send("API Working")
}) 

//to run express server , we use app.listen and provide 'port' number
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
