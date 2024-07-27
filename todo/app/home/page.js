import { redirect } from 'next/navigation'

import { createClient } from '../utils/supabase/server'
import HomeContents from '../components/home/HomeContents'

export default async function HomePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const tasks = await supabase.from('todos').select('*')

  return <HomeContents task_data={tasks}/>
}