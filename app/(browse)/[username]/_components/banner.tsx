import { Video } from "@/components/stream-player/video";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { getSelf } from "@/lib/auth-service";
import Image from "next/image";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { cn } from "@/lib/utils";
import { LiveKitRoom } from "@livekit/components-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { notFound } from "next/navigation";
interface UserBannerProps {
  imageUrl: string;
};

export const UserBanner = ({
  imageUrl,
}: UserBannerProps) => {

  return (
    <div className="relative h-40 w-full">
      <Image
        src={imageUrl}
        alt="banner"
        objectFit="cover"
        fill
        className="shadow-sm"
      />
    </div>
  );
};