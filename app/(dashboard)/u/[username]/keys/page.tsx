import {getSelf} from "@/lib/auth-service";
import {getStreamByUserId} from "@/lib/stream-service";

import {UrlCard} from "./_components/url-card";
import {KeyCard} from "./_components/key-card";
import {ConnectModal} from "./_components/connect-modal";

const KeysPage = async () => {
    const self = await getSelf();
    const stream = await getStreamByUserId(self?.id!);

    if (!stream) {
        throw new Error("Stream not found");
    }

    return (
        <div className="p-6">
            <div className="space-y-4">
                <UrlCard value={stream.serverUrl}/>
                <KeyCard value={stream.streamKey}/>
            </div>
            <div className="mt-5">
                <ConnectModal/>
            </div>
        </div>
    );
};

export default KeysPage;