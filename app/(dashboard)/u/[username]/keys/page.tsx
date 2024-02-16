import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

import { UrlCard } from "./_components/url-card";
import { KeyCard } from "./_components/key-card";
import { ConnectModal } from "./_components/connect-modal";
import { ArrowLeftIcon, CalendarClockIcon, Link } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { getFollowedUsers, getFollowedUsersByDate } from '@/lib/follow-service';
import { Button } from '@/components/ui/button';

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-5">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-lg font-semibold md:text-xl">
          Keys & URLs
        </h1>
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
      <div className="mt-5">
        <ConnectModal />
      </div>
    </div>
  );
};

export default KeysPage;