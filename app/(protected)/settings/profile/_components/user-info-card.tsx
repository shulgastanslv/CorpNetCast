import { Input } from "@/components/ui/input";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, UploadIcon, MailIcon } from "lucide-react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

interface UserInfoCard {
};

export const UserInfoCard = ({
}: UserInfoCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">User Settings</CardTitle>
      </CardHeader>
      <CardContent className="flex">
      </CardContent>
    </Card>
  );
};