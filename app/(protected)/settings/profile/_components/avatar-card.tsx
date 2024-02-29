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
import { useCurrentUser } from "@/hooks/use-current-user";
import { getUserByUsername } from "@/lib/user-service";
import { FormError } from "@/components/form-error";
interface UrlCardProps {
};

export const AvatarCard = ({
}: UrlCardProps) => {

  const user = useCurrentUser();
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const delete_avatar_handle = () => {
    startTransition(() => {
      updateUser({ imageUrl: "" })
        .then(() => {
          toast.success("User avatar was deleted");
          setError("");
        })
        .catch(() => {
          toast.error("Something went wrong");
          setError("Something went wrong");
        });
    });
  }

  const save_handle = () => {
    if (!imageUrl) {
      setError("Url cannot be empty");
      return;
    }
    startTransition(() => {
      updateUser({ imageUrl: imageUrl })
        .then(() => {
          toast.success("User avatar was updated");
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
      <CardHeader>
        <CardTitle className="text-base">Avatar URL</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 p-6">
        <div className="space-y-4 w-1/2">
          <Input id="url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            disabled={isPending}
            placeholder="Paste URL" />
        </div>
        <FormError message={error} />
        <div className="flex items-end justify-center">
          <div className="flex items-start space-x-4">
            <div className="space-x-2">
              <Button size="sm" variant="outline"
                onClick={delete_avatar_handle}>
                <TrashIcon className="mr-1.5 h-4 w-4" />
                Remove avatar
              </Button>
            </div>
          </div>
          <Button disabled={isPending}
            onClick={save_handle}
            type="submit" size="sm" variant="default"
            className="ml-auto">Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};