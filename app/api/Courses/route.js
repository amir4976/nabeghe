import courseModel from "@/models/Courses";
import { VerifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";
import userModel from "@/models/users";
import commentModel from "@/models/Comments";
import ConnectToDB from "@/utils/ConnectToDB";
export async function GET() {
  const courses = await courseModel.find({});
  return NextResponse.json({ courses }, { status: 200 });
}

export async function POST(req) {
  try {
    ConnectToDB();
    // get data client
    const { title, price, ShortDec, LongDec, caregory, score, image } = await req.json();
  
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
        { message: "Please login first" },
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
      title,
      price,
      ShortDec,
      LongDec,
      caregory,
      score,
      image,
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
