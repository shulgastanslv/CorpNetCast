"use client";

import {ElementRef, useRef, useState, useTransition} from "react";

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {useRouter} from "next/navigation";
import {updateUser} from "@/actions/user";
import {RegisterSchema, UpdateSchema} from "@/schemas";


interface EditUserModalProps {
    userId: string;
};

interface UpdateUserResult {
    error?: string;
    success?: string;
}


export const EditUserModal = ({
                                  userId,
                              }: EditUserModalProps) => {


    const closeRef = useRef<ElementRef<"button">>(null);

    const router = useRouter();

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof UpdateSchema>>({
        resolver: zodResolver(UpdateSchema),
        defaultValues: {
            password: "",
            username: "",
        },
    });

    const onSubmit = (values: z.infer<typeof UpdateSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            updateUser(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                    router.refresh();
                });

        });
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="sm" className="ml-auto">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit User data</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="John Doe"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="******"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                            Edit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};