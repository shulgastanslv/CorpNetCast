"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function LanguagesCard() {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Select aria-labelledby="languages">
                    <SelectTrigger>
                        <SelectValue placeholder="Languages" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system-ui">Russian</SelectItem>
                        <SelectItem value="ui-serif">English</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
}
