"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import {db} from "@/lib/db";
import {RegisterSchema} from "@/schemas";
import {randomUUID} from "crypto";
import {getUserByUsername} from "@/lib/user-service";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const {email, password, username} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByUsername(username);

    if (existingUser) {
        return {error: "Email already in use!"};
    }

    const id = randomUUID()

    await db.user.create({
        data: {
            id,
            externalUserId: id,
            stream: {
                create: {
                    name: username + '`s stream'
                }
            },
            username,
            primary_email_address_id: email,
            imageUrl: "",
            password: hashedPassword,
        },
    });

    return {success: "User created!"};
};