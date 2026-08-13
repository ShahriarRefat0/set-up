import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import env from "../config/env.js";

export const auth = (roles: string[])=>{
return (req:Request, res:Response, next:NextFunction)=>{
try {
    const token = req.headers.authorization;

if (!token) {
    throw new Error("No token provided")
}
const verifiedUser = jwt.verify(
    token,
    env.jwt_secret
 ) 

 if (typeof verifiedUser === "string") {
    throw new Error("Invalid token")
 }

 req.user = verifiedUser;
 if (roles.length && !roles.includes(verifiedUser.role)) {
     throw new Error("Forbidden")
    }
    next()
} catch (error) {
    next(error)
}
}

}