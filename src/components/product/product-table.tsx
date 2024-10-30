import { Key } from "react";
import { Product } from "~/lib/types";
import { getProducts } from "~/lib/products";
import Dialog from "../Dialog";
import Link from "next/link";
import ImageCloud from "./ImageCloud";
function DetailProduct(product: Product) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="py-6">Thành phần: {product.ingredient}</p>
          <p className="py-6">Chỉ định: {product.destination}</p>
          <p className="py-6">Cách dùng: {product.typeUse}</p>
          <p className="py-6">Liều lượng: {product.dosage}</p>
          <div className="flex justify-between py-6">
            {product.images.map((img) => {
              return (
                <div className="avatar mr-1" key={img.altText}>
                  <div className="w-32 rounded">
                    <ImageCloud
                      url={img.url}
                      altText={img.altText}
                      width={img.width}
                      height={img.height}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            className="btn btn-secondary"
            href={`/manager/products/update-detail/${product.handle}`}
          >
            Cập nhật
          </Link>
        </div>
      </div>
    </div>
  );
}
function tableItem(product: Product, key: Key) {
  return (
    <tr key={key}>
      <th>{Number.parseInt(key.toString()) + 1}</th>
      <td>{product.name}</td>
      <td>{product.price.value}</td>
      <td>{product.unit}</td>
      <td>{product.howPack}</td>
      <td>{product.stored}</td>
      <td>{product.typeProduct.name}</td>
      <td>
        <Dialog
          nameBtn="Xem thêm"
          typeBtn="primary"
          title="Chi tiết"
          id={key + product.name}
        >
          <DetailProduct {...product} />
        </Dialog>
      </td>
    </tr>
  );
}
async function ProductTable() {
  const productList = await getProducts();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên thuốc</th>
            <th>Giá (VND)</th>
            <th>Đơn vị tính</th>
            <th>Quy cách</th>
            <th>Tồn kho</th>
            <th>Loại</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((item, index) => {
            return tableItem(item, index);
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>STT</th>
            <th>Tên thuốc</th>
            <th>Giá</th>
            <th>Đơn vị tính</th>
            <th>Quy cách</th>
            <th>Tồn kho</th>
            <th>Loại</th>
            <th>Chi tiết</th>
          </tr>
        </tfoot>
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
  );
}

export default ProductTable;
