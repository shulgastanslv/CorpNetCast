import { LucideProps } from "lucide-react";
import React, { FC } from "react";

interface MenuItemProps{
    icon:  FC<LucideProps>;
    label : string;
}

const MenuItem = ({icon: Icon, label} : MenuItemProps) => {
    return (
        <div className="flex items-center justify-center">
            <Icon className="w-5 h-5"/>
            <span className="ml-2">{label}</span>
      </div>
    );
}
 
export default MenuItem;