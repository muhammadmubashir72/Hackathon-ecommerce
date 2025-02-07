import FreeTrials from "@/app/components/TeamComponent/freeTrials";
import MeetOurTeam from "@/app/components/TeamComponent/MeetOurTeam";
import Tailored from "@/app/components/TeamComponent/tailored";
import React from "react";

export default function Team() {
  return (
    <div className="w-full">
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}
