"use client";

import {toast} from "sonner";
import {useTransition} from "react";

import {Switch} from "@/components/ui/switch";
import {updateStream} from "@/actions/stream";
import {Skeleton} from "@/components/ui/skeleton";

import {Card, CardHeader, CardTitle} from "@/components/ui/card";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    label: string;
    value: boolean;
    field: FieldTypes;
};

export const ToggleCard = ({
                               label,
                               value = false,
                               field,
                           }: ToggleCardProps) => {
    const [isPending, startTransition] = useTransition();

    const onChange = () => {
        startTransition(() => {
            updateStream({[field]: !value})
                .then(() => toast.success("Chat settings updated!"))
                .catch(() => toast.error("Something went wrong"));
        });
    };

    return (

        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-base flex">
                    <div>
                        {label}
                    </div>
                    <div className="ml-5 items-center">
                        <Switch
                            disabled={isPending}
                            onCheckedChange={onChange}
                            checked={value}
                        >
                            {value ? "On" : "Off"}
                        </Switch>

                    </div>
                </CardTitle>
            </CardHeader>
        </Card>


        // <div className="rounded-xl bg-gray-100  p-6">
        //   <div className="flex items-center justify-between">
        //     <p className="font-semibold shrink-0">
        //       {label}
        //     </p>
        //     <div className="space-y-2">
        //       <Switch
        //         disabled={isPending}
        //         onCheckedChange={onChange}
        //         checked={value}
        //       >
        //         {value ? "On" : "Off"}
        //       </Switch>
        //     </div>
        //   </div>
        // </div>
    );
};

export const ToggleCardSkeleton = () => {
    return (
        <Skeleton className="rounded-xl p-10 w-full"/>
    );
};