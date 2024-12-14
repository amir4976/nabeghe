import ConnectToDB from "@/utils/ConnectToDB"
import UserModel from '@/models/Users'

export async function POST(req){
    try {
    ConnectToDB()
    const {id} = await req.json()
    console.log(id)
    const userfind = await UserModel.findOne({_id:id})
    if(!userfind){
        return Response.json({massage:'user not found'},{status:404})
    }
    if(userfind.role == 'ADMIN'){
        await UserModel.findOneAndUpdate({_id:id},{role:'USER'})
    }else{
        await UserModel.findOneAndUpdate({_id:id},{role:'ADMIN'})
    }


    return Response.json({message:'success'},{status:201})
    
    } catch (error) {
        return Response.json({massage:error} ,{status:500})    
    }
}   