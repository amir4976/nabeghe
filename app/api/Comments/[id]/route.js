import { authUser } from "@/utils/authUser";
import ConnectToDB from "@/utils/ConnectToDB";
import commentModel from "@/models/Comments";
import UserModel from '@/models/Users'
export async function GET (req,{params}) {

    ConnectToDB();
    const {id} = params;
    const findUser = await UserModel.findById(id)
    console.log(findUser)
    const comments = await commentModel.find({user:findUser._id}).populate('courseId').lean().sort({createdAt:-1});
    return Response.json(comments)
}

export async function DELETE (req,{params}) {
    ConnectToDB();
    const user =await authUser ()
    if(!user){
        return Response.json({s:'not auth'})
    }
    if(!user.role==='ADMIN'){
        return Response.json({s:'not auth'})
    }

    const {id} = params;
    const comment = await commentModel.findByIdAndDelete(id)
    return Response.json({massage:'CommentDeleted'},{status:201})
}


export async function PUT (req,{params}) {
    ConnectToDB();
    const user = authUser ()
    if(!user){
        return Response.json({s:'not auth'})
    }
    if(!user.role==='ADMIN'){
        return Response.json({s:'not auth'})
    }
    const {id} = params;
    const {comment} = await req.json()
    const commentUpdated = await commentModel.findByIdAndUpdate(id,{comment},{new:true})
    if(!commentUpdated){
        return Response.json({massage:'CommentNotFound'},{status:404})
    }
    return Response.json({massage:'CommentUpdated'},{status:201})
}