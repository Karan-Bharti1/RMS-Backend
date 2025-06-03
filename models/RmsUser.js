const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type:String
  },
  email: String,
  role: {
    type: String,
    enum: ['engineer', 'manager']
  },
  skills: [String],
  seniority: {
    type: String,
    enum: ['junior', 'mid', 'senior']
  },
  maxCapacity: Number,
  department: String
});
userSchema.methods.comparePassword= async function(password){
   return bcrypt.compare(password,this.password) 
}
const RmsUser = mongoose.model('RmsUser', userSchema);
module .exports=RmsUser