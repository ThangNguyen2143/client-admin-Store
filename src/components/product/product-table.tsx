"use client";
import { Product } from "~/lib/types";
import { useEffect, useState } from "react";
import TableItem from "./product-item-tb";
function ProductTable({ productList }: { productList: Product[] }) {
  const totalPage = parseInt((productList.length / 10).toString());
  const [currentPage, setCurentPage] = useState(1);
  const [currentList, setCurrentList] = useState(productList.slice(0, 10));
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
        onClick={(e) => setCurentPage(+e.currentTarget.value)}
      />,
    );
  }
  useEffect(() => {
    setCurrentList(
      productList.slice(
        0 + (currentPage - 1) * 10,
        10 + (currentPage - 1) * 10,
      ),
    );
  }, [currentPage]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên thuốc</th>
            <th>Giá (VND)</th>
            <th>Đơn vị tính</th>
            <th>Quy cách</th>
            <th>Tồn kho</th>
            <th>Loại</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((item, index) => {
            return <TableItem product={item} key={index} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>STT</th>
            <th>Tên thuốc</th>
            <th>Giá</th>
            <th>Đơn vị tính</th>
            <th>Quy cách</th>
            <th>Tồn kho</th>
            <th>Loại</th>
            <th>Chi tiết</th>
          </tr>
        </tfoot>
      </table>
      {totalPage >= 2 && (
        <div className="flex w-full justify-center">
          <div className="join">{pagintion.map((item) => item)}</div>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
