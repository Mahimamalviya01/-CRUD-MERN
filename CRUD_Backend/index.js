const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcryptjs=require("bcryptjs")
const modell=require("./schama")
const reg=require("./regShema")

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


app.get("/user", async(req,res)=>{
  const data= await modell.find({})
   res.json({sucess:true, data : data})
})

app.post("/add-data", async(req, res) => {
    console.log(req.body)
    const data = new modell(req.body)
    await data.save()
    res.send({sucess:true, message : "data save successfully",data : data})
  });


  app.put("/edit", async (req, res) => {
    console.log(req.body)
    const { _id, ...rest } = req.body
    console.log(rest)
    const data = await modell.updateOne({ _id},{ $set: rest })
    res.send({ sucess: true, message: "data update successfully", data: data })
  })
  

  app.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).send({ message: 'Invalid ObjectId' });
     }  
    console.log(id)
    const data=await modell.deleteOne({_id:id})
    res.send({sucess:true, message : "data delete successfully",data : data})
  })

  
app.post("/signup", async(req, res) => {
  console.log(req.body)
  const data = new reg(req.body)
  await data.save()
  res.send({sucess:true, message : "data save successfully",data : data})
});

app.get("/login", async(req,res)=>{
  const {email,pass}=req.body;
  console.log(email,pass)

  await reg.findOne({email:email})
  .then(user =>{
    if(user){
      if(user.pass === pass){
        res.json("sucess")
      } else{
        res.json("the password is Incorrect")
      }
    }
    else{
      res.json("no record exiested")
    }
  })
})


  
