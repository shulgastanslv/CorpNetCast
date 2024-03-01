"use client";

import {useState} from "react";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {CopyButton} from "./copy-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface KeyCardProps {
    value: string | null;
};


export const KeyCard = ({
                            value,
                        }: KeyCardProps) => {
    const [show, setShow] = useState(false);

    return (

        <Card>
            <CardHeader>
                <CardTitle className="text-base"> Stream Key</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Input
                    value={value || ""}
                    type={show ? "text" : "password"}
                    disabled
                    placeholder="Stream key"
                />
                <CopyButton value={value || ""}/>
                <Button
                    onClick={() => setShow(!show)}
                    size="sm"
                    variant="link"
                >
                    {show ? "Hide" : "Show"}
                </Button>
            </CardContent>
        </Card>
    );
};