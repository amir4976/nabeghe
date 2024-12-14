import ConnectToDB from "./ConnectToDB";
import userModel from "@/models/Users"
import { VerifyToken } from "./auth";
import { cookies } from "next/headers";

export function authUser() {
  ConnectToDB();
  const AccessToken = cookies().get("token")?.value;

  let user = null;
  if (AccessToken) {
    const tokenPayload =  VerifyToken(AccessToken);
    
    if (tokenPayload) {
      user = userModel.findOne({ email: tokenPayload.email });
    }
  }
  return user;
}