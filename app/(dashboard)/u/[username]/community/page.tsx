import {format } from "date-fns";

import { getBlockedUsers } from "@/lib/block-service";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, CalendarClockIcon, Link } from 'lucide-react';

const CommunityPage = async () => {
  const blockedUsers = await getBlockedUsers();

  const formattedData = blockedUsers.map((block) => ({
    ...block,
    userId: block.blocked.id,
    imageUrl: block.blocked.imageUrl,
    username: block.blocked.username,
    createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
  }));

  return ( 
    <div className="p-6">
      <div className="flex items-center gap-4 mb-5">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-lg font-semibold md:text-xl">
        Community Settings
        </h1>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
   );
}
 
export default CommunityPage;