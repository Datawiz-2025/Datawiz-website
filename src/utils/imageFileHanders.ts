import { ChangeEvent, Dispatch, SetStateAction } from "react";

export async function handleFileChange(e: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string>>) {

        const file = e.target.files![0];
        if(!file) return;

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
        data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: data
        })

        const uploadedImageUrl = await res.json();
        setImage(uploadedImageUrl.url);
        if(uploadedImageUrl) alert("Image uloaded");
    }


    export async function handleMultipleFileChange(
        e: ChangeEvent<HTMLInputElement>,
        setImages: Dispatch<SetStateAction<string[]>>
      ) {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;
      
        const uploadedUrls: string[] = [];
      
        for (const file of files) {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
          data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);
      
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: data,
            }
          );
      
          const result = await res.json();
          uploadedUrls.push(result.url);
        }
        setImages(uploadedUrls);
        alert("Images uploaded")
      }