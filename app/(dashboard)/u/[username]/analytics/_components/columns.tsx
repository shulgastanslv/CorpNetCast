"use client"

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";

export type BlockedUser = {
  id: string;
  userId: string;
  imageUrl: string;
  username: string;
  createdAt: string;
}

export const columns: ColumnDef<BlockedUser>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Transactions
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => "$"
  },
  
]