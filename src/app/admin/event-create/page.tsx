"use client"
import { ChangeEvent, Dispatch, SetStateAction, useActionState, useState } from "react"
import { FormState, createEvent } from "@/actions/event"

export default function AddEvent(){

    const [eventmage, setEventImage] = useState("");
    const [regqr, setregqr] = useState("");
    const [guestImages, setGuestImages] = useState<string[]>([]);
    const [collaboratorsImages, setCollaboratorsImages] = useState<string[]>([]);
    const [sponsorsImages, setSponsorsImages] = useState<string[]>([]);


    async function handleFileChange(e: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string>>) {

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


    async function handleMultipleFileChange(
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
      

    const initialState: FormState = {
        errors: {}
    }

    const [state, formAction, isPending] = useActionState(createEvent, initialState);
    return (
        <div className="flex flex-col p-4 justify-center items-center gap-4">
            <h1 className="font-semibold text-center">Create Event</h1>
            <form action={formAction} className="flex flex-col gap-3 w-full justify-center items-start">
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="name">Event Name: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="text" name="name" id="name"/>
                    {
                        state?.errors?.name && <p className="text-red-500">{state.errors.name}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="category">Category: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="text" name="category" id="category" />
                    {
                        state?.errors?.category && <p className="text-red-500">{state.errors.category}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="description">Description</label>
                    <textarea className="border border-white px-4 py-2 rounded-lg w-full"id="description" name="description" />
                    {
                        state?.errors?.description && <p className="text-red-500">{state.errors.description}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="startDate">Start date:</label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="date" id="startDate" name="startDate" />
                    {
                        state?.errors?.startDate && <p className="text-red-500">{state.errors.startDate}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="endDate">End date:</label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="date" id="endDate" name="endDate" />
                    {
                        state?.errors?.endDate && <p className="text-red-500">{state.errors.endDate}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="time">Time: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="string" id="time" name="time" />
                    {
                        state?.errors?.time && <p className="text-red-500">{state.errors.time}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="venue">Venue: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="text" id="venue" name="venue" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="eventImage">Event Image: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" onChange={(e) => handleFileChange(e, setEventImage)}/>
                    <input type="hidden" value={JSON.stringify(eventmage)} name="eventImage" />
                    {
                        state?.errors?.eventImage && <p className="text-red-500">{state.errors.eventImage}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="regqr">Registration QR: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" onChange={(e)=>handleFileChange(e, setregqr)} />
                    <input type="hidden" value={regqr} name="regqrUrl" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="guestName">Guest Name: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="text" name="guestName" />
                    {
                        state?.errors?.guestName && <p className="text-red-500">{state.errors.guestName}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="guestDetails">Guest Details: </label>
                    <textarea className="border border-white px-4 py-2 rounded-lg w-full" id="guestDetails" name="guestDetails" />
                    {
                        state?.errors?.guestDeatils && <p className="text-red-500">{state.errors.guestDeatils}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="guestImages">Guest Image: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" multiple id="guestImages" onChange={(e)=>handleMultipleFileChange(e, setGuestImages)}/>
                    <input type="hidden" value={JSON.stringify(guestImages)} name="guestImages" />

                    {
                        state?.errors?.guestImages && <p className="text-red-500">{state.errors.guestImages}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="collaboratorsName">Collaborators Name: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" id="collaboratorsName" type="text" name="collaboratorsName" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="collaboratorsDetails">Collaborators Details: </label>
                    <textarea className="border border-white px-4 py-2 rounded-lg w-full" id="collaboratorsDetails" name="collaboratorsDetails" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="collaboratorsImages">Collaborators Image: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file"  multiple id="collaboratorsImages" onChange={(e)=>handleMultipleFileChange(e, setCollaboratorsImages)}/>
                    <input type="hidden" value={JSON.stringify(collaboratorsImages)} name="collaboratorsImages" />

                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="sponsorsName">Sponsors Name: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" id="sponsorsName" type="text" name="sponsorsName" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="sponsorsDetails">Sponsors Details: </label>
                    <textarea className="border border-white px-4 py-2 rounded-lg w-full" id="sponsorsDetails" name="sponsorsDetails" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label htmlFor="sponsorsImages">Sponsors Images: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" multiple id="sponsorsImages" onChange={(e)=>handleMultipleFileChange(e, setSponsorsImages)} />
                    <input type="hidden" value={JSON.stringify(sponsorsImages)} name="sponsorsImages" />
                </div>
                <button className="bg-blue-500 disabled:bg-gray-700 px-4 py-2 w-full rounded-lg" disabled={isPending}>Submit</button>
            </form>
        </div>
    )
}