"use client";
import { Blog } from "~/lib/types";
import moment, { now } from "moment";
import PublicBtn from "./public-btn";
import ImageCloud from "../product/ImageCloud";
import { FaPlus } from "react-icons/fa";
import DeleteBlogBtn from "./delete-btn";
// import { updateOrder } from "~/lib/orders";

function ItemBlog({ blog }: { blog: Blog }) {
  const updateImgBlog = (element: HTMLInputElement) => {
    const blogId = element.name.slice(4);
    const value = element.value;
    console.log({ blogId, value, typeV: typeof value });
  };
  return (
    <tr>
      <th>{blog.id}</th>
      <td>{blog.title}</td>
      <th className="max-w-6">
        {blog.img.length >= 1 ? (
          <ImageCloud
            url={blog.img[0].url}
            altText={blog.img[0].altText}
            width={blog.img[0].width}
            height={blog.img[0].height}
          />
        ) : (
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  <FaPlus />
                </span>
              </div>
              <input
                type="file"
                className="hidden"
                name={"img-" + blog.id}
                onChange={(e) => updateImgBlog(e.target)}
              />
            </label>
          </div>
        )}
      </th>
      <td>{blog.author.name}</td>
      <td>{blog.state}</td>
      <td>{moment(now()).format("DD/MM/YYYY")}</td>
      <td>
        <div className="flex gap-1">
          <DeleteBlogBtn blogId={blog.id} />
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost mx-1">
              Cập nhật
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                
              </li>
              <li>
                <a>Ẩn bài viết</a>
              </li>
            </ul>
          </div> */}
          <PublicBtn blogId={blog.id} state={blog.state} />
        </div>
      </td>
    </tr>
  );
}
export default ItemBlog;
