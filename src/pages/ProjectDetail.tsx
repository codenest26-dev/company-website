import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Target,
  Lightbulb,
  Zap,
  Trophy,
  Smartphone,
  Monitor,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "./Portfolio";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the project in either category
  const project = [
    ...portfolioData.portfolio.custom_app_development,
    ...portfolioData.portfolio.custom_web_development,
  ].find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      // If project not found, we could redirect to portfolio or show 404
      // For now, let's just handle it gracefully in the render
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-white/60 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/portfolio"
          className="px-8 py-3 bg-[#cfef09] text-black font-bold rounded-full hover:bg-white transition-all"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0d062b", position: "relative" }}
    >
      <Header />

      <main className="pt-32 pb-20" style={{ position: "relative" }}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(207, 239, 9, 0.3)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(207, 239, 9, 0.2)" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(207, 239, 9, 0.15)" }}
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-white/60 hover:text-[#cfef09] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Projects</span>
            </button>
          </motion.div>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  {project.type === "App" ? (
                    <Smartphone className="w-4 h-4 text-[#cfef09]" />
                  ) : (
                    <Monitor className="w-4 h-4 text-[#cfef09]" />
                  )}
                  <span className="text-sm font-medium text-white/70">
                    {project.type} Case Study
                  </span>
                </div>
                <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-[#cfef09] mb-6 leading-tight">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="text-2xl md:text-3xl text-white/60 font-medium mb-8">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mt-32">
            {/* Overview & Goals */}
            <div className="space-y-24">
              {/* Overview */}
              <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#cfef09]/10">
                    <Lightbulb className="w-6 h-6 text-[#cfef09]" />
                  </div>
                  <h2 className="text-3xl font-bold">Overview</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.overview}
                </p>
              </motion.section>

              {/* Goals */}
              <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#cfef09]/10">
                    <Target className="w-6 h-6 text-[#cfef09]" />
                  </div>
                  <h2 className="text-3xl font-bold">Goals</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.goals}
                </p>
              </motion.section>
            </div>

            {/* Approach & Features */}
            <div className="space-y-24">
              {/* Our Approach */}
              <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#cfef09]/10">
                    <Zap className="w-6 h-6 text-[#cfef09]" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Approach</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.approach}
                </p>
              </motion.section>

              {/* Key Features */}
              <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#cfef09]/10">
                    <CheckCircle2 className="w-6 h-6 text-[#cfef09]" />
                  </div>
                  <h2 className="text-3xl font-bold">Key Features</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features?.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#cfef09]/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#cfef09] mt-2 shrink-0" />
                      <span className="text-white/80 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          {/* Results Section - Full Width */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32 p-8 md:p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#cfef09]">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="text-4xl font-bold">The Results</h2>
                </div>
                <p className="text-2xl text-white/80 leading-relaxed font-medium">
                  "{project.results}"
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#cfef09] mb-2">
                    100%
                  </div>
                  <div className="text-white/60 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#cfef09]/5 blur-[120px] pointer-events-none" />
          </motion.section>

          {/* Next Steps CTA */}
          <section className="mt-40 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to build something similar?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#cfef09] text-black font-extrabold text-xl rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Let's Start Your Project
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
