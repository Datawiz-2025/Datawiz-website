"use client";
import { createFeedback, FormStateFeedBack } from "@/actions/feedback";
import { useActionState } from "react";

export default function Feedback() {
  const initialState: FormStateFeedBack = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createFeedback,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-col gap-4 p-4">
      <div className="w-full flex flex-col gap-2 justify-center items-start">
        <label htmlFor="message">Feedback</label>
        <textarea
          className="border border-white px-4 py-2 rounded-lg w-full"
          typeof="text"
          name="message"
          title="Feedback"
        />
      </div>

      {state?.errors?.message && (
        <p className="text-red-500">{state.errors.message}</p>
      )}

      <button
        className="bg-blue-500 disabled:bg-gray-700 px-4 py-2 w-full rounded-lg"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
