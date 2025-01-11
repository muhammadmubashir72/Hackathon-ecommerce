import ContactSection from "../components/ContactComponent/contact";
import VisitSection from "../components/ContactComponent/visit";

const Contact = () => {
  return (
    <div className="w-full h-full items-center mx-auto">
      <ContactSection />
      <VisitSection />
    </div>
  );
};

export default Contact;
