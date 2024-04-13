import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    ShortDec: {
        type: String,
        required: true
    },
    LongDec: {
        type: String,
        required: true
    },
    caregory:{
        type: String,
        required: true
    },
    teacher:{
        type: mongoose.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    score:{
        type: Number,
        default: 0
    },
    image:{
        type: String,
        required: true
    },
    comments:{
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Comment', // Assuming you have a Comment model
            }
        ]
    }
    ,
    enrolls:{
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Enrollment', // Assuming you have a User model
            }
        ]
    }
    
    
})

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)