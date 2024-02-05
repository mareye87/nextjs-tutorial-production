"use client";
import { delTaskVal } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

//create separate button here, so we can use a 'useFormStatus hook'
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-xs btn-error">
      {pending ? "pending" : "delete"}
    </button>
  );
};

//create initial state for useFormState
const initialState = { message: null };

const DeleteFormVal = ({ id }) => {
  return (
    <form action={delTaskVal}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  );
};

export default DeleteFormVal;
