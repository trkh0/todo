"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../utils/supabase/server";

export async function updateTask(formData) {
  const supabase = createClient();

  const data = {
    title: formData.get("title-input"),
    description: formData.get("description-input"),
    due_date: formData.get("due-date-input"),
  };
  if (data.due_date === "") {
    delete data.due_date;
  }
  let id = formData.get("task-id");

  const { error } = await supabase.from("todos").update(data).eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function updateStatus(formData) {
  const supabase = createClient();

  const data = {
    status: formData.get("status-input"),
  };
  const id = formData.get("task-id");

  const { error } = await supabase.from("todos").update(data).eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

async function getUserId() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return data.user.id;
}

export async function createTask(formData) {
  const supabase = createClient();

  const user_id = await getUserId();

  const data = {
    title: formData.get("title-input"),
    description: formData.get("description-input"),
    due_date: formData.get("due-date-input"),
    status: "1",
    user_id: user_id,
  };
  console.log(data);
  if (data.due_date === "") {
    delete data.due_date;
  }

  const { error } = await supabase.from("todos").insert(data).select();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
