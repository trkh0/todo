import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";
import ArchivedContents from "../components/archived/ArchivedContents";

export default async function ArchivedPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const tasks = await supabase
    .from("todos_archived")
    .select("*")
    .eq("user_id", data.user.id);

  return <ArchivedContents task_data={tasks} />;
}
