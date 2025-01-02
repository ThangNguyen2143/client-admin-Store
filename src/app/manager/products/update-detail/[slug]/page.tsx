import { notFound } from "next/navigation";
import UpdateForm from "~/components/product/update-form";
import { getProduct } from "~/lib/products";
import { getTypeProducts } from "~/lib/products/typeProduct";

async function Page({ params }: { params: { slug: string } }) {
  const typeProductList = (await getTypeProducts()) || [
    { id: 0, name: "Lỗi tải", description: "" },
  ];
  const productItem = await getProduct(params.slug);
  if (!productItem) return notFound();
  return (
    <main>
      <div className="m-3 flex justify-center">
        <h1 className="text-3xl uppercase">Cập nhật thông tin</h1>
      </div>
      <UpdateForm dataOption={typeProductList} dataFields={productItem} />
    </main>
  );
}

export default Page;
