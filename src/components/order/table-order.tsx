"use client";
import { Order } from "~/lib/types";
import TableItem from "./order-item";
import { useEffect, useState } from "react";

function TableOrder({ orderList }: { orderList: Order[] }) {
  const totalPage = parseInt((orderList.length / 10).toString());
  const [currentPage, setCurentPage] = useState(1);
  const [currentList, setCurrentList] = useState(orderList.slice(0, 10));
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
      orderList.slice(0 + (currentPage - 1) * 10, 10 + (currentPage - 1) * 10),
    );
  }, [currentPage]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Người nhận</th>
            <th>Số điện thoại nhận</th>
            <th>Địa chỉ</th>
            <th>Tổng đơn</th>
            <th>Trạng thái</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Stt</th>
            <th>Người nhận</th>
            <th>Số điện thoại nhận</th>
            <th>Địa chỉ</th>
            <th>Tổng đơn</th>
            <th>Trạng thái</th>
            <th>Chi tiết</th>
          </tr>
        </tfoot>
        <tbody>
          {currentList.map((order) => {
            return <TableItem order={order} key={order.id} />;
          })}
        </tbody>
      </table>
      <div className="flex w-full justify-center">
        <div className="join">{pagintion.map((item) => item)}</div>
      </div>
    </div>
  );
}

export default TableOrder;
