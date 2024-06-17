import expModel from "../models/expModel.js";
import fs from 'fs' 

// add experiences 

const addExp = async(req,res) =>{
    let video_filename = `${req.file.filename}`

    const experiences = new expModel({
        name: req.body.name,
        age: req.body.age,
        profession: req.body.profession,
        country: req.body.country,
        meditating_experience: req.body.meditating_experience,
        exp_category: req.body.exp_category,
        exp_desc: req.body.exp_desc,
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

// displaying all the experiences video listed in the db
const listExp = async(req,res) =>{
    try{
        const exps = await expModel.find({});
        res.json({success:true,data:exps})
    }
    catch(error){
        console.log("Error")
        res.json({success:false,message:"Error"})
    }
}


// remove experiences
const removeExp = async(req,res) => {
    try{
        const exp =  await expModel.findById(req.body.id);
        fs.unlink(`uploads/${exp.video}`,()=>{}) //dlting vdo from uploads folder

        await expModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Experience removed"});
    }
    catch (error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addExp,listExp,removeExp}
//this goes to expRoute.js