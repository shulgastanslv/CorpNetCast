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
import { Clapperboard } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

export async function Menu() {

  const user = await getSelf();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SelfAvatar size="default" imageUrl={user.imageUrl} username={user.username}></SelfAvatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/u/${user.username}`}>
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Inventory
          </DropdownMenuItem>
          <DropdownMenuItem>
            News
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
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
          Log Out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
