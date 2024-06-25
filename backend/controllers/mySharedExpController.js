import userModel from "../models/userModel.js";

const addToMySharedExpPage = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId })
        let expData = await userData.expData

        const expId = req.body.userId

        if(!expData[expId]){
            expData[expId] = true;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { expData })
        res.json({success:true,message:"Added to User-Profile"})

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