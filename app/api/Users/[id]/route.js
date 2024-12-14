import ConnectToDB from "@/utils/ConnectToDB";
import UserModel from '@/models/Users'
import { authUser } from "@/utils/authUser";

export async function DELETE (req,{params}) {
    try {
        ConnectToDB();
        console.log(params)
        const user =await authUser ()
        if(!user){
            return Response.json({s:'not auth'})
        }
        if(!user.role==='ADMIN'){
            return Response.json({s:'not auth'})
        }

        const {id} = params;
        console.log(id)
        const userDeleted = await UserModel.findByIdAndDelete(id)

        return Response.json({massage:'UserDeleted'},{status:201})
    } catch (error) {
        return Response.json({massage:'serverError'},{status:500})    
    }
}