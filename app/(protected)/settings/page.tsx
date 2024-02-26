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
import { Select, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { TrashIcon, UploadIcon, MailIcon } from "lucide-react";

const SettingsPage = () => {
    
    return (
       <div>Settings Main</div>
    );
}

export default SettingsPage;