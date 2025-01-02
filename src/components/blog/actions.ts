"use server";
import { revalidatePath } from "next/cache";
import { updateBlog } from "~/lib/blog";
import { Server_URL } from "~/lib/Constans";

export async function publicBlog(blogId: number) {
  const result = await updateBlog(blogId, "public");
  if (result.message) {
    revalidatePath("/manager/blogs");
    return result.message;
  } else return "Lỗi server";
}
export async function updateImg(blogId: number) {}
export async function deleteBlog(blogId: number) {
  const result = await fetch(`${Server_URL}/blog/${blogId}`, {
    method: "Delete",
  });
  if (result.status == 200) {
    revalidatePath("/manager/blogs");
    return "Xoá bài viết thành công";
  } else return "Không xoá được";
}
