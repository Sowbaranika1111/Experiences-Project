import userModel from '../models/userModel.js';

// Add videos to user fav
const addTofav = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });

        // Check if user data is null
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let favData = userData.favData || {};  // Initialize favData if it doesn't exist
        const videoId = req.body.videoId;

        if (!favData[videoId]) {
            favData[videoId] = true;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { favData });
        res.json({ success: true, message: "Added to favourites!" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" });
    }
};

// Remove videos from user fav
const removeFromFav = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);

        // Check if user data is null
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let favData = userData.favData || {};  // Initialize favData if it doesn't exist
        const videoId = req.body.videoId;

        if (favData[videoId]) {
            delete favData[videoId];
        }

        await userModel.findByIdAndUpdate(req.body.userId, { favData });
        return res.json({ success: true, message: "Removed from favourites!" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" });
    }
};

// Fetch user fav data
const getFav = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);

        // Check if user data is null
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let favData = userData.favData || {};  // Initialize favData if it doesn't exist
        res.json({ success: true, favData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addTofav, removeFromFav, getFav };
