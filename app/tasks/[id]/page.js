import EditForm from "@/components/EditForm";
import { getSingleTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);

  return (
    <>
      <div className="my-8">
        <Link href="/tasks" className="btn btn-primary">
          All Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;
