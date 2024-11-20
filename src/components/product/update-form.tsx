"use client";
import { Product, TypeProduct } from "~/lib/types";
import { GetTypeProductsItem } from "./GetTypeProductItem";
import { useFormState } from "react-dom";
import { useState } from "react";
import { updateProduct } from "./actions/update-product";
import { ImageContainer } from "./update-image";
const initialState = {
  errors: {},
};
type propsForm = {
  dataOption: TypeProduct[];
  dataFields: Product;
};

function UpdateForm({ dataOption, dataFields }: propsForm) {
  const [state, formAction] = useFormState(updateProduct, initialState);
  const [product, setProduct] = useState(dataFields);
  return (
    <form
      className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      action={formAction}
    >
      <input type="hidden" value={dataFields.id} name="id" readOnly />
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Tên thuốc</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          name="name"
          placeholder="Nhập tên thuốc"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <div className="label">
          {state?.errors?.name?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Giá</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          placeholder="Giá công khai"
          name="price"
          value={product.price.value}
          onChange={(e) =>
            setProduct({
              ...product,
              price: { value: +e.target.value, currencyCode: "VND" },
            })
          }
        />
        <div className="label">
          {state?.errors?.price?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Loại thuốc</span>
        </div>
        <select
          className="select select-bordered"
          name="typeProductId"
          onChange={(e) =>
            setProduct({
              ...product,
              typeProduct: dataOption.find(
                (type) => type.id === +e.target.value,
              )!,
            })
          }
        >
          {dataOption?.map((type) => {
            return (
              <GetTypeProductsItem
                type={type}
                key={type.id}
                defaultSelect={product.typeProduct.id}
              />
            );
          })}
        </select>
        <div className="label">
          {state?.errors?.typeProductId?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control col-span-3">
        <div className="label">
          <span className="label-text">Thành phần</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Nhập thành phần"
          name="ingredient"
          value={product.ingredient}
          onChange={(e) =>
            setProduct({ ...product, ingredient: e.target.value })
          }
        ></textarea>
        <div className="label">
          {state?.errors?.ingredient?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Quy cách</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Đóng gói thế nào?"
          name="howPack"
          value={product.howPack}
          onChange={(e) => setProduct({ ...product, howPack: e.target.value })}
        />
        <div className="label">
          {state?.errors?.howPack?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Cách dùng</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Cách sử dụng thuốc"
          name="typeUse"
          value={product.typeUse}
          onChange={(e) => setProduct({ ...product, typeUse: e.target.value })}
        />
        <div className="label">
          {state?.errors?.typeUse?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Chỉ định</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Trị bệnh gì?"
          name="destination"
          value={product.destination}
        />
        <div className="label">
          {state?.errors?.destination?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Liều lượng</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Dùng bao nhiêu một ngày"
          name="dosage"
          value={product.dosage}
          onChange={(e) => setProduct({ ...product, dosage: e.target.value })}
        />
        <div className="label">
          {state?.errors?.dosage?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Số lượng</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          placeholder="10"
          name="stored"
          value={product.stored}
          onChange={(e) => setProduct({ ...product, stored: +e.target.value })}
        />
        <div className="label">
          {state?.errors?.stored?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Đơn vị tính</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Chai, hộp,..."
          name="unit"
          value={product.unit}
          onChange={(e) => setProduct({ ...product, unit: e.target.value })}
        />
        <div className="label">
          {state?.errors?.unit?.map((mess, index) => {
            return (
              <span className="badge badge-info label-text-alt" key={index}>
                {mess}
              </span>
            );
          })}
        </div>
      </label>
      {product.images.length !== 0 && (
        <div className="flex flex-wrap">
          <h2 className="w-full text-xl font-bold">Danh sách hình ảnh</h2>
          {ImageContainer(product.images.map((img) => img.url))}
        </div>
      )}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Thêm hình ảnh</span>
        </div>
        <input
          type="file"
          name="img"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <div className="label">
          {/* <span className="label-text-alt">Alt label</span> */}
        </div>
      </label>

      <div className="col-span-3 flex justify-center">
        <button type="submit" className="btn btn-outline w-full">
          Cập nhật
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
