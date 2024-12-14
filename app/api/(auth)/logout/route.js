import { cookies } from "next/headers";
import { VerifyToken } from "@/utils/auth";


export async function GET () {
    console.log("logout");
    const cookie = cookies();
    const token = cookie.get("token");
    if(!token){
        return Response.json({ message: "user not found!!!" }, { status: 400 });
    }
    
    const isTokenVerify = await VerifyToken(token.value);
    if(!isTokenVerify){
        return NextResponse.json({ message: "user not found!!!" }, { status: 400 });
    } 
    return Response.json({ message: "user logout successfully" }, { 
        status: 200,
        headers: {
            "Set-Cookie": `token=; Max-Age=0; HttpOnly; Path=/; SameSite=Strict`,
        }
     });
}
