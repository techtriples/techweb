const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
},{timestamps:true})

const userCollection=new mongoose.model('communityUsers',userSchema);
module.exports=userCollection;