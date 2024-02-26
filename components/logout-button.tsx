import { Button } from "./ui/button";
import { signOut } from "@/auth";
import { Clapperboard, BlocksIcon, ClapperboardIcon, Code2Icon, History, NewspaperIcon, SettingsIcon, User, User2, User2Icon, Users2, Blocks, ArrowLeft } from "lucide-react";
import MenuItem from "./menu-item";
import { LucideProps } from "lucide-react";
import React, { FC } from "react";
interface LogOutButtonProps {
    children: React.ReactNode;
};

const LogOutButton = ({children} : LogOutButtonProps) => {
    return (
    
    <div>
      <form action={async () => {
        "use server";

        await signOut();
      }}>
         <div className="flex items-center justify-center">
            <ArrowLeft className="w-5 h-5"/>
            <Button size="menu" variant="menu_item">
              {children}
            </Button>
        </div>
      </form>
    </div>
    );
}
 
export default LogOutButton;