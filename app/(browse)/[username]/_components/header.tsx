"use client";

import { UserIcon } from "lucide-react";
import { 
  useParticipants, 
  useRemoteParticipant
} from "@livekit/components-react";

import { Skeleton } from "@/components/ui/skeleton";
import { VerifiedMark } from "@/components/verified-mark";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";


interface HeaderProps {
  imageUrl: string;
};

export const Header = ({
  imageUrl,
}: HeaderProps) => {
  
  return (
    <div className="flex items-start justify-between py-5 px-6">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username="root"
          size="lg"
          isLive={false}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg font-semibold">
              {"root"}
            </h2>
          </div>
          <p className="text-sm font-semibold">
            {"sdfsdf"}
          </p>
        </div>
        </div>
        <Button size="sm" variant="default">Edit Profile</Button>
    </div>
  );
};