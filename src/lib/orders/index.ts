import { getItem, postItem, Server_URL } from "../Constans";
import { Order } from "../types";

type orderDrugStore = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  Total: number;
  AddressRecive: string;
  TypePay: string;
  osId: number;
  NameRecive: string;
  PhoneRecive: string;
  orderDetail: {
    quantity: number;
    productId: number;
    productSale: {
      price: number;
      name: string;
    };
  }[];
};
const status = [
  { id: 1, name: "Đang xử lý" },
  { id: 2, name: "Đang vận chuyển" },
  { id: 3, name: "Đã nhận" },
  { id: 4, name: "Hoàn tất" },
  { id: 5, name: "Đã từ chối" },
  { id: 6, name: "Đã thanh toán" },
];
const reshapeOrder = (order: orderDrugStore): Order | undefined => {
  if (!order) return undefined;
  const {
    id,
    createdAt,
    updatedAt,
    Total,
    AddressRecive,
    TypePay,
    NameRecive,
    PhoneRecive,
    orderDetail,
    osId,
  } = order;
  return {
    id,
    createdAt,
    updatedAt,
    Total,
    TypePay,
    AddressRecive,
    NameRecive,
    PhoneRecive,
    status: status.find((item) => item.id == osId)?.name,
    orderDetail: orderDetail.map((item) => ({
      quantity: item.quantity,
      product: {
        id: item.productId,
        price: item.productSale.price,
        name: item.productSale.name,
      },
    })),
  };
};
const reshapedOrders = (orders: orderDrugStore[]): Order[] => {
  const reshapeOrders = [];
  for (const order of orders) {
    if (order) {
      const reshapedOrder = reshapeOrder(order);

      if (reshapedOrder) {
        reshapeOrders.push(reshapedOrder);
      }
    }
  }

  return reshapeOrders;
};
export async function getOrders(): Promise<Order[] | undefined> {
  const endpoint = `${Server_URL}/order`;
  const result = await getItem({ endpoint });
  return reshapedOrders(result);
}
export function getStatus() {
  return status;
}
export async function updateOrder(
  idOrder: number,
  osId: number,
): Promise<Order | undefined> {
  const endpoint = `${Server_URL}/order/${idOrder}`;
  const data = JSON.stringify({ osId });
  const result = await postItem({ endpoint, data });

  return result;
}
