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
    <div className="w-100 d-flex flex-column align-items-center py-5">
      <h3 className="py-2">Hello {data.user.email}</h3>
      <form className="w-100 tw-max-w-80 my-5">
        <button className="btn btn-primary w-100" formAction={signout}>Sign Out</button>
      </form>
    </div>
  );
}
