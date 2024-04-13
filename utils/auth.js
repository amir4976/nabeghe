import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { sign, verify } from "jsonwebtoken";

 function HashedPassword (password) {
    return bcrypt.hashSync(password, 10);
}

 function generateToken (email){
    return sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
}

 function VerifyToken (token){
    try{
        const validatResult = verify(token,process.env.JWT_SECRET_KEY)
        return validatResult;
    }catch(err){
        console.log('verify tokne error ::'+err);
        return false
    }
} 


export { HashedPassword, generateToken, VerifyToken };