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

//@ts-ignore
export const getSelf = async () => {
    const self = await currentUser();

    if(self?.id || self?.id == undefined) {
        return null;
    }

    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });

    if(!user) {
        return null;
    }

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
