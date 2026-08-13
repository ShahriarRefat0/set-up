import dotenv from "dotenv"
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const env = {
port: process.env.PORT || 5000,
database_url: process.env.DATABASE_URL,
jwt_secret: process.env.JWT_SECRET as string,
redis_url: process.env.redis_url


}

export default env;