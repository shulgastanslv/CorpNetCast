import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";


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
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg font-semibold">
              {username}
            </h2>
          </div>
          <p className="text-sm font-semibold">
            {bio}
          </p>
        </div>
        </div>
        <Button size="sm" variant="default">Edit Profile</Button>
    </div>
  );
};