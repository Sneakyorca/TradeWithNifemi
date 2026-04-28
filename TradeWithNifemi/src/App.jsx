import Faq from "./Components/Sections/Faq";
import Hero from "./Components/Sections/Hero";
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
    </>
  );
}

export default App;
