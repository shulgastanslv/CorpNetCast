import Link from "next/link";
import { BatteryCharging, BatteryWarning, Clapperboard, Gift, Inbox, Newspaper } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { useState } from "react";
import { currentUser, getSelf } from "@/lib/auth-service";
import { LoginButton } from "@/components/auth/login-button";
import { SelfAvatar } from "@/components/self-avatar";
import { Menu } from "@/components/menu";

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
        <div className="flex items-center">
          {/* <Hint label="Dashboard" side="bottom" asChild>
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-primary mr-2"
              asChild
            >
              <Link href={`/u/${user.username}`}>
                <Clapperboard className="h-5 w-5" />
              </Link>
            </Button>
          </Hint> */}
          <Menu></Menu>
        </div>
      )}
    </div>
  );
};