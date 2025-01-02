"use client";
import { Blog } from "~/lib/types";
import ItemBlog from "./tableItem";
import { useEffect, useState } from "react";

function TableBlog({ blogs }: { blogs: Blog[] }) {
  const totalPage = parseInt(
    (blogs.length / 10 + (blogs.length % 10 > 0 ? 1 : 0)).toString(),
  );
  const [currentPage, setCurentPage] = useState(1);
  const [currentList, setCurrentList] = useState(blogs.slice(0, 10));
  const pagintion = [];
  for (let index = 1; index <= totalPage; index++) {
    pagintion.push(
      <input
        className="btn btn-square join-item"
        type="radio"
        name="options"
        aria-label={index.toString()}
        value={index}
        checked={currentPage === index}
        onChange={(e) => setCurentPage(+e.currentTarget.value)}
        key={index}
      />,
    );
  }
  useEffect(() => {
    setCurrentList(
      blogs.slice(0 + (currentPage - 1) * 10, 10 + (currentPage - 1) * 10),
    );
  }, [currentPage]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Người viết</th>
            <th>Trạng thái</th>
            <th>Ngày đăng</th>
            <th>Tuỳ chọn</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Stt</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Người viết</th>
            <th>Trạng thái</th>
            <th>Ngày đăng</th>
            <th>Tuỳ chọn</th>
          </tr>
        </tfoot>
        <tbody>
          {currentList.map((b) => {
            return <ItemBlog blog={b} key={b.id} />;
          })}
        </tbody>
      </table>

      {totalPage >= 2 && (
        <div className="flex w-full justify-center">
          <div className="join">{pagintion.map((item) => item)}</div>
        </div>
      )}
    </div>
  );
}

export default TableBlog;
