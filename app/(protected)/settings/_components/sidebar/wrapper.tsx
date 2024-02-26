"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({
  children,
}: WrapperProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <aside className={cn(
      "fixed left-0 flex flex-col w-60 h-full border-r border-border/40 bg-background shadow-md z-50",
      collapsed && "lg:w-[70px]"
    )}>
      {children}
    </aside>
  );
};