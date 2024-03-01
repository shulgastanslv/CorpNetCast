import {auth} from "@/auth";

export const currentUser = async () => {
    const session = await auth();

    return session?.user;
};


export const currentRole = async () => {
    const session = await auth();

    return session?.user?.role;
};


import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";


export const getSelf = async () => {
    const self = await currentUser();

    if (!self?.id) {
        return;
    }

    const user = await db.user.findUnique({
        where: {externalUserId: self?.id},
    });

    if (!user) {
        return;
    }

    return user;
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
