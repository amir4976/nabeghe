import commentModel from "@/models/Comments";
import ConnectToDB from "@/utils/ConnectToDB";
import { authUser } from "@/utils/authUser";
export async function POST(req){
    ConnectToDB()
    const authuser = await authUser()
    if(!authuser){
        return Response.json({massage:'not auth'})
    }
    if(!authuser.role==='ADMIN'){
        return Response.json({massage:'not auth'})
    }
    const {id} = await req.json()
    const commentFind = await commentModel.findById(id);

  
    const comment = await commentModel.findByIdAndUpdate(id,  {isAccepted:!commentFind.isAccepted }  ,{new:true})
    return Response.json({massage:'success'})
}