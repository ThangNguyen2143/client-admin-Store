import Dialog from "~/components/Dialog";
import AddForm from "~/components/product/add-form";
import ProductTable from "~/components/product/product-table";
import { getProducts } from "~/lib/products";
import { getTypeProducts } from "~/lib/products/typeProduct";

async function ProductsPage() {
  const typeProductList = await getTypeProducts();
  const productList = await getProducts();
  return (
    <main className="flex min-w-full flex-col items-center justify-between p-24">
      <div className="flex w-full justify-between">
        <div className="form-control">
          <Dialog
            nameBtn="Thêm thuốc"
            pathIconStart="M3 0v3H0v2h3v3h2V5h3V3H5V0z"
            title="Thêm sản phẩm mới"
            typeBtn="primary"
          >
            <AddForm dataOption={typeProductList} />
          </Dialog>
        </div>
      </div>
      {productList && <ProductTable productList={productList} />}
    </main>
  );
}

export default ProductsPage;
