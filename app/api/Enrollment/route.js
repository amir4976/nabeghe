import ConnectToDB from "@/utils/ConnectToDB"
import enrollmentModel from "@/models/Enrollment";
import userModel from "@/models/Users";
import courseModel from "@/models/Courses";
import { NextResponse } from "next/server";
import { authUser } from "@/utils/authUser";

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

    const updateCourse = await courseModel.updateOne({ _id: createEnrollment.courseId }, {  $push: { enrolls: createEnrollment._id } })
    
    return NextResponse.json({message:"student enrolled"})



    return NextResponse.json({message:"hello"})
}


export async function GET(){

    ConnectToDB()
    // console.log(id)
    // const isUser =await userModel.findOne({_id:id})
    const isUser =await authUser()
    const id = isUser.id;
    
    if(!isUser){
        return NextResponse.json({message:"user not found"})
    }
    const enrollment = await enrollmentModel.find({studentId:id},'courseId')



    const courses = await courseModel.find({_id:{ $in: enrollment.map(item => item.courseId)}})
    console.log(courses)

    return Response.json({courses})

}