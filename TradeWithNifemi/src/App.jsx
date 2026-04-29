import Begin from "./Components/Sections/begin";
import Contact from "./Components/Sections/Contact";
import Faq from "./Components/Sections/Faq";
import Hero from "./Components/Sections/Hero";
import Footer from "./Components/Sections/Footer";
import Navbar from "./Components/Sections/Navbar";
import Process from "./Components/Sections/Process";
import Result from "./Components/Sections/Result";
import Services from "./Components/Sections/Services";
import Testimonials from "./Components/Sections/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Result />
      <Testimonials />
      <Faq />
      <Contact />
      <Begin />
      <Footer />
    </>
  );
}

export default App;
