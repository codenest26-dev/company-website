import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does CodeNest Technologies offer?",
    answer: "We specialize in web development, mobile app development, UI/UX design, branding & creative services, digital marketing, and SEO optimization. Our team delivers custom solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and scope. A typical website takes 4-8 weeks, while mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes! We provide comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance. We offer various support packages to ensure your digital products continue to perform optimally.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements, features, and complexity. We offer transparent, competitive pricing with no hidden fees. Contact us for a free consultation and customized quote.",
  },
  {
    question: "Can you work with existing websites or apps?",
    answer: "Absolutely! We can redesign, optimize, or add new features to your existing digital products. Whether you need a complete overhaul or minor improvements, our team can help enhance your current platform.",
  },
  {
    question: "Do you provide digital marketing and SEO services?",
    answer: "Yes, we offer comprehensive digital marketing services including SEO optimization, social media marketing, content strategy, PPC campaigns, and brand development to help grow your online presence and reach your target audience.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0d062b', position: 'relative' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            FAQ
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 text-center max-w-2xl mt-4">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white/[0.02] border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-all duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-all duration-200">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-accent transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-sm md:text-base text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all gradient-accent text-black hover:opacity-90 shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};
