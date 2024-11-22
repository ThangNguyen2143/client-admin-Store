import { notFound } from "next/navigation";
import { number } from "zod";
import BarChartComp from "~/components/BarChartComp";
import { getOrders } from "~/lib/orders";
import { getProducts } from "~/lib/products";
import { getTypeProducts } from "~/lib/products/typeProduct";
import { Order, Product, TypeProduct } from "~/lib/types";

function totalTypeSale(
  type: TypeProduct,
  orders: Order[],
  products: Product[],
) {
  let total = 0;
  const productByType = products.filter(
    (item) => item.typeProduct.id === type.id,
  );
  if (productByType.length == 0) return total;
  orders.forEach((order) => {
    productByType.forEach((product) => {
      const filter = order.orderDetail.filter(
        (pro) => pro.product.id == product.id,
      );
      if (filter.length > 0) total += filter[0].quantity * product.price.value;
    });
  });
  // type -> product -> oD -> o
  return total;
}
function bussinesTotal(orders: Order[], year: number) {
  const ordersByYear = orders.filter(
    (order) => new Date(order.createdAt).getFullYear() === year,
  );
  const res: { name: string; Tổng: number }[] = [];
  for (let month = 1; month <= 12; month++) {
    const ordersByMonth = ordersByYear.filter(
      (order) => new Date(order.createdAt).getMonth() === month,
    );
    let total = 0;
    ordersByMonth.forEach((order) => {
      total += order.Total;
    });
    res.push({ name: "Tháng " + month, Tổng: total });
  }
  return res;
}
function bestSaler(order: Order[]) {
  let product: { id: number; name: string; total: number }[] = [];
  for (let index = 0; index < order.length; index++) {
    const temp = order[index].orderDetail.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      total: item.quantity * item.product.price,
    }));
    if (product.length == 0) product.push(...temp);
    else {
      temp.forEach((item) => {
        const finds = product.find((p) => p.id == item.id);
        if (!finds) product.push(item);
        else {
          product[product.findIndex(({ id }) => id == finds.id)].total =
            finds.total + item.total;
        }
      });
    }
  }
  let max: { id: number; name: string; total: number } = {
    id: 0,
    name: "",
    total: 0,
  };
  let min: { id: number; name: string; total: number } = {
    id: 0,
    name: "",
    total: Number.MAX_VALUE,
  };
  product.forEach((item) => {
    if (item.total > max.total) max = item;
    if (item.total < min.total) min = item;
  });
  return {
    min: min,
    max: max,
  };
}
export default async function Home() {
  const orderList = await getOrders();
  const listProduct = await getProducts();
  const listTypes = await getTypeProducts();
  if (!listProduct || !listTypes || !orderList) return notFound();
  const productChartData: { name: string; "Đã bán": number }[] = [];
  let totalSale = 0;
  for (let index = 0; index < listTypes!.length; index++) {
    productChartData.push({
      name: listTypes[index].name,
      "Đã bán": totalTypeSale(listTypes[index], orderList, listProduct),
    });
    totalSale += totalTypeSale(listTypes[index], orderList, listProduct);
  }
  const { max, min } = bestSaler(orderList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2">
        <div>
          <h2>Thống kê Doanh thu</h2>
          <BarChartComp
            data={bussinesTotal(orderList, 2023)}
            feilds={["Tổng"]}
          />
        </div>
        <div>
          <h2>Thống kê doanh thu theo loại</h2>
          <BarChartComp data={productChartData} feilds={["Đã bán"]} />
        </div>
        <div className="stats stats-vertical shadow lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title">Số đơn đặt hàng</div>
            <div className="stat-value">
              {orderList.length.toString() + " "} đơn
            </div>
            <div className="stat-desc">1/1/2023 - 1/11/2024</div>
          </div>
          <div className="stat">
            <div className="stat-title">Giá trị đơn</div>
            <div className="stat-value">
              {totalSale.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <div className="stat-desc">↗︎ 7.700.000 VND (74%)</div>
          </div>
        </div>
        <div className="stats stats-vertical shadow lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title">Sản phẩm bán chạy</div>
            <div className="stat-value max-w-11 text-wrap">{max.name}</div>
            <div className="stat-desc">
              Đã bán{" "}
              {max.total.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Sản phẩm bán chậm</div>
            <div className="stat-value">{min.name}</div>
            <div className="stat-desc">
              Đã bán{" "}
              {min.total.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
