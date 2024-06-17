import expModel from "../models/expModel.js";
import fs from 'fs' 

// add experiences 

const addExp = async(req,res) =>{
    let video_filename = `${req.file.filename}`

    const experiences = new expModel({
        name: req.body.name,
        age: req.body.age,
        profession: req.body.name,
        country: req.body.name,
        meditating_experience: req.body.name,
        exp_category: req.body.name,
        exp_desc: req.body.name,
        video:video_filename
    })
    try {
        await experiences.save(); //this mthd isused to save data in the db
        res.json({success:true,message:"Experience added"})
    } 
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addExp}

//this goes to expRoute.js