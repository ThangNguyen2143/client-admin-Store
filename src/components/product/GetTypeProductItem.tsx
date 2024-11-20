import { TypeProduct } from "~/lib/types";

export function GetTypeProductsItem({
  type,
  defaultSelect,
}: {
  type: TypeProduct;
  defaultSelect?: number;
}) {
  if (!type) return <option>Lỗi rồi</option>;
  return (
    <option value={type.id} defaultChecked={type.id == defaultSelect}>
      {type.name}
    </option>
  );
}
