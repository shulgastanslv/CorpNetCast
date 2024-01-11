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

interface JoltsModalProps {
};

export const JoltsModal = ({
}: JoltsModalProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);

    const [isPending, startTransition] = useTransition();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-black text-white px-8 py-3 rounded-full focus:outline-none hover:bg-gray-800 transition duration-300">Get Jolts</button>
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