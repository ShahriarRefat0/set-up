
import type { Server } from "http";
import env from "./app/config/env.js";
import app from "./app.js";



let server: Server;

const bootsrap = async ()=>{
try {
        server = app.listen(env.port, ()=>{
    console.log(`server is running on ${env.port}`) //listen korby
})

} catch (error) {
console.log("Error from server", error)    
}
}


(
async ()=>{
    await bootsrap();
})();

// shutdown signal --> stop accepting connection --> Finish existing resoures --> Exit process

// Gracefull shutdown

//unhandle Refection
process.on("unhandledRejection", (err)=>{
    console.log("unhandleRejection", err);
    if (server) {
        server.close(()=>{
            process.exit(1)
        })
    }
    
})

//uncaughtException
process.on("uncaughtException", (err)=>{
    if (server) {
        server.close(()=>{
            process.exit(1)
        })
    }
})

//sigterm
process.on("SIGTERM", (err)=>{
if (server) {
    server.close(()=>{
        process.exit(0)
    })
}
})

//sigint
process.on("SIGINT", (err)=>{
    if (server) {
        server.close(()=>{
            process.exit(0)
        })
    }
})