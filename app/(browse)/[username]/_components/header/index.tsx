import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { VerifiedMark } from "@/components/verified-mark";

interface HeaderProps {
  username: string;
  bio: string;
  imageUrl: string;
};

export const Header = ({
  username,
  bio,
  imageUrl,
}: HeaderProps) => {

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={username}
          size="lg"
          isLive={false}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2 font-semibold text-lg">
            {username}
            <VerifiedMark />
          </div>
          <p className="text-sm font-semibold">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};