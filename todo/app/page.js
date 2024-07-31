import Image from "next/image";
import { redirect } from 'next/navigation'

// revalidate data every 1 second
export const revalidate = 1;

export default async function Home() {

  redirect('/home')

  return (
    <></>
  );
}
