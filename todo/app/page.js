import Image from "next/image";
import { redirect } from 'next/navigation'

export const revalidate = 1;

export default async function Home() {

  redirect('/home')

  return (
    <></>
  );
}
