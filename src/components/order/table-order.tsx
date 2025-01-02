import TableItem from "./order-item";
import { OrdersPerPage } from "~/lib/orders";

async function fetchFilteredInvoices(
  state: string,
  query: string,
  currentPage: number,
) {
  const ordersList = await OrdersPerPage(state, query, currentPage);
  return ordersList!;
}
async function TableOrder({
  query,
  state,
  currentPage,
}: {
  query: string;
  state: string;
  currentPage: number;
}) {
  const currentList = await fetchFilteredInvoices(state, query, currentPage);
  return (
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
  );
}
export default TableOrder;
