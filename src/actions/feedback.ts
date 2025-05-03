"use server";
import { addFeedback } from "@/utils/dbMethods/dbMethods";

export type Error = {
  message?: string;
};

export type FormStateFeedBack = {
  errors: Error;
};

export async function createFeedback(
  prevState: FormStateFeedBack,
  formData: FormData
) {
  const message = (formData.get("message") as string).trim();

  const errors: Error = {};
  if (!message) {
    errors.message = "Feedback is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addFeedback(message);
}
