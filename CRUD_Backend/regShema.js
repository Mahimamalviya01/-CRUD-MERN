const mongoose=require ("mongoose")

const regSchema= new mongoose.Schema({
    fname:String,
    email:String,
    pass:String
})

const reg=mongoose.model("users",regSchema)
module.exports=reg
