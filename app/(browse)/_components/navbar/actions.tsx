import Link from "next/link";
import { BatteryCharging, BatteryWarning, Clapperboard, Gift, Inbox, Newspaper } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { useState } from "react";
import { currentUser } from "@/lib/auth-service";
import { LoginButton } from "@/components/auth/login-button";

export const Actions = async () => {
  const user = await currentUser();

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
          <Hint label="Upgrade" side="bottom" asChild>
            <Button
              size="sm"
              variant="outline"
              className="mr-2"
              asChild
            >
              <Link href="/upgrade/u/${user.username}">
                <span>
                  Upgrade
                </span>
              </Link>
            </Button>
          </Hint>
          <Hint label="Dashboard" side="bottom" asChild>
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-primary mr-2"
              asChild
            >
              <Link href={`/u/${user.name}`}>
                <Clapperboard className="h-5 w-5" />
              </Link>
            </Button>
          </Hint>
        </div>
      )}
    </div>
  );
};