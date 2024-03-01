import {db} from "@/lib/db"

export const getUserByUsername = async (username: string) => {
    const user = await db.user.findUnique({
        where: {
            username,
        },
        select: {
            id: true,
            externalUserId: true,
            username: true,
            bio: true,
            imageUrl: true,
            password: true,
            createdAt: true,
            stream: {
                select: {
                    id: true,
                    isLive: true,
                    isChatDelayed: true,
                    isChatEnabled: true,
                    isChatFollowersOnly: true,
                    thumbnailUrl: true,
                    name: true,
                },
            },
            _count: {
                select: {
                    followedBy: true,
                },
            },
            inventory: {
                select: {
                    items: {
                        select: {
                            id: true,
                            name: true,
                            imageUrl: true,
                            description: true,
                        }
                    }
                }
            }
        },
    });

    return user;
};

export const getUserById = async (id: string) => {
    const user = await db.user.findUnique({
        where: {id},
        include: {
            stream: true,
        },
    });

    return user;
};


export const getAllUsers = async () => {
    try {
        const users = await db.user.findMany();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}