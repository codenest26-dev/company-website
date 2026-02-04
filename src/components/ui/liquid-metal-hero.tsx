"use client";

import { LiquidMetal } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLink?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  stats?: { value: string; label: string }[];
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLink,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  stats = [],
}: LiquidMetalHeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ position: 'relative' }}>
      {/* Liquid Metal Background */}
      <LiquidMetal
        colorBack="#0d062b"
        colorTint="#cfef09"
        shape="metaballs"
        speed={0.4}
        repetition={3}
        softness={0.6}
        distortion={0.4}
        contour={0.5}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d062b]/50 via-[#0d062b]/30 to-[#0d062b]/70" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6 mb-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg leading-tight">
              We build{" "}
              <span className="gradient-text">digital</span>
              <br />
              experiences
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 font-light drop-shadow-md">
              {subtitle}
            </p>
          </motion.div>
          
          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {primaryCtaLink ? (
              <Button asChild variant="hero">
                <Link to={primaryCtaLink}>
                  {primaryCtaLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <Button variant="hero" onClick={onPrimaryCtaClick}>
                {primaryCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            
            {secondaryCtaLabel && (
              secondaryCtaLink ? (
                <Button asChild variant="outline-light" size="lg">
                  <a href={secondaryCtaLink}>{secondaryCtaLabel}</a>
                </Button>
              ) : (
                <Button variant="outline-light" size="lg" onClick={onSecondaryCtaClick}>
                  {secondaryCtaLabel}
                </Button>
              )
            )}
          </motion.div>
          
          {stats.length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2 drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="text-white/75 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
