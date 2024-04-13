import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { VerifyToken } from "@/utils/auth";
import commentModel from "@/models/Comments";
import userModel from '@/models/users'
import ConnectToDB from "@/utils/ConnectToDB";
import courseModel from '@/models/Courses'
export async function GET() {
    
    const comments = await commentModel.find()
    return NextResponse.json({ comments }, { status: 200 })
}


export async function POST(req) {
    ConnectToDB();
    try {
                // get data client
                const { comment, courseId ,email,author} = await req.json();

                if(comment.length<10||comment.trim()||email.trim()||author.trim() ){
                    return NextResponse.json({ message: "Comment must be at least 10 characters" })
                }

                // verify token
                const token = req.cookies.get("token")?.value;
                if (!token) {
                    return NextResponse.json({ message: "Please login first" })
                }                
                // verify token payload
                const tokenPayload = VerifyToken(token);
                if (!tokenPayload) {
                    return NextResponse.json({ message: "Please login first" })
                }
                // check if course exist
                const FindUser = await userModel.findOne({ email: tokenPayload.email })
                if (!FindUser) {
                    return NextResponse.json({ message: "Please login first" })
                }

                // check if Course exist
                const FindCourse = await courseModel.findOne({ _id:courseId })
                if (!FindCourse) {
                    return NextResponse.json({ message: "course not found" }, { status: 404 })
                }

                // create comment
                const createComment = await commentModel.create({
                    comment,
                    courseId,
                    author,
                    email
                })
                
                // update course items
                const updateCourse = await courseModel.updateOne({ _id: courseId }, { $push: { comments: createComment._id } })
                
                return NextResponse.json({ message: "comment created" }, { status: 201 })
    } catch (error) {
            console.log(error)
            return NextResponse.json({ message: "Please" })
   
    }
    }