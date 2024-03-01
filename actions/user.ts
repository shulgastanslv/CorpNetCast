"use server";

import {User} from "@prisma/client";

import {db} from "@/lib/db";
import {getSelf} from "@/lib/auth-service";
import bcrypt from "bcryptjs";
import {getUserByUsername} from "@/lib/user-service";

export const updateUser = async (values: Partial<User>) => {
    const self = await getSelf();

    const hashedPassword = await bcrypt.hash(values?.password!, 10);

    const validData = {
        username: values?.username!,
        imageUrl: values?.imageUrl!,
        password: hashedPassword!,
        bio: values?.bio!,
    };

    const existingUser = await getUserByUsername(validData.username);

    if (existingUser) {
        return {error: "Username already in use!"};
    }

    const user = await db.user.update({
        where: {id: self?.id},
        data: {...validData}
    });

    return {success: "Update is successfully!!!"};
};