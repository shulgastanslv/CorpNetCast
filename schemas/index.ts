import {UserRole} from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
    username: z.string().min(1, {
        message: "Name is required",
    }),
});
