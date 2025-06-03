const express=require("express")
const mongoose=require("mongoose")

const cors=require("cors")
const dotenv=require("dotenv")
const http=require('http')
const authRoutes=require("./routes/auth")
const RmsUser = require("./models/RmsUser")
