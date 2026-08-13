import sharp from "sharp";
import { r2Client } from "../config/r2.config.js";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import env from "../config/env.js";

export type ImageFolder = "profiles" | "test";

export interface UploadOptions {
    folder: ImageFolder
}

export interface UploadResult {
    key: string;
    url: string;
}


const processAndUpload = async(
    buffer: Buffer,
    options: UploadOptions
) : Promise<UploadResult> =>{

const processed = await sharp(buffer)
  .rotate()
  .resize({width: 1200})
  .webp( { quality: 80 } )
  .toBuffer();


  const fileName = `${crypto.randomUUID()}.webp`;
  
  const key = `${options.folder}/${fileName}`;

  await r2Client.send(
	new PutObjectCommand({
		Bucket: env.r2_bucket_name,
		Key: key,
        ContentType: 'image/webp' ,
		Body: processed,
	}),
);

return {
    key,
    url: `${env.r2_public_rul}/${key}`
}
}

export const uploadImage =(
    buffer: Buffer,
    options: UploadOptions,
): Promise<UploadResult> =>{
    return processAndUpload(buffer, options)
}


export const deleteImage = async(key: string  | null | undefined)=>{
    if(!key) return

await r2Client.send(
	new DeleteObjectCommand({
		Bucket: env.r2_bucket_name,
		Key: key,
	}),
);

}