import Link from "next/link";
import { BatteryCharging, BatteryWarning, Box, Clapperboard, Gift, Inbox, LucideMessageCircle, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { useState } from "react";
import { currentUser, getSelf } from "@/lib/auth-service";
import { LoginButton } from "@/components/auth/login-button";
import { SelfAvatar } from "@/components/self-avatar";
import { Menu } from "@/components/menu";
import { signOut } from "next-auth/react";

export const Actions = async () => {
  const user = await getSelf();

  return (

    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <div className="flex items-center">
          <LoginButton>
            <Button size="sm" variant="default">
              Sign In
            </Button>
          </LoginButton>
        </div>
      )}
      {!!user && (
        <div className="flex items-center mr-2">
          <Menu></Menu>
        </div>
      )}
    </div>
  );
};