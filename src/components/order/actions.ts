"use server";
import { revalidatePath } from "next/cache";
import { findOrders, updateOrder } from "~/lib/orders";

export async function updateStateOrder(pre: any, idOrder: number) {
  try {
    const orderHasUpdate = await updateOrder(idOrder, 2);
    if (!orderHasUpdate) return { message: "Lỗi cập nhật", type: "error" };
    revalidatePath("/manager/order");
    return {
      message: `Đơn hàng ${orderHasUpdate.id} đã cập nhật`,
      type: "success",
    };
  } catch (error) {
    return { message: "Lỗi dữ liệu", type: "error" };
  }
}

export async function rejectOrder(pre: any, idOrder: number) {
  try {
    const orderHasUpdate = await updateOrder(idOrder, 5);
    if (!orderHasUpdate) return { message: "Lỗi cập nhật", type: "error" };
    revalidatePath("/manager/order");
    return {
      message: `Đơn hàng ${orderHasUpdate.id} đã cập nhật`,
      type: "success",
    };
  } catch (error) {
    return { message: "Lỗi dữ liệu", type: "error" };
  }
}

export async function fetchOrdersPages(
  state: string,
  query: string,
): Promise<number> {
  const orderList = await findOrders(state, query);
  if (orderList.length > 10) return orderList.length / 10;
  return 0;
}
