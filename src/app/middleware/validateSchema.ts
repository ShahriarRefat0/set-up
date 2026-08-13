import type { NextFunction, Request, Response } from "express";
import z, { success } from "zod"

const validateRequest = (schema: z.ZodType)=>{
return (req:Request, res:Response, next:NextFunction)=>{
try {
   const result = schema.safeParse(req.body);

if (!result.success) {
   return res.status(400).json({
    success: false,
    message: "validation error"
   }) 
}
req.body = result.data;
next()
 
} catch (error) {
    res.status(500).json({
        success: false,
        message: "internal server error",
    })
}
}
}


export default validateRequest;