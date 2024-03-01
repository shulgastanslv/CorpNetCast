"use client"

import {usePathname} from "next/navigation";
import {AlertCircle, Languages, Palette, User2} from "lucide-react";

import {NavItem, NavItemSkeleton} from "./nav-item";
import {useCurrentUser} from "@/hooks/use-current-user";

export const Navigation = () => {

    const pathname = usePathname();

    const user = useCurrentUser();

    const isAdmin = user?.role === "ADMIN";

    const routes = [
        {
            label: "Profile Settings",
            href: `/settings/profile`,
            icon: User2
        },
        {
            label: "Appearance",
            href: `/settings/appearance`,
            icon: Palette,
        },
        {
            label: "Languages",
            href: `/settings/languages`,
            icon: Languages,
        },
        ...(isAdmin
            ? [
                {
                    label: "Admin Panel",
                    href: `/settings/admin`,
                    icon: AlertCircle,
                },
            ]
            : []),
    ];

    if (!user?.id) {
        return (
            <ul className="space-y-2">
                {[...Array(4)].map((_, i) => (
                    <NavItemSkeleton key={i}/>
                ))}
            </ul>
        );
    }

    return (
        <ul className="space-y-2 px-2 pt-4 lg:pt-0">
            {routes.map((route) => (


                <NavItem
                    key={route.href}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                    isActive={pathname === route.href}
                />
            ))}
        </ul>
    );
};