import { Router } from "express";
import { UserRoute } from "../module/user/user.route.js";



const routes: Router = Router();

const moduleRoutes =[
    {
        path:"/user",
        route:UserRoute,
    },
    {
        path:"/auth",
        route:AurthRoute,
    },
]


moduleRoutes.forEach((route)=>
routes.use(route.path, route.route)
)

export default routes;