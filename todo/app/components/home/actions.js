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
    let id = formData.get("task-id")

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
    const id = formData.get("task-id")
  
    const { error } = await supabase.from("todos").update(data).eq("id", id);
  
    if (error) {
      redirect("/error");
    }
  
    revalidatePath("/", "layout");
    redirect("/");
  }
