"use client";

import { getSelf } from "@/services/session-service";
import { AboutModal } from "./about-modal";
import { useCurrentUser } from "@/hooks/use-current-user";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  bio: string | null;
  level: string;
  startedWorking: Date;
  createdAt: Date;
  followedByCount: number;
}

export const AboutCard = ({
  hostName,
  hostIdentity,
  bio,
  level,
  startedWorking,
  createdAt,
  followedByCount,
}: AboutCardProps) => {
  
  const self = useCurrentUser();

  const formatDate = (format: Date) => {
    const yyyy = format.getFullYear();
    const mm = String(format.getMonth() + 1).padStart(2, "0");
    const dd = String(format.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const isHost = hostIdentity === self?.id!;

  const followedByLabel =
    followedByCount === 1 ? "отслеживаемый" : "отслеживающих";

  return (
    <div>
      <div className="group rounded-xl bg-background flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-xl">
            Подробная информация
          </div>
          {isHost && <AboutModal initialValue={bio} />}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followedByCount}</span>{" "}
          {followedByLabel}
        </div>
        <h2 className="text-base">Биография: {bio || "Никакой информации"}</h2>
        <h2 className="text-base">Позиция: {level || "Junior"}</h2>
        <h2 className="text-base">Дата начала работы: {formatDate(startedWorking)}</h2>
      </div>
    </div>
  );
};
