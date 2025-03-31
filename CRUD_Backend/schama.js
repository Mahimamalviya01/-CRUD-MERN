const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    uid: Number,
    name:String,
    email:String,
    age:Number
})

const modell=mongoose.model("cruds",schema)
module.exports=modell


