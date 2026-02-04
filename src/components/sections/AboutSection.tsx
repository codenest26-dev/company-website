import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const keyPoints = [
  "5+ years of market experience",
  "Unique technologies & modern approach",
  "100+ successful cases in portfolio",
  "Customer satisfaction is our top priority",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{backgroundColor: '#0d062b'}}>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Creating Digital 
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Here at Codenest, we design and develop websites, Web Apps, Mobile Apps and Software by blending all the ingredients you need to create a high-functioning, efficient, secure, user and SEO-friendly solution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 gradient-accent rounded-3xl opacity-10 rotate-6" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10" style={{backgroundColor: '#0d062b', opacity: 0.8}}>
                {/* Abstract Design Elements */}
                <div className="absolute top-8 left-8 w-32 h-32 border-4 border-lime-400/30 rounded-2xl" />
                <div className="absolute bottom-12 right-8 w-24 h-24 gradient-accent rounded-full opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
                    <span className="text-black font-display font-bold text-6xl">CN</span>
                  </div>
                </div>
                <div className="absolute top-20 right-12 w-16 h-16 border-2 border-lime-400/40 rounded-full" />
                <div className="absolute bottom-20 left-12 w-20 h-20 bg-lime-400/20 rounded-lg rotate-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
