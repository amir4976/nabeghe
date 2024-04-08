import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { sign, verify } from "jsonwebtoken";

export function HashedPassword (password) {
    return bcrypt.hashSync(password, 10);
}

export function generateToken (email){
    return sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
}
