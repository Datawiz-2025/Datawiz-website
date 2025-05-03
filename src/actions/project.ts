"use server";
import { addProject } from "@/utils/dbMethods/dbMethods";

export type Error = {
  name?: string;
  description?: string;
  techStack?: string;
  image?: string;
};

export type FormStateProject = {
  errors: Error;
};

export async function createProject(
  prevState: FormStateProject,
  formData: FormData
) {
  const projectName = formData.get("name") as string;
  const description = formData.get("description") as string;
  const techStack = (formData.get("techStack") as string).split(",,");
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;

  const errors: Error = {};

  if (!projectName) {
    errors.name = "Project name is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (!image) {
    errors.image = "Image is required";
  }

  if (!techStack) {
    errors.techStack = "Please put tech-stacks used for the project";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProject(projectName, description, techStack, image, link);
}
