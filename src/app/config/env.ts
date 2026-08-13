import dotenv from "dotenv"
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const env = {
port: process.env.PORT || 5000,
database_url: process.env.DATABASE_URL,
jwt_secret: process.env.JWT_SECRET as string,
redis_url: process.env.redis_url,

r2_bucket_name: process.env.R2_BUCKET_NAME as string,
r2_access_key_id: process.env.R2_ACCESS_KEY_ID as string,
r2_secret_access_key:process.env.R2_SECRET_ACCESS_KEY as string,
r2_account_id:process.env.R2_ACCOUNT_ID as string,
r2_endpoint:process.env.R2_ENDPOINT as string,
r2_api_token:process.env.R2_API_TOKEN as string,
r2_public_rul:process.env.R2_PUBLIC_URL as string,

}

export default env;