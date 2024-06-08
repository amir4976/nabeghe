import { NextResponse, NextRequest } from "next/server";
import userModel from '@/models/Users'
import ConnectToDB from "@/utils/ConnectToDB";
import { VerifyPassword, generateToken } from "@/utils/auth";
export function GET() {
  return NextResponse.json({ message: "bad request !!" }, { status: 400 });
}
export function PUT() {
  return NextResponse.json({ message: "bad request !!" }, { status: 400 });
}
export function DELETE() {
  return NextResponse.json({ message: "bad request !!" }, { status: 400 });
}

export async function POST(req) {
  ConnectToDB();
  const { identifire,password } = await req.json();
  console.log(password)


  if (!identifire.trim()) {
    return NextResponse.json(
      { message: "identifire is required" },
      { status: 422 }
    );
  }


  const user = await userModel.findOne({
    $or: [{ phoneNumber: identifire }, { email: identifire }],
  });

  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }

  const isPasswordIsCorrect = await VerifyPassword(password, user.password);
  if (!isPasswordIsCorrect) {
    return NextResponse.json({ message: "password or identifire is not correct" }, { status: 404 });
  }




  const token = await generateToken(user.email);
  return NextResponse.json(
    { user },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token};path=/;httpOnly;sameSite=strict;secure;Max-Age=604800`,
      },
    }
  );
}
