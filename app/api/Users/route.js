import ConnectToDB from "@/utils/ConnectToDB";
import UserModel from '@/models/Users'
import { authUser } from "@/utils/authUser";
export async function GET (req) {
    ConnectToDB();
    const user = await authUser ()
    if(!user){
        return Response.json({s:'not auth'})
    }
    if(!user.role==='ADMIN'){
        return Response.json({s:'not auth'})
    }
    const users = await UserModel.find({}).lean();
    return Response.json(users)
}
