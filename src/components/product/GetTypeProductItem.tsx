import { Key } from "react";
import { TypeProduct } from "~/lib/types";

export function GetTypeProductsItem({
  type,
  key,
  defaultSelect,
}: {
  type: TypeProduct;
  key: Key;
  defaultSelect?: number;
}) {
  if (!type) return <option key={key}>Lỗi rồi</option>;
  return (
    <option key={key} value={type.id} defaultChecked={type.id == defaultSelect}>
      {type.name}
    </option>
  );
}
