"use client";
import { Input } from "@/components/ui/input";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, UploadIcon, MailIcon } from "lucide-react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import { useState, useTransition, useRef, ElementRef } from "react";
import { FormError } from "@/components/form-error";

interface UserInfoCard {
};

export const UserInfoCard = ({
}: UserInfoCard) => {

  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  
  const save_handle = () => {
    if (!username || !bio) {
      setError("Username and bio cannot be empty");
      return;
    }

    startTransition(() => {
      updateUser({ bio: bio, username: username })
        .then(() => {
          toast.success("User settings was updated");
          setError("");
        })
        .catch(() => {
          toast.error("Something went wrong");
          setError("Something went wrong");
        });
    });
  }

  return (
      <Card>
        <CardContent className="flex flex-col space-y-4 p-6 w-full">
          <div className="space-y-4">
            <Label htmlFor="username">Username</Label>
            <Input  onChange={(e) => setUsername(e.target.value)}
              value={username}
              disabled={isPending} className="w-1/2" id="username" placeholder="Enter username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea onChange={(e) => setBio(e.target.value)}
              value={bio}
              disabled={isPending} className="min-h-[100px] w-1/2" id="bio" placeholder="Enter bio" />
          </div>
          <div className="flex items-end justify-center">
            <FormError message={error} />
            <Button disabled={isPending}
              onClick={save_handle}
              type="submit" size="sm" variant="default" 
              className="ml-auto">Save</Button>
          </div>
        </CardContent>
      </Card >
  );
};