import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Destinations from "./components/Destinations";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-abyss text-white min-h-screen antialiased">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Destinations />
        <Process />
        <Services />
        <Testimonials />
        <Stats />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
