"use client";

import { handleForm } from "@/actions/handle-form";
import { ActionResponse } from "@/types/name-form";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="border border-gray-400 focus:border-gray-900 focus:outline-gray-900 rounded-md px-3 py-1"
    >
      {pending ? "Wait" : "Submit"}
    </button>
  );
};
const initialState: ActionResponse = {
  success: false,
  message: "",
};
export default function UseActionForm() {
  const [state, action] = useActionState(handleForm, initialState);
  return (
    <form
      className="flex flex-col gap-6 shadow-lg rounded-md p-4"
      action={action}
    >
      <div className="space-y-1 flex flex-col">
        <label htmlFor="name">Your name</label>
        <input
          placeholder="name"
          required
          aria-required
          name="name"
          id="name"
          className="border border-gray-400 focus:border-gray-900 focus:outline-gray-900 rounded-md px-3 py-1"
        />
        {state.errors?.name && (
          <p className="text-red-600 text-xs">{state.errors.name[0]}</p>
        )}
        <SubmitButton />
      </div>
      {state.message && (
        <div>
          {state.success ? (
            <div className="border border-green-700 text-green-700 rounded-md px-3 py-1">
              {state.message}
            </div>
          ) : (
            <div className="border border-red-600 text-red-600 rounded-md px-3 py-1 text-xs">
              {state.message}
            </div>
          )}
        </div>
      )}
    </form>
  );
}
