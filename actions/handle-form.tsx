"use server";
import { ActionResponse, NameFormData } from "@/types/name-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Please write your full name"),
});

export async function handleForm(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log({ prevState });
  try {
    const rawData: NameFormData = {
      name: formData.get("name") as string,
    };

    const validatedData = formSchema.safeParse(rawData);
    if (!validatedData.success) {
      return {
        success: false,
        message: "Please fix the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    console.log("Name submitted:", validatedData.data);

    return {
      success: true,
      message: "Your name successfully submitted.",
    };
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
