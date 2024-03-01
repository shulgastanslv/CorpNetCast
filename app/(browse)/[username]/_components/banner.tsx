import Image from "next/image";

interface UserBannerProps {
    imageUrl: string;
};

export const UserBanner = ({
                               imageUrl,
                           }: UserBannerProps) => {

    return (
        <div className="relative h-40 w-full">
            <Image
                src={imageUrl}
                alt="banner"
                objectFit="cover"
                fill
                className="shadow-sm"
            />
        </div>
    );
};