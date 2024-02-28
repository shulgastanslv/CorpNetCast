import { Button } from '@/components/ui/button';
import { getAllUsers } from '@/lib/user-service';
import { ArrowLeftIcon, CalendarClockIcon, Link } from 'lucide-react';
import { format } from "util";
import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

const AdminPage = async () => {
  const users = await getAllUsers();

  const formattedData = users.map((user) => ({
    ...user,
    userId: user.id,
    imageUrl: user.imageUrl,
    username: user.username,
    createdAt: format(new Date(user.createdAt), "dd/MM/yyyy"),
  }));

  return ( 
    <div className="p-6">
      <DataTable columns={columns} data={formattedData} />
    </div>
   );
}
 
export default AdminPage;