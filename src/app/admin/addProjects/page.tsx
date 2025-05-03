"use client";
import { createProject, FormStateProject } from "@/actions/project";
import { handleFileChange } from "@/utils/imageFileHanders";
import { useActionState, useState } from "react";

export default function AddProject() {
  const initialState: FormStateProject = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState
  );
  const [image, setImage] = useState("");

  return (
    <div className="flex flex-col p-4 justify-center items-center gap-4">
      <h1 className="font-semibold text-center">Add Projects</h1>
      <form
        action={formAction}
        className="flex flex-col gap-3 w-full justify-center items-start"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-start">
          <label htmlFor="name">Project name: </label>
          <input
            className="border border-white px-4 py-2 rounded-lg w-full"
            name="name"
            id="name"
            type="text"
            title="project name"
          />
          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-start">
          <label htmlFor="description">Description</label>
          <textarea
            className="border border-white px-4 py-2 rounded-lg w-full"
            typeof="text"
            name="description"
            title="description of the project"
          />
          {state?.errors?.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-start">
          <label htmlFor="techStack">Tech Stack</label>
          <input
            className="border border-white px-4 py-2 rounded-lg w-full"
            id="techStack"
            name="techStack"
            title="Tech stacks used"
            type="text"
          />
          {state?.errors?.techStack && (
            <p className="text-red-500">{state.errors.techStack}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-start">
          <label htmlFor="link">Live Link of the project:</label>
          <input
            className="border border-white px-4 py-2 rounded-lg w-full"
            type="text"
            id="link"
            title="live link of the project"
            name="link"
          />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-start">
          <label htmlFor="image">Image: </label>
          <input
            className="border border-white px-4 py-2 rounded-lg w-full"
            type="file"
            id="image"
            title="Cover Image of the project"
            onChange={(e) => handleFileChange(e, setImage)}
          />
          <input type="hidden" value={JSON.stringify(image)} name="image" />
          {image == "" && state?.errors?.image && state?.errors?.image && (
            <p className="text-red-500">{state.errors.image}</p>
          )}
        </div>
        <button
          className="bg-blue-500 disabled:bg-gray-700 px-4 py-2 w-full rounded-lg"
          disabled={isPending}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
