import { IconNode, LucideIcon } from "lucide-react";
import React from "react";



interface FeatureBlockProps {
    icon: LucideIcon;
    title: string;
    description: string;
};

const FeatureBlock = ({ icon : Icon, title, description }: FeatureBlockProps) => (
    <div className="flex flex-col w-100 items-center space-y-2 max-w-xs m-2">
        <Icon/>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);


export default FeatureBlock;