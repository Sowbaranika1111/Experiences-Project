import express from "express"
import { addExp ,listExp ,removeExp } from "../controllers/expController.js"
import multer from "multer" //to create video storage system

//creating express router to create get mthd / post mthd / many other mthds
const expRouter = express.Router();

// to save the videos in the uploads folder
// Image Storage Engine
// creating storage using multer disk storage mthd

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`) //to ceate a unique file name everytime
    }
})

// creating middleware upload 
const upload = multer({storage:storage})

// sending form data to the server using post mthd ("an end-point address")
expRouter.post("/add",upload.single("video"),addExp)

// to display
expRouter.get("/list",listExp)
// to remove
expRouter.post("/remove",removeExp)
export default expRouter;

// then setting this up in the server.js file (api endpoints)

