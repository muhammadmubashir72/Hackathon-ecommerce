import Header from "./header";
import ContactSection from "./contact";
import VisitSection from "./visit";


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
