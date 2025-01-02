import Link from "next/link";
import { Suspense } from "react";
import { fetchOrdersPages } from "~/components/order/actions";
import TableOrder from "~/components/order/table-order";
import Pagination from "~/components/pagination";
import Search from "~/components/search";
import { getOrders, getStatus } from "~/lib/orders";

async function OrdersPage(props: {
  searchParams?: Promise<{
    state?: string;
    query?: string;
    page?: string;
  }>;
}) {
  const statusList = getStatus();
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const state = searchParams?.state || "0";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchOrdersPages(state, query);
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
            {statusList.map((st) => {
              return (
                <li key={st.id}>
                  <Link href={`?state=${st.id}`}>{st.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Search placeholder="Tìm hoá đơn theo tên" />
      </div>
      <div className="overflow-x-auto">
        <Suspense key={query + currentPage} fallback={<TableOrderSkeleton />}>
          {/* <Table query={query} currentPage={currentPage} /> */}
          <TableOrder query={query} currentPage={currentPage} state={state} />
        </Suspense>
      </div>
      {/* {orderList && <TableOrder orderList={orderList} />} */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
function TableOrderSkeleton() {
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
    </table>
  );
}
export default OrdersPage;
