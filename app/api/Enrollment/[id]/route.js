import ConnectToDB from "@/utils/ConnectToDB"
import userModel from "@/models/Users";
import enrollmentModel from "@/models/Enrollment";
import courseModel from "@/models/Courses";
export async function GET(req,{params}){

    ConnectToDB()
    const {id} = params;
   
    const isUser =await userModel.findOne({_id:id})

    if(!isUser){
        return NextResponse.json({message:"user not found"})
    }
    const enrollment = await enrollmentModel.find({studentId:id},'courseId')
    //^  بعدا یه کاری کن که اینجا وقتی دنبال انرول بود بتونه تیچیر هم بگیره اون پاپیولیت نمیشه نمیدونم چرا حواست باشه
 
    const courses = await courseModel.find({_id:{ $in: enrollment.map(item => item.courseId)}})
    console.log(courses)

    return Response.json({courses})

}