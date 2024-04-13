import { NextResponse, NextRequest } from "next/server";
import userModel from '@/models/users'
import ConnectToDB from "@/utils/ConnectToDB";
import { generateToken } from "@/utils/auth";
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
  const { identifire } = await req.json();
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

  const token = await generateToken(user.email);
  return NextResponse.json(
    { message: "user logedin" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=7d`,
      },
    }
  );
}
