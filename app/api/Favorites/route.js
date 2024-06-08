import FavoritesModel from "@/models/Favorites";
import { authUser } from "@/utils/authUser";
import CourseModel from "@/models/Courses";
import { NextResponse } from "next/server";
import ConnectToDB from "@/utils/ConnectToDB";

// export async function GET ({params}){
//     const Response = await FavoritesModel.find({userID:params.id})
//     return Response.json(Response)
// }

export async function POST (req){
    ConnectToDB()
    const body = await req.json()
    const {courseID} = body;
    if(!courseID){
        return NextResponse.json({'massage':"you must provide a courseID"},{status:404})
    }

    // check if is course id is currect
    const isCourseValid = await CourseModel.findOne({_id:courseID})
    if(!isCourseValid){
        return NextResponse.json({'massage':"you must provide a courseID"},{status:404})
    }
    

    // find if user logged or not 
    const AuthUser = await authUser()
    if(!AuthUser){
        return NextResponse.json({'massage':"you must loggin first"},{status:400})
    }

    // check if user already added this course to favorites
    const isCourseAlreadyAddedToFavorites = await FavoritesModel.findOne({userID:AuthUser.id,courseID:courseID})
    if (isCourseAlreadyAddedToFavorites){
        return NextResponse.json({'massage':"you already added this course to favorites"},{status:400})
    }




    //createing a new favorite
    const ResponseData = await FavoritesModel.create({
        userID:AuthUser.id,
        courseID:courseID
    })

    return Response.json({'massage':"successfully added to favorites!!! 😀😁"})
}