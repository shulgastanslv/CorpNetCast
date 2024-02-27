"use client";

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";


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