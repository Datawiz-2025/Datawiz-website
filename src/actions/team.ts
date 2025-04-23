"use server";
import { addPerson } from "@/utils/dbMethods/dbMethods";

export type Error = {
    name?: string;
    role?: string;
    designation?: string;
    description?: string;
    images?: string;
}

export type FormStateTeam = {
    errors: Error,
}

export async function createTeam(prevState: FormStateTeam, formData: FormData){
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const designation = formData.get("designation") as string;
    const description = formData.get("description") as string;
    const images = JSON.parse(formData.get("images") as string) as string[];

    const errors: Error = {};

    if(!name){
        errors.name = "Name is required";
    }

    if(!role){
        errors.role = "Role is required";
    }

    if(!designation){
        errors.designation = "Designation is required";
    }

    if(!description){
        errors.description = "Description is required";
    }

    if(!images){
        errors.images = "Image is required";
    }

    if(Object.keys(errors).length > 0){
        return {errors};
    }

    await addPerson(name, role, designation, description, images);
}