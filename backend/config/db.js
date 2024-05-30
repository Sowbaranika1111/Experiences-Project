import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Sowbaranika:111111111@cluster0.tros039.mongodb.net/Experiences prjt').then(()=>console.log("DB Connected"));
}
