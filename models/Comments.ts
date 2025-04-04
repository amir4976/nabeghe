const mongoose = require('mongoose');
require("./Courses")
const commentSchema =new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String ,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    ,imutable:true
  }, 
   courseId: {
    type: mongoose.Types.ObjectId,
    ref: 'Course', // Assuming you have a Course model
    required: true
  },
  isAccepted:{
    type:Boolean,
    default:false
  }


});

export default mongoose.models.Comments || mongoose.model('Comments',commentSchema)
