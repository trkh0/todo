"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../utils/supabase/server";

export async function deleteArchivedTask(formData) {
  const supabase = createClient();

  const id = formData.get("task-id-delete");

  const { error } = await supabase.from("todos_archived").delete().eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
}

export async function unarchiveTask(formData) {
  const supabase = createClient();

  const id = formData.get("task-id");

  const { data, error } = await supabase
    .from("todos_archived")
    .delete()
    .eq("id", id)
    .select();

  delete data.id;

  const { error: errorInsert } = await supabase.from("todos").insert(data);

  if (error || errorInsert) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
}
