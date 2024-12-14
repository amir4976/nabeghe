import courseModel from "@/models/Courses";
import { VerifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";
import userModel from "@/models/Users";
import commentModel from "@/models/Comments";
import ConnectToDB from "@/utils/ConnectToDB";
import { writeFile } from "fs/promises";
import path from "path";
export async function GET() {
  try {
    ConnectToDB();
    const courses = await courseModel.find({}).populate("teacher");
    return NextResponse.json({ courses }, { status: 200 });
  
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function POST(req) {
  try {
    ConnectToDB();
    // get data client
    const formData = await req.formData();
    const title = formData.get("title");
    const ShortDec = formData.get("ShortDec");
    const LongDec = formData.get("LongDec");
    const category = formData.get("category");
    const courseName = formData.get("courseName");
    const price = formData.get("price");
    const img = formData.get("image");

    
    // buffering image
    const buffer = Buffer.from(await img.arrayBuffer());
    const imageName = Date.now() + img.name;
    const imagePath = path.join(process.cwd(), "public/upload", imageName);
    await writeFile(imagePath, buffer);

    // end buffering image
    
    if(title.trim() === "" || ShortDec.trim() === "" || category.trim() === "" || courseName.trim() === "" ){
        return NextResponse.json({message:"all fields are required"});
    }

    // verify token
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Please login first" },
        { status: 401 }
      );
    }
  
    // verify token payload
    const tokenpayload = VerifyToken(token);
    if (!tokenpayload) {
      return NextResponse.json(
        { message: "  Please login first" },
        { status: 401 }
      );
    }
  
    // check if course exist
    const isCourseExist = await courseModel.findOne({ title });
    if (isCourseExist) {
      return NextResponse.json(
        { message: "Course already exist" },
        { status: 400 }
      );
    }
  
    // check if user exist
    const FindUser = await userModel.findOne({ email: tokenpayload.email });
    if (!FindUser) {
      return NextResponse.json(
        { message: "Please login first" },
        { status: 401 }
      );
    }
  
    // create course
    const course = await courseModel.create({
      courseName,
      title,
      price,
      ShortDec,
      LongDec,
      category,
      score:1,
      image:`http://localhost:3000/upload/${imageName}`,
      priceWhithDiscount:price,
      teacher: FindUser._id,
    });
    

    return NextResponse.json(
      { message: "Course created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error::"+error }, { status: 400 });
  }
}
