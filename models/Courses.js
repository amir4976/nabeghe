import mongoose from "mongoose";
require("./Users"); // Ensure these files are in the correct paths and named properly
require("./Enrollment");
require("./Comments");

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
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
    category: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Ensure the User model is correctly defined
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments', // Ensure the Comment model is correctly defined
        }
    ],
    enrolls: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Enrollment', // Ensure the Enrollment model is correctly defined
        }
    ],
    priceWhithDiscount: {
        type: Number,
        default: 0
    }
},{timestamps:true});

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
export default Course;
