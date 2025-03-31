

// ye code/Api only nodejs and mongoose(mongodb) se bna h jise postman se bhi test kia h 
//only for hume postman testing ko crud Op pe revison krna ho  
//and schema and model to schema.js me h hi 

const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const modell=require("./schama")


const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/crudOPs") 
  .then(()=>{
    console.log("connect to DB")
    app.listen(3001, ()=>{
        console.log("server is running")
    })    
  })
  .catch((err)=> console.log(err))




app.get("/", async(req,res)=>{
   const data= await modell.find({})
    res.json({sucess:true, data : data})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/add-data", async(req, res) => {
    console.log(req.body)
    const data = new modell(req.body)
    await data.save()
    res.send({sucess:true, message : "data save successfully",data : data})
  });


  app.put("/edit", async (req, res) => {
     console.log(req.body)
     const {id,...rest}=req.body
     console.log(rest)
     const data=await modell.updateOne({_id : id},rest)
     res.send({sucess:true, message : "data update successfully",data : data})
  }) 


  app.delete("/delete/:id", async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const data=await modell.deleteOne({_id:id})
    res.send({sucess:true, message : "data delete successfully",data : data})
  })
