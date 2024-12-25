import { Montserrat } from "next/font/google";
import Image from "next/image";
import Header from "./header";
import ContactSection from "./contact";
import VisitSection from "./visit";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Contact = () => {
  return (
    <div className="w-full h-full items-center mx-auto">
      <Header />
      <ContactSection />
      <VisitSection />
    </div>
  );
};

export default Contact;
