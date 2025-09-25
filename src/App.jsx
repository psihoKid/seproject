import Header from "./Elements/Header";
import Hero from "./Elements/Hero";
import Advantages from "./Elements/Advantages";
import AboutUs from "./Elements/AboutUs";
import Achievement from "./Elements/Achivment";
import Project from "./Elements/Projects";
import Licenses from "./Elements/Licenses";
import Footer from "./Elements/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">

      <Header />


      <Hero />

      <Advantages />
      <AboutUs />
      <Achievement />
      <Project />
      <Licenses />
      <Footer />
    </div>
  );
}
