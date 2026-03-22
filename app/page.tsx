import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TargetAudience from "@/components/TargetAudience";
import Teachers from "@/components/Teachers";
import Methodology from "@/components/Methodology";
import SmallWins from "@/components/SmallWins";
import LocationHours from "@/components/LocationHours";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <TargetAudience />
        <Teachers />
        <Methodology />
        <SmallWins />
        <LocationHours />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
