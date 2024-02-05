import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";
import DeleteFormVal from "./DeleteFormVal";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h1 className="text-3xl mt-12">No tasks to show...</h1>;
  }

  return (
    <div>
      <ul className="mt-6">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex justify-between items-center gap-4 p-4 shadow-md rounded-md"
            >
              <h2
                className={`text-lg capitalize ${
                  task.completed ? "line-through" : null
                }`}
              >
                {task.content}
              </h2>
              <div className="flex gap-4 items-center">
                <Link
                  href={`/tasks/${task.id}`}
                  className="btn btn-xs btn-accent"
                >
                  edit
                </Link>
                <DeleteFormVal id={task.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
