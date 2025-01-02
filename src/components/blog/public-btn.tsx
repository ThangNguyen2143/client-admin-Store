"use client";
import { useEffect, useState } from "react";
import { publicBlog } from "./actions";

function PublicBtn({ blogId, state }: { blogId: number; state: string }) {
  const [show, setShow] = useState(false);
  const [ableToPb, setAblePb] = useState(state != "Chưa duyệt");
  async function handlerClick() {
    setShow(false);
    await publicBlog(blogId);
    setAblePb(true);
    setShow(true);
  }
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={handlerClick}
        disabled={ableToPb}
      >
        Công khai
      </button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <input
        type="checkbox"
        id={blogId + "modal"}
        className="modal-toggle"
        checked={show}
        readOnly
      />
      <div className="modal bg-green-400" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Cập nhật thành công</h3>
          <p className="py-4">
            Đã cập nhật bài viết: {blogId} thành công khai!
          </p>
          <div className="modal-action">
            <label
              htmlFor={blogId + "modal"}
              className="btn"
              onClick={() => setShow(false)}
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicBtn;
