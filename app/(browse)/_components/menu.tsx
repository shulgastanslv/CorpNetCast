import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SelfAvatar} from "./self-avatar";
import {getSelf} from "@/lib/auth-service";
import Link from "next/link";
import {LogoutButton} from "./logout-button";

export async function Menu() {

    const user = await getSelf();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SelfAvatar size="default" imageUrl={user?.imageUrl!} username={user?.username!}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={`/${user?.username}`}>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <Link href={`/news/`}>
                            News
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={`/u/${user?.username}`}>
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Company</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem disabled>About Us</DropdownMenuItem>
                                <DropdownMenuItem disabled>Products</DropdownMenuItem>
                                <DropdownMenuItem disabled>Team</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem disabled>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Link href={`/settings/`}>
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <LogoutButton>
                        Log out
                    </LogoutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
