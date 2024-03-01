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
import { getSelf } from "@/lib/auth-service";
import Link from "next/link";
import { DashboardIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import { Clapperboard, BlocksIcon, ClapperboardIcon, Code2Icon, History, NewspaperIcon, SettingsIcon, User, User2, User2Icon, Users2, Blocks, ArrowLeft, MenuIcon } from "lucide-react";
import { signOut } from "@/auth";
import { useRouter } from "next/navigation";

export async function Menu() {

  const user = await getSelf();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
              variant="ghost"
              className="h-auto p-2"
            >
              <MenuIcon className="opacity-90"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Admin Panel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={`/settings/admin/users/`}>
              Users
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/items/`}>
              Items
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Link href={`/news/`}>
              News
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
