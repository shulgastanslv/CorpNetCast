"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";

interface KeyCardProps {
  value: string | null;
};

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


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
        <CopyButton value={value || ""} />
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