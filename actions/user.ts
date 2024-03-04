"use server";

import {User} from "@prisma/client";

import {db} from "@/lib/db";
import {getSelf} from "@/lib/auth-service";
import bcrypt from "bcryptjs";
import {getUserByUsername} from "@/lib/user-service";

export const updateUser = async (values: Partial<User>) => {
    const self = await getSelf();

    const validData = {
        username: values?.username!,
        bio: values?.bio!,
    };

    const user = await db.user.update({
        where: {id: self?.id},
        data: {...validData}
    });

    return user;
};

export const updateUserByAdmin = async (values: Partial<User>) => {

    const hashedPassword = await bcrypt.hash(values?.password!, 10);

    const validData = {
        username: values?.username!,
        password: hashedPassword!,
    };

    const user = await db.user.update({
        where: {id: values?.id},
        data: {...validData}
    });

    return user;
};


export const updateUserImageUrl = async (values: Partial<User>) => {
    const self = await getSelf();

    const validData = {
        imageUrl: values?.imageUrl!,
    };

    const user = await db.user.update({
        where: {id: self?.id},
        data: {...validData}
    });

    return user;
};