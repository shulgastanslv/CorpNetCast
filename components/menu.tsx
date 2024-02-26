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
import { DashboardIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import { Clapperboard, BlocksIcon, ClapperboardIcon, Code2Icon, History, NewspaperIcon, SettingsIcon, User, User2, User2Icon, Users2, Blocks, ArrowLeft } from "lucide-react";
import MenuItem from "./menu-item";
import { signOut } from "@/auth";
import LogOutButton from "./logout-button";

export async function Menu() {

  const user = await getSelf();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SelfAvatar size="default" imageUrl={user?.imageUrl!} username={user?.username!}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href={`/${user?.username}`}>
              <MenuItem icon={User2} label="Profile"></MenuItem>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/news/`}>
              <MenuItem icon={NewspaperIcon} label="News"></MenuItem>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/u/${user?.username}`}>
            <MenuItem icon={Clapperboard} label="Dashboard"></MenuItem>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
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
          <DropdownMenuItem>
            <Link href={`/settings/`}>
              <MenuItem icon={SettingsIcon} label="Settings"></MenuItem>
            </Link> 
          </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <LogOutButton>
              Sign Out
            </LogOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
