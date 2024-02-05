//prior to server actions , this was the way to handle data from database
// here, we do pretty much the same this as in the 'actions' file

//get our prisma instance (database)
// import { NextResponse } from "next/server";
import db from "@/utils/db";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
  //   return NextResponse.json({ data: tasks });
};

export const POST = async (request) => {
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ data: task });
};
