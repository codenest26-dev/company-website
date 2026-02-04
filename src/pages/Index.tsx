import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/ui/about-us-section";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const sectionTransition = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#0d062b] overflow-x-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <main style={{ position: 'relative' }}>
        <HeroSection />
        <AboutUsSection />
        <motion.div {...sectionTransition} transition={{ duration: 0.6, delay: 0.1 }}>
          <ServicesSection />
        </motion.div>
        <motion.div {...sectionTransition} transition={{ duration: 0.6, delay: 0.2 }}>
          <TestimonialsSection />
        </motion.div>
        <motion.div {...sectionTransition} transition={{ duration: 0.6, delay: 0.3 }}>
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
