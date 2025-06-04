const express=require("express")
const mongoose=require("mongoose")

const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const authRoutes=require("./routes/auth")
const RmsUser = require("./models/RmsUser")
const RmsProject = require("./models/RmsProject")

app.use(express.json())
app.use(cors({
  origin: ["http://localhost:5173","*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
dotenv.config()
mongoose.connect(process.env.MONGODB).then(()=>console.log("Database connected successfully")).catch(error=>console.error(error))

app.use("/auth",authRoutes);
const PORT=process.env.PORT||5000

app.get("/",async(req,res)=>{
    res.status(200).json({message:"RMS Backend"})
})
app.post("/projects",async(req,res)=>{
    try {
        const data=req.body
            if (!data) {
      return res.status(400).json({ message: "No data provided" });
    }

    const newProject = new RmsProject(data);
    const savedProject = await newProject.save();

    res.status(201).json({ message: "Project created successfully", project: savedProject });
    } catch (error) {
        res.status(500).json({message:"Failed to post project data"})
    }
})
app.get("/projects/:managerId",async(req,res)=>{
    try {
        const data=await RmsProject.find({managerId:req.params.managerId}).populate("managerId");
        if(data ){
res.status(200).json(data)
        }else{
            res.status(404).json({message:"Data not found"})
        }
    } catch (error) {
        console.log(error)
         res.status(500).json({message:"Failed to get project data"})
    }
})
app.listen(PORT,()=>{
    console.log("App is running on the PORT: "+PORT)
})