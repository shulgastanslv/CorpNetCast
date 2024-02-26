"use client"

import { auth, signOut } from "@/auth";
import { getSelf } from "@/lib/auth-service";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { SettingsSchema } from "@/schemas";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { TrashIcon, UploadIcon, MailIcon } from "lucide-react";

const SettingsPage = () => {
    const user = useCurrentUser();

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            password: undefined,
            newPassword: undefined,
            name: user?.name || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
        }
    });

    return (
        <div className="flex flex-col w-96 pt-6 max-w-3xl gap-4">
            {/* <div>
                <h2 className="text-lg">
                    Profile Settings
                </h2>
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage alt="Your avatar" src="/placeholder.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-x-2">
                       
                        <Button size="sm" variant="outline">
                            <TrashIcon className="mr-1.5 h-4 w-4" />
                            Remove avatar
                        </Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="username">Link</Label>
                    <Input id="username" placeholder="Enter your username" />
                    <Button size="sm" variant="outline">
                            <UploadIcon className="mr-1.5 h-4 w-4" />
                            Upload new avatar
                    </Button>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter your username" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea className="min-h-[100px]" id="bio" placeholder="Enter your bio" />
                </div>
            </div>
            <div className="space-y-2">
                    <Label htmlFor="bio">Add Email Address</Label>
                    <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="flex items-end justify-center">
                <Button className="ml-auto">Save</Button>
            </div> */}
        </div>
    );
}

export default SettingsPage;