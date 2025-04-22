"use server";
import { addImages } from "@/utils/dbMethods/dbMethods";

export type Error = {
    name?: string,
    description?: string,
    images?: string,
}

export type FormStateImage = {
    errors: Error,
}

export async function createImages(prevState: FormStateImage, formData: FormData){
    const eventName = formData.get("eventName") as string;
    const description = formData.get("description") as string;
    const images = JSON.parse(formData.get("images") as string) as string[];

    const errors: Error = {};

    if(!eventName){
        errors.name = "Event name is required";
    }
    if(!description){
        errors.description = "Description is required";
    }
    if(!images){
        errors.images = "Images are required";
    }

    if(Object.keys(errors).length > 0){
        return {errors};
    }

    await addImages(eventName, description, images);
}
