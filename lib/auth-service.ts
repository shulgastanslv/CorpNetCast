import { auth } from "@/auth";
import { db } from "@/lib/db";

export const currentUser = async () => {
    const session = await auth();

    return session?.user;
};


export const currentRole = async () => {
    const session = await auth();

    return session?.user?.role;
};


export const getSelf = async () => {
    const self = await currentUser();

    const user = await db.user.findUnique({
        where: { externalUserId: self?.id },
    });

    return user;
};

export const getSelfByUsername = async (username: string) => {
    const user = await db.user.findUnique({
        where: { username }
    });

    if (!user?.id) {
        return;
    }

    return user;
};
