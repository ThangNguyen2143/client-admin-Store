"use client";
import { GetTypeProductsItem } from "./GetTypeProductItem";
import { useFormState } from "react-dom";
import { ValidateForm } from "./actions/add-product";
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
function FormInput({
  label,
  typeInput,
  nameInput,
  err,
}: {
  label: string;
  typeInput: string;
  nameInput: string;
  err?: string[];
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={typeInput}
        className="input input-bordered w-full max-w-xs"
        name={nameInput}
        placeholder={"Nhập " + label}
      />
      <div className="label">
        {err?.map((mess, index) => {
          return (
            <span className="badge badge-info label-text-alt" key={index}>
              {mess}
            </span>
          );
        })}
      </div>
    </label>
  );
}
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
      <FormInput
        label="Tên thuốc"
        nameInput="name"
        typeInput="text"
        err={state?.errors?.name}
      />
      <FormInput
        label="Giá"
        nameInput="price"
        typeInput="number"
        err={state?.errors?.price}
      />
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
      <FormInput
        label="Quy cách"
        nameInput="howPack"
        typeInput="text"
        err={state?.errors?.howPack}
      />
      <FormInput
        label="Cách dùng"
        nameInput="typeUse"
        typeInput="text"
        err={state?.errors?.typeUse}
      />
      <FormInput
        label="Chỉ định"
        nameInput="destination"
        typeInput="text"
        err={state?.errors?.destination}
      />
      <FormInput
        label="Liều lượng"
        nameInput="dosage"
        typeInput="text"
        err={state?.errors?.dosage}
      />
      <FormInput
        label="Số lượng"
        nameInput="stored"
        typeInput="number"
        err={state?.errors?.stored}
      />
      <FormInput
        label="Đơn vị tính"
        nameInput="unit"
        typeInput="text"
        err={state?.errors?.unit}
      />
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Thêm hình ảnh</span>
        </div>
        <input
          type="file"
          name="img"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <div className="label"></div>
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
