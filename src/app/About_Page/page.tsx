"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Header from "./header";
import WorkWithUs from "./workWithUs";
import BigCompanies from "./BigCompanies";
import MeetOurTeam from "./MeetOurTeam";
import ContentStatsVideo from "./ContentStatsVideo";
import { FcAbout } from "react-icons/fc";
import About from "./about";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
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
