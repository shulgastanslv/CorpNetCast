"use client"
import {BioModal} from "@/components/stream-player/bio-modal";
import {useViewerToken} from "@/hooks/use-viewer-token";

interface AboutCardProps {
    hostName: string;
    hostIdentity: string;
    bio: string | null;
    createdAt: Date,
    followedByCount: number;
};

export const AboutCard = ({
                              hostName,
                              hostIdentity,
                              bio,
                              createdAt,
                              followedByCount,
                          }: AboutCardProps) => {
    const hostAsViewer = `host-${hostIdentity}`;

    const {
        token,
        name,
        identity,
    } = useViewerToken(hostIdentity);

    const isHost = identity === hostAsViewer;

    const followedByLabel = followedByCount === 1 ? "follower" : "followers";

    return (
        <div>
            <div className="group rounded-xl bg-background flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-xl">
                        About {hostName}
                    </div>
                    {isHost && (
                        <BioModal initialValue={bio}/>
                    )}
                </div>
                <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">
                        {followedByCount}
                    </span> {followedByLabel}
                </div>
                <p className="text-sm">
                    {bio || "This user prefers to keep an air of mystery about them."}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2 text-sm">
                        created at: {createdAt.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    );
};