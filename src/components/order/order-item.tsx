"use client";
import { Order } from "~/lib/types";
import Dialog from "../Dialog";
import UpdateStateOrderBtn from "./update-btn";
import { useEffect, useState } from "react";
import DeleteOrderBtn from "./delete-btn";
import ExportPdfBtn from "./exportPdf-btn";

// import { updateOrder } from "~/lib/orders";
function DetailOrder({ order }: { order: Order }) {
  const convertDay = new Date(order.createdAt);
  const [updateShow, setUpdateShow] = useState(true);
  const [deleteShow, setDeleteShow] = useState(true);
  const [exportShow, setExportShow] = useState(false);
  useEffect(() => {
    if (order.status == "Đang xử lý") setUpdateShow(true);
    else setUpdateShow(false);
    if (order.status == "Đã từ chối" || order.status == "Hoàn tất")
      setDeleteShow(false);
    if (order.status != "Đã từ chối") setExportShow(true);
  }, [order.status]);
  return (
    <div className="card-body">
      <p>{`Mã đơn: ${order.id}`}</p>
      <p>{`Đặt lúc: ${convertDay.getHours()}:${convertDay.getMinutes()}, ${convertDay.getDate()}/${convertDay.getMonth()}/${convertDay.getFullYear()}`}</p>
      <p>{`Tên người nhận: ${order.NameRecive}`}</p>
      <p>{`Số điện thoại người nhận: ${order.PhoneRecive}`}</p>
      <p>{`Địa chỉ đến: ${order.AddressRecive}`}</p>
      <p>{`Hình thức thanh toán: ${order.TypePay}`}</p>
      <p>{`Tổng đơn: ${order.Total}`}</p>
      <div>
        <p>Chi tiết đơn</p>
        {order.orderDetail.map((dt) => (
          <div key={dt.product.id} className="ml-2">
            <p>{dt.product.name}</p>
            <p>{`Số lượng: ${dt.quantity}`}</p>
          </div>
        ))}
      </div>
      <p>{`Trạng thái: ${order.status}`}</p>
      <div className="card-actions justify-end">
        {updateShow && <UpdateStateOrderBtn idOrder={order.id} />}
        {deleteShow && <DeleteOrderBtn idOrder={order.id} />}
        {exportShow && <ExportPdfBtn order={order} />}
      </div>
    </div>
  );
}
function TableItem({ order }: { order: Order }) {
  return (
    <tr>
      <th>{order.id}</th>
      <td>{order.NameRecive}</td>
      <td>{order.PhoneRecive}</td>
      <td>{order.AddressRecive}</td>
      <td>{order.Total}</td>
      <td>{order.status}</td>
      <td>
        <Dialog
          nameBtn="Chi tiết"
          typeBtn="primary"
          title="Chi tiết đơn hàng"
          id={order.id.toString()}
        >
          <DetailOrder order={order} />
        </Dialog>
      </td>
    </tr>
  );
}
export default TableItem;
