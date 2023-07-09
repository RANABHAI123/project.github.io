const mongoose=require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupTutorial")
.then(()=>{
    console.log("mongobd connected");
})
.catch(()=>{
    console.log("fail to connected")
})


const LogINSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})



const collection=new mongoose.model("LogInCollection",LogINSchema)


module.exports=collection