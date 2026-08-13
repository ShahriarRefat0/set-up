import type { NextFunction, Request, Response } from "express";
import type { ErrorResponse } from "../types/index.js";



 
export const gloalError =(err:any, req:Request, res:Response, next:NextFunction)=>{

    const statusCode = err.status || 500;

    const message = err.message || "internal server error"

const errorResponse: ErrorResponse ={
status: statusCode,
message: message,
}

if (process.env.NODE_ENV === "development") {
    errorResponse.stack = err.stack;
    errorResponse.error = err.error;
}
res.status(statusCode).json(errorResponse);

} 