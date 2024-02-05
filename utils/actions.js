"use server";

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ****************   //used in tasks list to get all tasks from database   *******************//
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//
//used in form
//this is basic version without error checks
export const createTask = async (formData) => {
  //get parameters from your form, in this case from 'content' field
  const content = formData.get("content");
  //create task according to model you created in schema.prisma
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  //refresh to show changes
  revalidatePath("/tasks");
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//
//used in TaskFormCustom, added validation and interactivity
export const createTaskCustom = async (prevState, formData) => {
  //this line is just to give delay to see loading/pending effect
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  //get parameters from your form, in this case from 'content' field
  const content = formData.get("content");
  //create task according to model you created in schema.prisma

  //set up schema with input checks using 'zod' validation library
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    //pass content from input to z.object to validate
    Task.parse({ content });

    await prisma.task.create({
      data: {
        content: content,
      },
    });
    //refresh to show changes
    revalidatePath("/tasks");
    //this message is used to check state of the form (for toast)

    return { message: "success" };
  } catch (error) {
    console.log(error);
    //you can display error message from z.object or just 'error'
    //or use this state.message and pass to the toast
    return { message: "error" };
  }
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id: id },
  });
  revalidatePath("/tasks");
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//
//added validation and interactivity
export const delTaskVal = async (formData) => {
  const id = formData.get("id");

  try {
    await prisma.task.delete({
      where: { id: id },
    });
    //refresh
    revalidatePath("/tasks");
    //return message  to useFormStatus
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//

//getSingleTask
export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id: id },
  });
};

// ********************************************************************************************//
//                                                                                             //
//                                                                                             //
// ********************************************************************************************//

//editTask
export const editTask = async (formData) => {
  const content = formData.get("content");
  const id = formData.get("id");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed === "on" ? true : false,
    },
  });
  //for redirect to work, EditFormComponent(which uses this function) has to be 'use client'
  // also, don't place redirect() in try-catch block
  redirect("/tasks");
};
