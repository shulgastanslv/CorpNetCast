import Image from "next/image";

interface UserBannerProps {
    imageUrl: string;
    username?: string;
};

export const UserBanner = ({
    imageUrl,
    username
}: UserBannerProps) => {

    return (
        <div>
            {imageUrl ? (
                <div className="relative h-40 w-full">
                    <Image
                        src={imageUrl}
                        alt="banner"
                        objectFit="cover"
                        layout="fill"
                        className="shadow-sm"
                    />
                </div>
            ) : (
                <div className="flex h-40 w-full items-center justify-center bg-muted">
                </div>
            )}
        </div>
    );
};