"use client";

import { createTeam, FormStateTeam } from "@/actions/team";
import { handleMultipleFileChange } from "@/utils/imageFileHanders";
import { useActionState, useState } from "react";

export default function Team(){
    const [images, setImages] = useState<string[]>([]);
    const initialState: FormStateTeam = {
        errors: {}
    }
    const [state, formAction, isPending] = useActionState(createTeam, initialState);
    return (
        <div className="flex flex-col p-4 justify-center items-center gap-4">
            <h1 className="font-semibold text-center">Add Team Member</h1>
            <form action={formAction} className="flex flex-col gap-3 w-full justify-center items-start">
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label id="name" htmlFor="name">Name: </label>
                    <input  className="border border-white px-4 py-2 rounded-lg w-full" type="text" id="name" name="name" title="Enter your name" />
                    {
                        state?.errors.name && <p className="text-red-500">{state.errors.name}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label id="role" htmlFor="role">Role: </label>
                    <input type="text" className="border border-white px-4 py-2 rounded-lg w-full" id="role" name="role" />
                    {
                        state?.errors.role && <p className="text-red-500">{state.errors.role}</p>
                    }
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <label id="designation" htmlFor="designation">Designation: </label>
                    <input type="text" className="border border-white px-4 py-2 rounded-lg w-full" id="designation" name="designation" />
                    {
                        state?.errors.designation && <p className="text-red-500">{state.errors.designation}</p>
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
                    <label htmlFor="images" id="image">Image: </label>
                    <input className="border border-white px-4 py-2 rounded-lg w-full" type="file" onChange={(e) => handleMultipleFileChange(e, setImages)} multiple id="images"/>
                    <input type="hidden" value={JSON.stringify(images)} name="images" />
                    {
                        images.length == 0 && state?.errors.images && <p className="text-red-500">{state.errors.images}</p>
                    }
                </div>
                <button className="bg-blue-500 disabled:bg-gray-700 px-4 py-2 w-full rounded-lg" disabled={isPending}>Submit</button>
            </form>
        </div>
    )
}