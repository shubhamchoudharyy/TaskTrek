const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userId:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        default:null,
        min:8,
    },
    phone:{
        type:Number,
        unique:true,
        default:0,
    },
    instituteName:{
        type:String,
    },
    uniqueId:{
        type:String,
    },
    course:{
        type:String,
    },
    branch:{
        type:String,
    },
    graduationYear:{
        type:String
    },
    isCoordinator:{
        type:Boolean,
        default:false,
    },
    isTeacher:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:String,
        default:false
    }

},{timestamps:true})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;