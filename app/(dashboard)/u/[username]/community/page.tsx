import {getBlockedUsers} from "@/lib/block-service";

import {DataTable} from "./_components/data-table";
import {columns} from "./_components/columns";
import {format} from "util";

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
            <DataTable columns={columns} data={formattedData}/>
        </div>
    );
}

export default CommunityPage;