
import mongoose from "mongoose";


const LongDecSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: 'Course', // Assuming you have a Course model
        required: true
    },
    
})

export default mongoose.models.LongDec || mongoose.model('LongDec',LongDecSchema)
