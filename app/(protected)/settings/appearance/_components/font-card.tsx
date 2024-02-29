"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function FontCard() {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Fonts</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Select aria-labelledby="fontFamily">
                    <SelectTrigger>
                        <SelectValue placeholder="Font Family" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system-ui">System UI</SelectItem>
                        <SelectItem value="ui-serif">Serif</SelectItem>
                        <SelectItem value="ui-monospace">Monospace</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
}
