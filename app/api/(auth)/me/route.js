import ConnectToDB from "@/utils/ConnectToDB";
import { NextResponse } from "next/server";
import { VerifyToken } from "@/utils/auth";
import userModel from "@/models/Users"
export async function POST(req) {
    ConnectToDB();
    const token = req.cookies.get("token")?.value;
    if(!token){
        return NextResponse.json({ message: "user not found!!!" }, { status: 400 });
    }
    
    const isTokenVerify = await VerifyToken(token);
    if(!isTokenVerify){
        return NextResponse.json({ message: "user not found!!!" }, { status: 400 });
    }
    const user  = await userModel.findOne({
        email: isTokenVerify.email,
    }, "firstname name username phoneNumber email role")
    
    
    if(!user){
        return NextResponse.json({ message: "user not found!!!" }, { status: 400 });
    }

    return NextResponse.json({ user }, { status: 200 });
}