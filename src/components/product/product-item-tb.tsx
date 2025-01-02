import Link from "next/link";
import Dialog from "~/components/Dialog";
import { Product } from "~/lib/types";
import ImageCloud from "./ImageCloud";
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
export default TableItem;
