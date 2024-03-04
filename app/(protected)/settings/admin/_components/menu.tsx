import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {getSelf} from "@/lib/auth-service";
import Link from "next/link";
import {MenuIcon} from "lucide-react";

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
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={`/settings/admin/users/`}>
                            Users
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
