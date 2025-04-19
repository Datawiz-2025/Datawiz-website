import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AdminPage(){
    return (
        <div className="w-screen flex flex-col justify-center items-start h-screen gap-5">
            <nav className="flex justify-center items-center w-[80%]"> 
                <div className="w-[50%] flex items-center justify-between">
                    <h1>Admin&apos;s Page</h1>
                    <div className="px-4 py-2 rounded-lg border border-white">
                        <SignOutButton />
                    </div>
                </div>
            </nav>
            <div className="w-[50%] flex justify-center items-center">
                <ul className="flex flex-col gap-5 justify-center items-start">
                    <li><button className="px-4 py-2 rounded-lg border border-white"><Link href={"/admin/event-create"}>Create Event</Link></button></li>
                    <li><button className="px-4 py-2 rounded-lg border border-white"><Link href={"/admin/addImage"}>Add Images</Link></button></li>
                    <li><button className="px-4 py-2 rounded-lg border border-white"><Link href={"/admin/addProjects"}>Add Projects</Link></button></li>
                    <li><button className="px-4 py-2 rounded-lg border border-white"><Link href={"/admin/team"}>Team</Link></button></li>

                </ul>
            </div>
        </div>
    )
}