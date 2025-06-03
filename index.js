const express=require("express")
const mongoose=require("mongoose")

const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const authRoutes=require("./routes/auth")
const RmsUser = require("./models/RmsUser")
app.use(cors())
app.use(express.json())
dotenv.config()
mongoose.connect(process.env.MONGODB).then(()=>console.log("Database connected successfully")).catch(error=>console.error(error))

app.use("/auth",authRoutes);
const PORT=process.env.PORT||5000

app.get("/",async(req,res)=>{
    res.status(200).json({message:"RMS Backend"})
})
app.listen(PORT,()=>{
    console.log("App is running on the PORT: "+PORT)
})