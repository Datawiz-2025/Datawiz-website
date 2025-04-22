import Event from "@/models/events";
import Gallery from "@/models/gallery";
export async function addEvent(name: string, category: string, description: string, time: string, startDate: Date, endDate: Date, guestName: string[], guestDeatils: string[], guestImages: string[], eventImage: string, regqr:string, collaborators?: string[], collaboratorsDetails?: string[], collaboratorsImages?: string[], sponsors?: string[], sponsorsDetails?: string[], sponsorsImages?: string[], venue?: string,){
    return await Event.create({name, category, description, time, startDate, endDate, guestName, guestDeatils, guestImages, eventImage, regqr, collaborators, collaboratorsDetails, collaboratorsImages, sponsors, sponsorsDetails, sponsorsImages, venue});
}

export async function addImages(eventName: string, description: string, images: string[]){
    return await Gallery.create({eventName, description, images});
}