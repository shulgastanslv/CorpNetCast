"use client";

import { VerifiedMark } from "@/components/verified-mark";

import { JoltsModal } from "./jolts-modal";

interface JoltsCardProps {
    isVisible: boolean;
};

export const JoltsCard = ({
  isVisible,
}: JoltsCardProps) => {

  return (
        <div>
            {isVisible && (
              <JoltsModal initialValue="initialValue" />
            )}
        </div>
  );
};