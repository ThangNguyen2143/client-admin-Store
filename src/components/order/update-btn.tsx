"use client";
import { useFormState } from "react-dom";
import { updateStateOrder } from "./actions";

function UpdateStateOrderBtn({ idOrder }: { idOrder: number }) {
  const [status, formAction] = useFormState(updateStateOrder, {
    message: "",
    type: "",
  });
  //   const updateOrder = formAction(idOrder);

  const handleClick = async () => {
    const action = formAction.bind(null, idOrder);
    await action();
  };
  return (
    <>
      <form action={handleClick}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status.type == "success"}
        >
          Hoàn tất đóng gói
        </button>
        <div
          className="badge badge-ghost"
          hidden={status.type != "" ? false : true}
        >
          {status.message}
        </div>
      </form>
    </>
  );
}

export default UpdateStateOrderBtn;
