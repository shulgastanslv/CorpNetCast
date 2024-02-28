import type { Metadata } from 'next'
import { notFound } from "next/navigation";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { UserBanner } from "./_components/banner";
import {NavMenu} from "./_components/navMenu";
import { Header } from "./_components/header";


interface UserLayoutProps {
  username: string;
};

export default async function UserLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: UserLayoutProps,
}) {

  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  return (
      <div>
        <UserBanner imageUrl={user?.imageUrl!} />
        <div className="flex flex-col h-screen">
          <div className="pt-5 px-5">
            <Header username={user?.username!} bio={user?.bio!} imageUrl={user?.imageUrl!}/>
            <NavMenu />
            <div className="pt-5">
              {children}
            </div>
          </div>
        </div>
      </div>
  )
}
