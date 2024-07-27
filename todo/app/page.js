import Image from "next/image";
import Navbar from "./components/navbar/Navbar.js";
import { getSupabaseClient, supabaseClient } from "./utils/supabase/SupabaseClient.js";

export const revalidate = 1;

export default async function Home() {
  let supabase = getSupabaseClient();
  let { data: zodiacsigns } = await supabase
  .from("test")
  .select("*")
  console.log(zodiacsigns);


  return (
    <div className="tw-bg-white">
      <Navbar />

    </div>
  );
}
