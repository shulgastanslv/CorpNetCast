import {Input} from "@/components/ui/input";

import {CopyButton} from "./copy-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface UrlCardProps {
    value: string | null;
};

export const UrlCard = ({
                            value,
                        }: UrlCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Server URL</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Input
                    value={value || ""}
                    disabled
                    placeholder="Server URL"
                />
                <CopyButton
                    value={value || ""}
                />
            </CardContent>
        </Card>
    );
};