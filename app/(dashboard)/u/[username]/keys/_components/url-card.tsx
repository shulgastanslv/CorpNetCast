import { Input } from "@/components/ui/input";

import { CopyButton } from "./copy-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface UrlCardProps {
  value: string | null;
};

export const UrlCard = ({
  value,
}: UrlCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Server URL</CardTitle>
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