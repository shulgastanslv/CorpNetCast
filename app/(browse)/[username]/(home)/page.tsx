import { notFound } from "next/navigation";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { UserBanner } from "../_components/banner";
import {NavMenu} from "../_components/navMenu";
import { Header } from "../_components/header";
import { addItemToInventory, getInventoryByUserId } from "@/lib/inventory-service";
import Image from "next/image";


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

  // const newItemData = {
  //   name: "New Item",
  //   description: "This is a new item",
  //   imageUrl: "https://example.com/item-image.jpg",
  // };

  // const updatedItems = await addItemToInventory(user?.id!, newItemData);
  // console.log("Item added successfully:", updatedItems);


  if (!user || !user.stream) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-xl mb-4">
        {user.username}`s Inventory
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userInventory?.item.map((item) => (
          <li key={item.id}>
            <div>
              <Image className="rounded-sm shadow-sm" 
              src={item.imageUrl} 
              objectFit="cover" 
              alt={item.name} width={250} height={300}/>
            </div>
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;