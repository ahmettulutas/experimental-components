import { handleForm } from "@/actions/handle-form";
import { SubmitButton } from "@/components/buttons/submit-button";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export function AddForm() {
  return (
    <form action={handleForm}>
      <label htmlFor="todo">Enter Task</label>
      <input type="text" id="todo" name="todo" required />
      <SubmitButton />
      <output aria-live="polite" className="sr-only">
        {state?.message}
      </output>
    </form>
  );
}
