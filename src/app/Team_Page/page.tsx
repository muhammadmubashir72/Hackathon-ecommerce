
import Header from "./header";
import FreeTrials from "./freeTrials";
import MeetOurTeam from "./MeetOurTeam";
import Tailored from "./tailored";
import React from "react";


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
