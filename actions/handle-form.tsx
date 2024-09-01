export async function handleForm(
  prevState: { message: string },
  formData: FormData
) {
  "use server";

  const rawFormData = {
    todo: formData.get("todo"),
  };

  try {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return rawFormData;
      }, 10000);
    });
    return await promise;
  } catch (err) {
    return err;
  }
}
