import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Navbar from './(browse)/_components/navbar'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
