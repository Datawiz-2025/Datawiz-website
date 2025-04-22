"use client";
import { createImages, FormStateImage } from "@/actions/gallery";
import { handleMultipleFileChange } from "@/utils/imageFileHanders"
import { useActionState, useState } from "react"
export default function AddImage(){
    const [images, setImages] = useState<string[]>([]);
    const initialState: FormStateImage = {
            errors: {}
    }
    const [state, formAction, isPending] = useActionState(createImages, initialState);
    return (
        <div className="flex flex-col p-4 justify-center items-center gap-4">
            <h1 className="font-semibold text-center">Add Images To Gallery</h1>
            <form action={formAction} className="flex flex-col gap-3 w-full justify-center items-start">
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label id="eventName" htmlFor="eventName">Event Name: </label>
                    <input  className="border border-white px-4 py-2 rounded-lg w-full" type="text" id="eventName" name="eventName" />
                    {
                        state?.errors.name && <p className="text-red-500">{state.errors.name}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label id="description" htmlFor="description">Description: </label>
                    <textarea className="border border-white px-4 py-2 rounded-lg w-full" id="description" name="description" />
                    {
                        state?.errors.description && <p className="text-red-500">{state.errors.description}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">   
                    <label htmlFor="images" id="image">Add Images:</label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" onChange={(e) => handleMultipleFileChange(e, setImages)} multiple id="images"/>
                    <input type="hidden" value={JSON.stringify(images)} name="images" />
                    {
                        state?.errors.images && <p className="text-red-500">{state.errors.images}</p>
                    }
                </div>
                <button className="bg-blue-500 disabled:bg-gray-700 px-4 py-2 w-full rounded-lg" disabled={isPending}>Submit</button>
            </form>
        </div>
    )
}