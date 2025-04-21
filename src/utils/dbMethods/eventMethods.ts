import Event from "@/models/events";

export async function addEvent(name: string, category: string, description: string, time: string, startDate: Date, endDate: Date, guestName: string[], guestDeatils: string[], guestImages: string[], eventImage: string, regqr:string, collaborators?: string[], collaboratorsDetails?: string[], collaboratorsImages?: string[], sponsors?: string[], sponsorsDetails?: string[], sponsorsImages?: string[], venue?: string,){
    return await Event.create({name, category, description, time, startDate, endDate, guestName, guestDeatils, guestImages, eventImage, regqr, collaborators, collaboratorsDetails, collaboratorsImages, sponsors, sponsorsDetails, sponsorsImages, venue});
}