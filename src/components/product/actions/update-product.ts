"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { postItem, Server_URL } from "~/lib/Constans";
import { getProducts, updateProduct as update } from "~/lib/products";

const schema = z
  .object({
    name: z
      .string({
        required_error: "Yêu cầu nhập tên",
      })
      .min(2, {
        message: " Tên Không được trống",
      }),
    ingredient: z
      .string({
        required_error: "Yêu cầu nhập trường thành phần",
      })
      .min(2, {
        message: "Thành phần Không được trống",
      }),
    howPack: z
      .string({
        required_error: "Yêu cầu nhập trường đóng gói",
      })
      .min(2, {
        message: "Quy cách Không được trống",
      }),
    typeUse: z
      .string({
        required_error: "Yêu cầu nhập trường cách sử dụng",
      })
      .min(2, {
        message: "Cách dùng Không được trống",
      }),
    stored: z
      .number({
        required_error: "Yêu cầu nhập trường lưu trữ",
      })
      .positive({ message: "Nhập lớn hơn 0" }),
    unit: z
      .string({
        required_error: "Yêu cầu nhập trường đơn vị tính",
      })
      .min(2, {
        message: "Đơn vị tính Không được trống",
      }),
    price: z
      .number({
        required_error: "Yêu cầu nhập trường giá niêm yết",
      })
      .positive({ message: "Nhập lớn hơn 0" }),
    dosage: z
      .string({
        required_error: "Yêu cầu nhập trường liều lượng",
      })
      .min(2, {
        message: "Liều lượng Không được trống",
      }),
    destination: z
      .string({
        required_error: "Yêu cầu nhập trường công dụng",
      })
      .min(2, {
        message: "Chỉ định Không được trống",
      }),
    typeProductId: z
      .number({
        required_error: "Yêu cầu chọn loại sản phẩm",
      })
      .positive(),
  })
  .required();
export async function updateProduct(preState: any, form: FormData) {
  const validatedFields = schema.safeParse({
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
  if (productId)
    if (form.get("img")) {
      const newForm = new FormData();
      newForm.append("img", form.get("img")!);
      const result = await fetch(`${Server_URL}/product/${productId}`, {
        method: "POST",
        body: newForm,
      });
      revalidatePath(`/manager/products`);
      redirect("/manager/products");
    } else {
      await update(+productId, validatedFields.data);
      return { message: "Cập nhật thành công" };
    }

  return {
    message: "Không nhận được id sản phẩm",
  };
}
