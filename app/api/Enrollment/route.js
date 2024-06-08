import ConnectToDB from "@/utils/ConnectToDB"
import enrollmentModel from "@/models/Enrollment";
import userModel from "@/models/Users";
import courseModel from "@/models/Courses";
import { NextResponse } from "next/server";

export async function POST(req){
    ConnectToDB()
    const {studentId,courseId} = await req.json()

    const student = await userModel.findOne({_id:studentId})
    if(!student){
        return NextResponse.json({message:"student not found"})
    }

    const course = await courseModel.findOne({_id:courseId})
    if(!course){
        return NextResponse.json({message:"course not found"})
    }

    const isEnrollmentExist = await enrollmentModel.findOne({studentId,courseId})
    if(isEnrollmentExist){
        return NextResponse.json({message:"student already enrolled"})
    }

    const createEnrollment = await enrollmentModel.create({
        studentId,
        courseId
    })
    console.log(createEnrollment._id)
    const updateCourse = await courseModel.updateOne({ _id: createEnrollment.courseId }, {  $push: { enrolls: createEnrollment._id } })
    
    return NextResponse.json({message:"student enrolled"})



    return NextResponse.json({message:"hello"})
}

