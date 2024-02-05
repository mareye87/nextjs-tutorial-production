import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic";
const TasksPage = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-6xl mb-8">TasksPage</h1>
      <div>
        <TaskFormCustom />
        <TaskList />
      </div>
    </div>
  );
};

export default TasksPage;
