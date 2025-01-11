import React from "react";
import Tailored from "../components/TeamComponent/tailored";
import MeetOurTeam from "../components/TeamComponent/MeetOurTeam";
import FreeTrials from "../components/TeamComponent/freeTrials";

export default function Team() {
  return (
    <div className="w-full">
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}
