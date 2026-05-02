import Begin from "./Components/Sections/Begin";
import Contact from "./Components/Sections/Contact";
import Faq from "./Components/Sections/Faq";
import Hero from "./Components/Sections/Hero";
import Footer from "./Components/Sections/Footer";
import Navbar from "./Components/Sections/Navbar";
import Process from "./Components/Sections/Process";
import Result from "./Components/Sections/Result";
import Services from "./Components/Sections/Services";
import Testimonials from "./Components/Sections/Testimonials";
import HeroChart from "./Components/UI/HeroChart";
import Ticker from "./Components/Sections/Ticker";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Result />
      <Testimonials />
      <Faq />
      <Contact />
      <Begin />
      <Footer />
    </div>
  );
}

export default App;
