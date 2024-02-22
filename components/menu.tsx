import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SelfAvatar } from "./self-avatar";
import { getSelf } from "@/lib/auth-service";
import Link from "next/link";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { Clapperboard, ClapperboardIcon, User, User2, User2Icon } from "lucide-react";
import LogOutButton from "./logout-button";

export async function Menu() {

  const user = await getSelf();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SelfAvatar size="default" imageUrl={user?.imageUrl} username={user?.username}></SelfAvatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href={`/profile/${user?.username}`}>
            <div className="flex items-center justify-center">
              <User2Icon className="w-5 h-5 mr-1"/>
              Profile
            </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/u/${user?.username}`}>
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/news/`}>
              News
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={`/settings/`}>
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Russian</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>Light</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Company</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>About Us</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Products</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>History</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <LogOutButton>Log Out</LogOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
