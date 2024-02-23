import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { StreamPlayer } from "@/components/stream-player";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { Header } from "./_components/header";
import { UserAvatar } from "@/components/user-avatar";
import { UserBanner } from "./_components/banner";

interface UserPageProps {
  params: {
    username: string;
  };
};

const UserPage = async ({
  params
}: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (

    <>
      <UserBanner
        imageUrl={user?.imageUrl!}
      />
      <div className="h-full bg-black">
        <Header imageUrl={user?.imageUrl!} />
      </div>
    </>

  );
}

export default UserPage;