import ConnectToDB from "@/utils/ConnectToDB";
import FavoritesModel from "@/models/Favorites";
import { NextResponse } from "next/server";
export async function GET(req,{params}) {
    // console.log(params)
    try {
        await ConnectToDB(); // Ensure the database connection is established
        const getAllFavorites = await FavoritesModel.find({userID : params.id}).populate('courseID'); // Populate courseID

        return NextResponse.json({ getAllFavorites }, { status: 200 });
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


export async function DELETE(req,{params}) {
    try {
        await ConnectToDB()
        const DeleteFromFavorites = await FavoritesModel.deleteOne({courseID:params.id})

        return NextResponse.json({ message:"deleted from favorite List success fully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ data:'error' }, { status: 400 });
        
    }
}