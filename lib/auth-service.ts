import {auth} from "@/auth";
import {db} from "@/lib/db";

export const currentUser = async () => {
    const session = await auth();

    return session?.user;
};


export const currentRole = async () => {
    const session = await auth();

    return session?.user?.role;
};


export const getSelf = async () => {
    try {
        const self = await currentUser();

        if (!self?.id) {
            throw new Error("User ID not found");
        }

        const user = await db.user.findUnique({
            where: {externalUserId: self.id},
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error: any) {
        throw new Error(`Failed to get self: ${error.message}`);
    }
};

export const getSelfByUsername = async (username: string) => {
    const user = await db.user.findUnique({
        where: {username}
    });

    if (!user?.id) {
        return;
    }

    return user;
};
