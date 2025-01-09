import About from "../components/AboutComponent/about";
import BigCompanies from "../components/AboutComponent/BigCompanies";
import ContentStatsVideo from "../components/AboutComponent/ContentStatsVideo";
import Header from "../components/AboutComponent/header";
import MeetOurTeam from "../components/AboutComponent/MeetOurTeam";
import WorkWithUs from "../components/AboutComponent/workWithUs";

export default function AboutSection() {
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
