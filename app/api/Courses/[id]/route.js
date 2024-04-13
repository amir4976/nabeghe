import { NextResponse } from 'next/server'
import courseModel from '@/models/Courses'
import ConnectToDB from '@/utils/ConnectToDB'

export async function GET(req,{params}){
    ConnectToDB()
    console.log(params)
    const course= await courseModel.find({_id:params.id})
    return NextResponse.json({course},{status:200})
}


export function POST(req,{params}){
    return NextResponse.json({message:'Not implemented yet'},{status:400})
}
export function PUT(req,{params}){
    return NextResponse.json({message:'Not implemented yet'},{status:400})
}