import { notFound } from "next/navigation";
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
export default async function Home() {
  const orderList = await getOrders();
  const listProduct = await getProducts();
  const listTypes = await getTypeProducts();
  if (!listProduct || !listTypes || !orderList) return notFound();
  const productChartData: { name: string; "Đã bán": number }[] = [];
  for (let index = 0; index < listTypes!.length; index++) {
    productChartData.push({
      name: listTypes[index].name,
      "Đã bán": totalTypeSale(listTypes[index], orderList, listProduct),
    });
  }
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
      </div>
    </main>
  );
}
