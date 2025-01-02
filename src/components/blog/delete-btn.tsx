"use client";
import { useEffect, useState } from "react";
import { deleteBlog } from "./actions";
import Dialog from "../Dialog";
import { useRouter } from "next/navigation";

function DeleteBlogBtn({ blogId }: { blogId: number }) {
  const [show, setShow] = useState(false);
  const route = useRouter();
  const handlerClick = async () => {
    const re = await deleteBlog(blogId);
    if (re) alert(re);
    route.push("/manager/blogs");
  };
  return (
    <Dialog
      nameBtn="Xoá bài viết"
      title="Xác nhận xoá bài viết"
      typeBtn="error"
      id={blogId + "delete-modal"}
    >
      <p className="py-4">Có chắc chắn xoá bài viết: {blogId} không?</p>
      <div className="modal-action">
        <label
          className="btn btn-error"
          onClick={handlerClick}
          htmlFor={blogId + "delete-modal"}
        >
          Đồng ý
        </label>
        <label htmlFor={blogId + "delete-modal"} className="btn">
          Huỷ
        </label>
      </div>
    </Dialog>
  );
}

export default DeleteBlogBtn;
