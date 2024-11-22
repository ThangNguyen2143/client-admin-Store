"use client";
import { Product } from "~/lib/types";
import Dialog from "../Dialog";
import Link from "next/link";
import ImageCloud from "./ImageCloud";
import { useEffect, useState } from "react";
function DetailProduct({ product }: { product: Product }) {
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
function TableItem({ product }: { product: Product }) {
  return (
    <tr>
      <th>{product.id}</th>
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
          id={product.name}
        >
          <DetailProduct product={product} />
        </Dialog>
      </td>
    </tr>
  );
}
function ProductTable({ productList }: { productList: Product[] }) {
  const totalPage = parseInt((productList.length / 10).toString());
  const [currentPage, setCurentPage] = useState(1);
  const [currentList, setCurrentList] = useState(productList.slice(0, 10));
  const pagintion = [];
  for (let index = 1; index <= totalPage; index++) {
    pagintion.push(
      <input
        className="btn btn-square join-item"
        type="radio"
        name="options"
        aria-label={index.toString()}
        value={index}
        checked={currentPage === index}
        onClick={(e) => setCurentPage(+e.currentTarget.value)}
      />,
    );
  }
  useEffect(() => {
    setCurrentList(
      productList.slice(
        0 + (currentPage - 1) * 10,
        10 + (currentPage - 1) * 10,
      ),
    );
  }, [currentPage]);
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
            return <TableItem product={item} key={index} />;
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
      {totalPage >= 2 && (
        <div className="flex w-full justify-center">
          <div className="join">{pagintion.map((item) => item)}</div>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
