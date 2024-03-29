import {getAllUsers} from '@/lib/user-service';
import {format} from "util";
import {columnsUsersDt} from '../_components/columns-users-dt';
import {UsersDataTable} from '../_components/users-data-table';


const AdminUsersPage = async () => {

    const users = await getAllUsers();

    const formattedDataUsers = users.map((user) => ({
        ...user,
        userId: user.id,
        imageUrl: user.imageUrl,
        username: user.username,
        createdAt: format(new Date(user.createdAt), "dd/MM/yyyy"),
    }));

    return (
        <div className="flex flex-col p-6 w-full">
            <UsersDataTable columns={columnsUsersDt} data={formattedDataUsers}/>
        </div>
    );
}

export default AdminUsersPage;