
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Blog />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
