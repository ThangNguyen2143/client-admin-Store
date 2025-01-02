"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Server_URL } from "~/lib/Constans";
import { updateProduct as update } from "~/lib/products";
import { productForm } from "./validateForm";

export async function updateProduct(preState: any, form: FormData) {
  const validatedFields = productForm.safeParse({
    name: form.get("name"),
    ingredient: form.get("ingredient"),
    howPack: form.get("howPack"),
    typeUse: form.get("typeUse"),
    stored: +form.get("stored")!,
    unit: form.get("unit"),
    price: +form.get("price")!,
    dosage: form.get("dosage"),
    destination: form.get("destination"),
    typeProductId: +form.get("typeProductId")!,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const productId = form.get("id");
  if (productId) {
    if (form.get("img") && form.get("img")?.size > 0) {
      const newForm = new FormData();
      newForm.append("img", form.get("img")!);
      const result = await fetch(`${Server_URL}/product/up-img/${productId}`, {
        method: "POST",
        body: newForm,
      });

      console.log(await result.json());
      revalidatePath(`/manager/products`);
    } else {
      await update(+productId, validatedFields.data);
      // return { message: "Cập nhật thành công" };
    }
    redirect("/manager/products");
  }

  return {
    message: "Không nhận được id sản phẩm",
  };
}
