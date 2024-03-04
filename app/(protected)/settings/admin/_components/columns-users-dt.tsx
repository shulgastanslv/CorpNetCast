"use client"

import {ArrowUpDown} from "lucide-react";
import {ColumnDef} from "@tanstack/react-table";

import {Button} from "@/components/ui/button";
import {UserAvatar} from "@/components/user-avatar";
import {EditUserModal} from "./edit-button-dialog";
import { SendUserModal } from "./send-item-dialog";


export type UserInfo = {
    id: string;
    userId: string;
    imageUrl: string;
    username: string;
    createdAt: string;
}

export const columnsUsersDt: ColumnDef<UserInfo>[] = [
    {
        accessorKey: "username",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Username
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>
        ),
        cell: ({row}) => (
            <div className="flex items-center gap-x-4">
                <UserAvatar
                    username={row.original.username}
                    imageUrl={row.original.imageUrl}
                />
                <span>{row.original.username}</span>
            </div>
        )
    },
    {
        accessorKey: "createdAt",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Date Created
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>
        ),
    },
    {
        id: "editUser",
        cell: ({row}) => <EditUserModal userId={row.original.userId}/>,
    },
    {
        id: "sendItem",
        cell: ({row}) => <SendUserModal userId={row.original.userId}/>,
    }
]