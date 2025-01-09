import React from "react";
import Header from "../components/TeamComponent/header";
import Tailored from "../components/TeamComponent/tailored";
import MeetOurTeam from "../components/TeamComponent/MeetOurTeam";
import FreeTrials from "../components/TeamComponent/freeTrials";


export default function Team() {
 

  return (
    <div className="w-full">
      <Header />
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}
