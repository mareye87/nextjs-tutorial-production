//to be able to display loading we need to change this component to 'use client

"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

//create submit button component
// and use 'useFormStatus' , a hook that provides form status information
// of the last form submition
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary join-item "
    >
      {pending ? "please wait" : "create task"}
    </button>
  );
};

// 'useFormState' hook allows us to update state based on the result of the form action
// in order for this hook to work we need to create some initial state
// this state will be changed and displayed according to the outcome of the action returned message ('success' or 'error')

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  //invoke 'useFormState()'
  //it's looking for the function and initial state
  //it returns the latest state('state'), and function to control that state('formAction')
  //so we don't invoke 'createTaskCustom' directly but pass it as an argument to 'formAction()'

  const [state, formAction] = useFormState(createTaskCustom, initialState);

  //every time the state changes (state of the form in witch we create new task, it returns message with when succeeded/failed )
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error...");
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* you can use this as message for user or toast */}
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      {/* these messages come from 'createTaskCustom() */}
      <div className="join w-full ">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
