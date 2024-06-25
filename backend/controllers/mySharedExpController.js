import userModel from "../models/userModel.js";

const addToMySharedExpPage = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId })
        res.json({success:true,userData})

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}

const removeFromMySharedExpPage = async (req,res) => {

}

const getFromMySharedExpPage = async (req,res) => {

}


export { addToMySharedExpPage , removeFromMySharedExpPage , getFromMySharedExpPage}