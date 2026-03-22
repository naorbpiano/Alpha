import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TargetAudience from "@/components/TargetAudience";
import Teachers from "@/components/Teachers";
import Methodology from "@/components/Methodology";
import SmallWins from "@/components/SmallWins";
import LocationHours from "@/components/LocationHours";
import Lectures from "@/components/Lectures";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <TargetAudience />
        </ScrollReveal>
        <ScrollReveal>
          <Teachers />
        </ScrollReveal>
        <ScrollReveal>
          <Methodology />
        </ScrollReveal>
        <ScrollReveal>
          <SmallWins />
        </ScrollReveal>
        <ScrollReveal>
          <LocationHours />
        </ScrollReveal>
        <ScrollReveal>
          <Lectures />
        </ScrollReveal>
        <ScrollReveal>
          <Gallery />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
