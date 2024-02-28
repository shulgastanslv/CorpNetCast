import { db } from "@/lib/db";

export const addItemToInventory = async (userId: string, itemData: {
    name: string;
    description?: string;
    imageUrl: string;
  }) => {
    // Find the inventory by userId
    let inventory = await db.inventory.findUnique({
      where: {
        userId,
      },
    });
  
    // If the inventory doesn't exist, you might want to handle this case accordingly
    if (!inventory) {
        inventory = await db.inventory.create({
          data: {
            userId,
            quantity: 0,
          },
        });
      }
  
    // Use Prisma's update method to add a new item to the inventory
    const updatedInventory = await db.inventory.update({
      where: {
        userId,
      },
      data: {
        item: {
          create: {
            ...itemData,
          },
        },
      },
      include: {
        item: true, // To fetch the updated list of items
      },
    });
  
    return updatedInventory.item;
  };

  export const getInventoryByUserId = async(userId: string) => {
    const inventory = await db.inventory.findUnique({
      where: {
        userId,
      },
      include: {
        item: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            description: true,
          },
        },
      },
    });
  
    return inventory;
  }