import { S3Client } from "@aws-sdk/client-s3";
import env from "./env.js";

export const r2Client = new S3Client({
	region: "auto", // Required by AWS SDK, not used by R2
	// Provide your R2 endpoint: https://<ACCOUNT_ID>.r2.cloudflarestorage.com
	endpoint: env.r2_endpoint,
	credentials: {
		// Provide your R2 Access Key ID and Secret Access Key
		accessKeyId: env.r2_access_key_id,
		secretAccessKey: env.r2_secret_access_key,
	},
});