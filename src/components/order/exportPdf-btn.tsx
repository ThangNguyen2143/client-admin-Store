import ConvertPDF from "~/lib/exportPDF";
import { Order } from "~/lib/types";

function ExportPdfBtn({ order }: { order: Order }) {
  const invoice = {
    id: order.id,
    name: order.NameRecive,
    address: order.AddressRecive,
    detail: order.orderDetail.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      total: item.product.price * item.quantity,
    })),
    sumTotal: order.Total,
    createdAt: order.createdAt,
  };
  const handleClick = () => {
    ConvertPDF(invoice);
  };
  return (
    <button type="button" onClick={handleClick} className="btn btn-primary">
      Xuất hoá đơn
    </button>
  );
}

export default ExportPdfBtn;
