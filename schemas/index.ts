import * as z from "zod";

export const LoginSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const UpdateSchema = z.object({
    id: z.string(),
    password: z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
    username: z.string().min(1, {
        message: "Name is required",
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


export const ItemScheme = z.object({
    name: z.string().min(6, {
        message: "name 6 characters required",
    }),
    description: z.string().min(1, {
        message: "description is required",
    }),
    imageUrl: z.string(),
});
