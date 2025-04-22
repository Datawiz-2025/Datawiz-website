"use server"

import { addEvent } from "@/utils/dbMethods/dbMethods";



export type Error = {
    name?: string,
    category?: string,
    description?: string,
    time?: string,
    startDate?: string,
    endDate?: string,
    guestName?: string,
    guestDeatils?: string,
    guestImages?: string,
    eventImage?: string
}

export type FormState = {
    errors: Error,
}

export async function createEvent(prevState: FormState, formData: FormData){
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const time = formData.get("time") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const venue = formData.get("venue") as string;
    const eventImage = formData.get("eventImage") as string
    const regqr = formData.get("regqrUrl") as string;
    const guestName = formData.get("guestName") as string;
    const guestDetails = formData.get("guestDetails") as string;
    const guestImageUrls = JSON.parse(formData.get("guestImages") as string) as string[];
    const collaborators = formData.get("collaboratorsName") as string;
    const collaboratorsDetails = formData.get("collaboratorsDetails") as string;
    const collaboratorsImages = JSON.parse(formData.get("collaboratorsImages") as string) as string[];
    const sponsors = formData.get("sponsorsName") as string;
    const sponsorsDetails = formData.get("sponsorsDetails") as string;
    const sponsorsImages = JSON.parse(formData.get("sponsorsImages") as string) as string[];

    const guestArr = guestName.split(",,");
    const guestDetailsArr = guestDetails.split(",,");
    const collaboratorsArr = collaborators.split(",,");
    const collaboratorsDetailsArr = collaboratorsDetails.split(",,");
    const sponsorsArr = sponsors.split(",,")
    const sponsorsDetailsArr = sponsorsDetails.split(",,");
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);

    const errors: Error = {}

    if(!name){
        errors.name = "Name required";
    }
    if(!category){
        errors.category = "category required";
    }
    if(!description){
        errors.description = "description required";
    }
    if(!startDate){
        errors.startDate = "start date required";
    }
    if(!endDate){
        errors.endDate = "end date required";
    }
    if(!eventImage){
        errors.eventImage = "event image required";
    }
    if(!guestName){
        errors.guestName = "guest name required";
    }
    if(!guestDetails){
        errors.guestDeatils = "guest details required";
    }
    if(!guestImageUrls){
        errors.guestImages = "guest images required";
    }
    if(!time){
        errors.time = "Time is required";
    }

    if(Object.keys(errors).length > 0){
        return {errors};
    }

    await addEvent(name, category, description, time, sDate, eDate, guestArr, guestDetailsArr, guestImageUrls, eventImage, regqr,collaboratorsArr, collaboratorsDetailsArr, collaboratorsImages, sponsorsArr, sponsorsDetailsArr, sponsorsImages, venue)
    
}