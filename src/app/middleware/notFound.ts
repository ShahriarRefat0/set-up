import type { NextFunction, Request, Response } from "express";


const notFound = (req: Request, res: Response)=>{
    res.status(404).json({
        success: false,
        message: "Api Not Found",
        path: req.originalUrl,
    })

}

export default notFound;