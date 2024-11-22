import Link from "next/link";
import TableOrder from "~/components/order/table-order";
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
      {orderList && <TableOrder orderList={orderList} />}
    </main>
  );
}

export default OrdersPage;
