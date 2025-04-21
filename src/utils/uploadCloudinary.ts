// utils/uploadToCloudinary.ts
import cloudinary from "@/lib/cloudinary";
function fileToBase64(file: File): Promise<string> | null {
    if(!file) return null;
    return file.arrayBuffer().then(buffer => Buffer.from(buffer).toString('base64'));
  }
  
  export async function uploadFileToCloudinary(file: File, folder: string): Promise<string> {
    const base64 = await fileToBase64(file);
    const response = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder,
      }
    );
    return response.secure_url;
  }
  
  export async function uploadMultipleToCloudinary(files: File[], folder: string): Promise<string[] | null> {
    if(!files) return null;
    return Promise.all(files.map(file => uploadFileToCloudinary(file, folder)));
  }
  