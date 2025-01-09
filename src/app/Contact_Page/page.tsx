import ContactSection from "../components/ContactComponent/contact";
import Header from "../components/ContactComponent/header";
import VisitSection from "../components/ContactComponent/visit";

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
