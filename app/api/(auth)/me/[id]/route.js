import ConnectToDB from "@/utils/ConnectToDB";
import UserModel from '@/models/Users'

export async function PUT (req , {params}) {
    ConnectToDB();
    const body = await req.json()
    const {name, username,email, phoneNumber} = body;
    
    const findIfUserISValid = await UserModel.findOneAndUpdate({_id:params.id},{name,username,email,phoneNumber})
    return Response.json('user Updated successfully😁')
}