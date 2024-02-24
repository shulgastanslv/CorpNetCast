import { 
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Image from "next/image";


interface UserBannerProps{
  imageUrl: string;
};

export const UserBanner = ({
  imageUrl,
}: UserBannerProps) => {

  return (
        <img className="w-full h-96 justify-stretch shadow-lg border-l object-cover" src={imageUrl}/>
  );
};