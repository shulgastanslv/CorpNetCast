"use client";

import {Card, CardContent} from "@/components/ui/card";


interface CardWrapperProps {
    children: React.ReactNode;
};

export const CardWrapper = ({
                                children,
                            }: CardWrapperProps) => {
    return (
        <Card className="w-[380px] pt-12 pb-12 px-6 shadow-md">
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};