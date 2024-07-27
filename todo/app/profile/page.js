import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { signout } from "./actions";

export default async function ProfilePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <form>
        <button formAction={signout}>Sign Out</button>
      </form>
    </>
  );
}
