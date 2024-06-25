import userModel from "../models/userModel.js";
import expModel from "../models/expModel.js";

const addToMySharedExpPage = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        const expEmail = req.body.email;
        const expData = await expModel.findOne({ email: expEmail });

        if (!expData) {
            return res.json({ success: false, message: "No experiences found for the provided email" });
        }

        // Verify if the email matches the user's email
        if (userData.email !== expEmail) {
            return res.json({ success: false, message: "Email does not match user's email" });
        }

        // Extract relevant data
        const { name, age, category, exp_desc } = expData;

        // Update user's experiences
        await userModel.findByIdAndUpdate(req.body.userId, 
            { $push: { experiences: { name, age, category, exp_desc } } },
            { new: true }
        );

        res.json({ success: true, message: "Experience added to user profile", data: { name, age, category, exp_desc } });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding experience" });
    }
};

export default addToMySharedExpPage;