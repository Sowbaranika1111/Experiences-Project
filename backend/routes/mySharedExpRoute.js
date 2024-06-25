import express from 'express'
import { addToMySharedExpPage, getFromMySharedExpPage, removeFromMySharedExpPage } from '../controllers/mySharedExpController.js'
import authMiddleware from '../middleware/auth.js';

const mySharedExpRouter = express.Router()

mySharedExpRouter.post("/add",authMiddleware,addToMySharedExpPage)
mySharedExpRouter.post("/remove",authMiddleware,removeFromMySharedExpPage)
mySharedExpRouter.post("/get",authMiddleware,getFromMySharedExpPage)

export default mySharedExpRouter