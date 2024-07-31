"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";

export async function login(previousState, formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return error.toString();
  }
  
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(previousState, formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email").toString(),
    password: formData.get("password").toString(),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return error.toString();
  }
  
  revalidatePath("/", "layout");
  redirect("/");
}
