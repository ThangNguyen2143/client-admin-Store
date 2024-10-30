import AddForm from "~/components/product/add-form";
import { getProduct } from "~/lib/products";
import { getTypeProducts } from "~/lib/products/typeProduct";

async function Page({ params }: { params: { slug: string } }) {
  const typeProductList = await getTypeProducts();
  const productItem = await getProduct(params.slug);
  return (
    <main>
      <div className="m-3 flex justify-center">
        <h1 className="text-3xl uppercase">Cập nhật thông tin</h1>
      </div>
      <AddForm
        dataOption={typeProductList}
        dataFields={productItem}
        type="Cập nhật"
      />
    </main>
  );
}

export default Page;
