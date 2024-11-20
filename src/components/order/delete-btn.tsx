"use client";
import { useFormState } from "react-dom";
import { rejectOrder } from "./actions";

function DeleteOrderBtn({ idOrder }: { idOrder: number }) {
  const [status, formAction] = useFormState(rejectOrder, {
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
          className="btn btn-accent"
          type="submit"
          disabled={status.type == "success"}
        >
          Huỷ đơn
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

export default DeleteOrderBtn;
