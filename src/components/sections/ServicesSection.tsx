import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Megaphone, ShoppingCart, Palette, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    name: "Web Design & Development",
    description: "Modern, responsive websites & Web Apps designed to engage users and support growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    keyword: "Strategy",
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    description: "Strategies and execution to boost visibility, engagement, and customer acquisition.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    keyword: "Growth",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Custom e-commerce platforms that convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    keyword: "Commerce",
  },
  {
    icon: Palette,
    name: "Branding & Creative Services",
    description: "Identity and creative assets that express the core of your business.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    keyword: "Identity",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 gradient-dark overflow-hidden" style={{ position: 'relative' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium mb-6">
            Our Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            What We <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-lg text-purple-200/70">
            At Codenest Technologies, we empower businesses with cutting-edge digital solutions. From website and mobile app development to strategic marketing and branding, we turn ideas into impactful digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link key={service.name} to="/services">
                <motion.div
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/80 to-purple-900/60"
                    animate={{
                      opacity: isHovered ? 0.95 : 0.85,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
                  <div>
                    {/* Keyword Badge */}
                    <motion.span
                      className="inline-block px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4"
                      animate={{
                        y: isHovered ? 0 : 5,
                        opacity: isHovered ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.keyword}
                    </motion.span>

                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center mb-6"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-purple-950" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="font-display font-semibold text-2xl text-white mb-3"
                      animate={{
                        x: isHovered ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-purple-200/80 leading-relaxed"
                      animate={{
                        opacity: isHovered ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-lime-400 font-medium mt-6"
                    animate={{
                      x: isHovered ? 10 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Accent Border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 gradient-accent"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
