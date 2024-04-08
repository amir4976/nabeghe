const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
})


export default mongoose.models.User || mongoose.model('User',userSchema)