//this component in 'use client' because in one of the functions we use here, there's 'redirect()'
// and it needs to be in client component to work
"use client";

import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form action={editTask} className="join flex flex-col max-w-xs  ">
      <div>
        <div>
          {/* this is for editTask() to read from formData the id value of 'id' parameter   */}
          <input type="hidden" name="id" value={id} />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="content"
            defaultValue={content}
            required
            className="input input-bordered join-item w-full"
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="completed">completed</label>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-warning">
        confirm
      </button>
    </form>
  );
};

export default EditForm;
