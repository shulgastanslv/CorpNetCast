"use client";

import { toast } from "sonner";
import { Heart, MinusCircle, User } from "lucide-react";
import { useTransition } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { onFollow, onUnfollow } from "@/actions/follow";
import { onBlock, onUnblock } from "@/actions/block";
import { getUserById } from "@/lib/user-service";

interface ActionsProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
};

export const Actions = ({
  hostIdentity,
  isFollowing,
  isHost,
}: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const isBlocking = false;


  const router = useRouter();
  const { userId } = useAuth();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    });
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    });
  }

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in");
    }

    if (isHost) return;

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  }


  const handleBlock = () => {
    startTransition(() => {
      onBlock(hostIdentity)
        .then(() => toast.success(`You've banned user`))
        .catch(() => toast.error("Something went wrong"))
    });
  }

  const handleUnBlock = () => {
    startTransition(() => {
      onUnblock(hostIdentity)
        .then(() => toast.success(`You've unbanned user`))
        .catch(() => toast.error("Something went wrong"))
    });
  }

  const toggleBlock = () => {
    if (!userId) {
      return router.push("/sign-in");
    }

    if (isHost) return;

    if (isBlocking) {
      handleUnBlock();
    } else {
      handleBlock();
    }
  }


  return (
    <div className="flex gap-2">

      <Button
        disabled={isPending || isHost}
        onClick={toggleBlock}
        variant="default"
        size="sm"
        className="w-full lg:w-auto"
      >
        <MinusCircle className="h-4 w-4 mr-2"/>
        {isBlocking
          ? "UnBlock"
          : "Block"
        }
      </Button>
      <Button
        disabled={isPending || isHost}
        onClick={toggleFollow}
        variant="default"
        size="sm"
        className="w-full lg:w-auto"
      >
        <Heart className={cn(
          "h-4 w-4 mr-2",
          isFollowing
            ? "fill-white"
            : "fill-none"
        )} />
        {isFollowing
          ? "Unfollow"
          : "Follow"
        }
      </Button>
    </div>

  )
};

export const ActionsSkeleton = () => {
  return (
    <Skeleton className="h-10 w-full lg:w-24" />
  );
};