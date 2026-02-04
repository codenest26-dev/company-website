import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Smartphone, Monitor, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  type: string;
  index: number;
  isReversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  image,
  title,
  subtitle,
  description,
  type,
  index,
  isReversed = false,
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 lg:gap-16 items-center`}
    >
      {/* Visual Section - 50% */}
      <div className="w-full lg:w-1/2 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group/card"
        >
          {/* Background Glow */}
          <div
            className={`absolute inset-0 opacity-20 blur-3xl transition-opacity duration-500 group-hover/card:opacity-40 ${
              type === 'App'
                ? 'bg-gradient-to-br from-[#cfef09] to-purple-500'
                : 'bg-gradient-to-br from-blue-500 to-[#cfef09]'
            }`}
          />
          
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover/card:scale-105"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
          
          {/* Reflection Effect */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-b from-white/5 to-transparent blur-xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Text Section - 50% */}
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Type Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            {type === 'App' ? (
              <Smartphone className="w-4 h-4 text-[#cfef09]" />
            ) : (
              <Monitor className="w-4 h-4 text-[#cfef09]" />
            )}
            <span className="text-sm font-medium text-white/70">{type}</span>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#cfef09] mb-3">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl text-white/60 font-medium mb-4">{subtitle}</p>
          )}

          {/* Description */}
          <p className="text-lg text-white/70 leading-relaxed mb-8">{description}</p>

          <Link
            to={`/portfolio/${slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#cfef09] text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 group"
          >
            View Project Details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
