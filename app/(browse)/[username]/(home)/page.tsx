import {notFound} from "next/navigation";
import {getUserByUsername} from "@/lib/user-service";
import {getInventoryByUserId} from "@/lib/inventory-service";
import ItemCard from "./_components/item-card";
import {Suspense} from "react";
import {Results, ResultsSkeleton} from "../../(home)/_components/results";


interface UserPageProps {
    params: {
        username: string;
    };
};

const UserPage = async ({
                            params
                        }: UserPageProps) => {
    const user = await getUserByUsername(params.username)!;

    const userInventory = await getInventoryByUserId(user?.id!);

    if (!user || !user.stream) {
        notFound();
    }

    return (
        <div>
            <div>
                <Suspense fallback={<ResultsSkeleton/>}>
                    <Results/>
                </Suspense>
            </div>
            <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-xl mb-4">
                {user.username}`s Inventory
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userInventory?.items.map((item) => (
                    <li key={item.id}>
                        <ItemCard item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPage;