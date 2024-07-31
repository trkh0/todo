import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";
import HomeContents from "../components/home/HomeContents";

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // Fetch tasks for the user
  const tasks = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", data.user.id);

  return <HomeContents task_data={tasks} />;
}
