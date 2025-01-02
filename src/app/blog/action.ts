"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { Server_URL } from "~/lib/Constans";

export async function addBlog(pre: any, form: FormData) {
  const blogFeild = z.object({
    authorId: z.number(),
    title: z.string(),
    content: z.string(),
  });
  const img = form.get("img");
  const validateForm = blogFeild.safeParse({
    authorId: +form.get("id")!,
    title: form.get("title"),
    content: form.get("content"),
  });
  if (validateForm.error) {
    return {
      errors: validateForm.error.flatten().fieldErrors,
    };
  } else {
    if (img != null) {
      const newForm = new FormData();
      newForm.append("authorId", validateForm.data.authorId.toString());
      newForm.append("title", validateForm.data.title);
      newForm.append("content", validateForm.data.content);
      newForm.append("img", img);
      const endpoint = `${Server_URL}/blog`;
      await fetch(endpoint, {
        method: "POST",
        body: newForm,
      });
      revalidatePath("/blog");
      //   const body = await result.json();
    } else console.log("Mất hình");
  }
}
