"use client"

import { usePathname } from "next/navigation";
import { 
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users,
  File,
  BarChart,
  Home,
  BookOpen,
  Video,
  Box,
  Camera,
  CircleDollarSignIcon
} from "lucide-react";

import { NavItem, NavItemSkeleton } from "./nav-item";
import { currentUser, useUser } from "@/lib/auth-service";

export const Navigation = () => {

  const pathname = usePathname();

  // const user = useUser();

  // const routes = [
  //   {
  //     label: "Stream Manager",
  //     href: `/u/${user?.name}`,
  //     icon: Fullscreen,
  //   },
  //   {
  //     label: "Keys",
  //     href: `/u/${user?.name}/keys`,
  //     icon: KeyRound,
  //   },
  //   {
  //     label: "Chat",
  //     href: `/u/${user?.name}/chat`,
  //     icon: MessageSquare,
  //   },
  //   {
  //     label: "Community",
  //     href: `/u/${user?.name}/community`,
  //     icon: Users,
  //   },
  // ];

  // if (!user?.name) {
  //   return (
  //     <ul className="space-y-2">
  //       {[...Array(4)].map((_, i) => (
  //         <NavItemSkeleton key={i} />
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    // <ul className="space-y-2 px-2 pt-4 lg:pt-0">
    //  {routes.map((route) => (
    //     <NavItem
    //       key={route.href}
    //       label={route.label}
    //       icon={route.icon}
    //       href={route.href}
    //       isActive={pathname === route.href}
    //     />
    //  ))}
    // </ul>
    <div></div>
  );
};