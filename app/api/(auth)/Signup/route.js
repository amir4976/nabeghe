import ConnectToDB from "@/utils/ConnectToDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import userModel from '@/models/Users'
import { HashedPassword } from "@/utils/auth";
import { generateToken } from "@/utils/auth";


export async function POST (req) {
    // connect to db
    ConnectToDB()

    // get and check data from client
    const {name,username,email,password,phoneNumber} = await req.json();
    console.log(name,username,email,password,phoneNumber)
    if(name.trim() === "" || !username || email.trim() === "" || password.trim() === "" || phoneNumber.trim() === "" ){
        return NextResponse.json({message:"all fields are required"});
    }

    // check if user is exist or not
    const isUserExist = await userModel.findOne({
        $or: [{ username }, { email },{phoneNumber}],
    });
    if(isUserExist){
        return NextResponse.json({ message: "This username or email exist already !!" },{ status: 422 });;
    }
    // hashing password
    const hashedPassword = await HashedPassword(password);

    // genrate Token
    const generatedToken = await generateToken(email)

    // find user for first admin algoritem
    const users = await userModel.find({});
    
    // create user
    const user = userModel.create({
        name,
        username,
        email,
        password:hashedPassword,
        phoneNumber,
        role:users.length > 0 ? "USER" : "ADMIN",
    })

    // send response to client and cookie
    return NextResponse.json({
        message: "user created successfully",
    },{
        status:201,
        headers:{
            "Set-Cookie":`token=${generatedToken}; HttpOnly; Path=/; Max-Age=7d`
        }
    })

}