"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function SpacingCard() {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Spacing</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Select aria-labelledby="spacing">
                    <SelectTrigger>
                        <SelectValue placeholder="Spacing" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
}
