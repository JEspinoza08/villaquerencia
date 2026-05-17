import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Lots } from "@/components/site/Lots";
import { Simulator } from "@/components/site/Simulator";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Lots />
      <Simulator />
      <Gallery />
      <Location />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <WhatsappFab />
    </main>
  );
}
