import Link from "next/link";
import TableItem from "~/components/order/order-item";
import { getOrders, getStatus } from "~/lib/orders";

async function OrdersPage() {
  const orderList = await getOrders();
  const statusList = getStatus();
  return (
    <main className="flex min-w-full flex-col items-center justify-between p-24">
      <div className="flex w-full justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Lọc
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {statusList.map((st, idx) => {
              return (
                <li key={idx}>
                  <Link href={`#${st.id}`}>{st.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
            {orderList && orderList.length > 0 ? (
              orderList.map((order) => {
                return <TableItem order={order} key={order.id} />;
              })
            ) : (
              <tr>
                <td colSpan={7}>Đơn hàng trống</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex w-1/2 justify-end">
          <div className="join">
            <button className="btn join-item btn-active">1</button>
            <button className="btn join-item">2</button>
            <button className="btn join-item">3</button>
            <button className="btn join-item">4</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrdersPage;
