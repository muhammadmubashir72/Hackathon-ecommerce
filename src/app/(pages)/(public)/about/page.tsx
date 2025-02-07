import About from "@/app/components/AboutComponent/about";
import BigCompanies from "@/app/components/AboutComponent/BigCompanies";
import ContentStatsVideo from "@/app/components/AboutComponent/ContentStatsVideo";
import MeetOurTeam from "@/app/components/AboutComponent/MeetOurTeam";
import WorkWithUs from "@/app/components/AboutComponent/workWithUs";

export default function AboutSection() {
  return (
    <div className="w-full h-full items-center mx-auto">
      <About />
      <ContentStatsVideo />
      <MeetOurTeam />
      <BigCompanies />
      <WorkWithUs />
    </div>
  );
}
