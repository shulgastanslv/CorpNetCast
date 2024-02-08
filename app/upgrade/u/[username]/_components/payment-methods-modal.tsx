"use client";

import { toast } from "sonner";
import { useState, useTransition, useRef, ElementRef } from "react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { updateUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PaymentMethodsProps {
};

export const PaymentMethodsModal = ({
}: PaymentMethodsProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);

    const [isPending, startTransition] = useTransition();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg">Manage payment methods</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Some Details</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="flex justify-between">
                        <DialogClose ref={closeRef} asChild>
                            <Button type="button" variant="ghost">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            disabled={isPending}
                            type="submit"
                            variant="default"
                        >
                            Buy
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};