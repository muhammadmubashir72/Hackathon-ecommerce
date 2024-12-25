"use client";
import Header from "./header";
import WorkWithUs from "./workWithUs";
import BigCompanies from "./BigCompanies";
import MeetOurTeam from "./MeetOurTeam";
import ContentStatsVideo from "./ContentStatsVideo";
import About from "./about";

export default function Contact() {
  return (
    <div className="w-full h-full items-center mx-auto">
      <Header />
      <About />
      <ContentStatsVideo />
      <MeetOurTeam />
      <BigCompanies />
      <WorkWithUs />
    </div>
  );
}
