"use client";
import { GetTypeProductsItem } from "./GetTypeProductItem";
import { useFormState } from "react-dom";
import { ValidateForm } from "./actions/add-product";
import UploadImage from "./update-image";
import { TypeProduct } from "~/lib/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const initialState = {
  errors: {
    name: undefined,
    ingredient: undefined,
    howPack: undefined,
    typeUse: undefined,
    stored: undefined,
    unit: undefined,
    price: undefined,
    dosage: undefined,
    destination: undefined,
    typeProductId: undefined,
  },
};

function AddForm({ dataOption }: { dataOption: TypeProduct[] | undefined }) {
  const [state, formAction] = useFormState(ValidateForm, initialState);
  const route = useRouter();
  useEffect(() => {
    if (state.message) {
      alert(state.message);
      route.push("/manager/products");
    }
  });
  return (
    <form
      className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      action={formAction}
    >
      <input type="hidden" name="id" readOnly />
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Tên thuốc</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          name="name"
          placeholder="Nhập tên thuốc"
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
        <select className="select select-bordered" name="typeProductId">
          {dataOption?.map((type) => {
            return <GetTypeProductsItem type={type} key={type.id} />;
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
          Thêm mới
        </button>
      </div>
    </form>
  );
}

export default AddForm;
