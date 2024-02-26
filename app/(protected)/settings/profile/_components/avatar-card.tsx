import { Input } from "@/components/ui/input";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, UploadIcon, MailIcon } from "lucide-react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

interface UrlCardProps {
};

export const AvatarCard = ({
}: UrlCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Avatar Settings</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="Your avatar" src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-x-2">
              <Button size="sm" variant="outline">
                <TrashIcon className="mr-1.5 h-4 w-4" />
                Remove avatar
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Link</Label>
            <Input id="username" placeholder="Paste your link" />
            <Button size="sm" variant="outline">
              <UploadIcon className="mr-1.5 h-4 w-4" />
              Upload new avatar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};