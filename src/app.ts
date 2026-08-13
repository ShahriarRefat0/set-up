import { log } from "console";
import notFound from "./app/middleware/notFound.js";
import { gloalError } from "./app/middleware/globalError.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import express, { type Application, type Request, type Response } from "express"; //express import
import env from "./app/config/env.js";
import routes from "./app/routes/routes.js";


const app:Application = express(); //একটি Express application তৈরি করে।

// const PORT = 3000; //port assaing

 app.use(cors());
 app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//base url
app.use("/api/v1", routes)

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: `Server is running on port ${env.port}`,
  });
});






//notefount midlewarrre
app.use(notFound)
//glovalerror
app.use(gloalError)

export default app