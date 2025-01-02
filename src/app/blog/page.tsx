"use client";
import { useFormState, useFormStatus } from "react-dom";
import { addBlog } from "./action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const initialState = {
  errors: {
    title: undefined,
    content: undefined,
  },
};
function Page() {
  const [state, formAction] = useFormState(addBlog, initialState);
  const { pending } = useFormStatus();
  const route = useRouter();
  useEffect(() => {
    if (!state) {
      alert("Đăng bài thành công");
      route.refresh();
    }
  }, [state]);
  return (
    <main>
      <h1 className="text-center text-4xl font-bold">Thêm bài viết mới</h1>
      <div className="container">
        <form action={formAction}>
          <input type="hidden" value={1} name="id" readOnly />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl">Tiêu đề bài viết</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="title"
              placeholder="Nhập tiêu đề bài viết"
            />
            <div className="label">
              {state?.errors?.title?.map((mess, index) => {
                return (
                  <span className="badge badge-info label-text-alt" key={index}>
                    {mess}
                  </span>
                );
              })}
            </div>
          </label>

          <label className="form-control col-span-3">
            <div className="label">
              <span className="label-text text-xl">Nội dung</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Nhập nội dung bài viết"
              name="content"
            ></textarea>
            <div className="label">
              {state?.errors?.content?.map((mess, index) => {
                return (
                  <span className="badge badge-info label-text-alt" key={index}>
                    {mess}
                  </span>
                );
              })}
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl">Thêm hình ảnh</span>
            </div>
            <input
              type="file"
              name="img"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <div className="label">
              {/* <span className="label-text-alt">Alt label</span> */}
            </div>
          </label>

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="btn btn-outline w-full"
              disabled={pending}
            >
              Đăng bài
            </button>
            {pending && (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Page;
