"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Rocket,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Layers,
  Terminal,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      secondaryIcon: <Terminal className="h-4 w-4" />,
      title: "Web Development",
      description:
        "Build modern, responsive web applications with cutting-edge technologies. We deliver scalable solutions that drive business growth.",
      position: "left",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      secondaryIcon: <Layers className="h-4 w-4" />,
      title: "Mobile Apps",
      description:
        "Create powerful mobile experiences for iOS and Android. Our apps combine intuitive design with robust functionality.",
      position: "left",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      secondaryIcon: <Zap className="h-4 w-4" />,
      title: "Digital Strategy",
      description:
        "Transform your digital presence with strategic planning. We align technology with your business goals for maximum impact.",
      position: "left",
    },
    {
      icon: <Database className="h-6 w-6" />,
      secondaryIcon: <TrendingUp className="h-4 w-4" />,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud infrastructure for scalability and performance. Secure, reliable, and cost-effective solutions.",
      position: "right",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      secondaryIcon: <CheckCircle className="h-4 w-4" />,
      title: "Security",
      description:
        "Protect your digital assets with enterprise-grade security. We implement best practices to keep your data safe.",
      position: "right",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      secondaryIcon: <Star className="h-4 w-4" />,
      title: "Innovation",
      description:
        "Stay ahead with emerging technologies. From AI to automation, we help you embrace the future of technology.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award className="h-6 w-6" />, value: 100, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="h-6 w-6" />, value: 300, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar className="h-6 w-6" />, value: 10, label: "Years Experience", suffix: "" },
    { icon: <CheckCircle className="h-6 w-6" />, value: 100, label: "Satisfaction Rate", suffix: "%" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{backgroundColor: '#0d062b', position: 'relative'}}
    >
      {/* Decorative background elements */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        style={{background: 'rgba(207, 239, 9, 0.1)'}} className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        style={{background: 'rgba(207, 239, 9, 0.1)'}} className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        style={{background: 'rgba(207, 239, 9, 0.05)'}} className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full blur-2xl"
      />
      <motion.div
        style={{ y: y2 }}
        style={{background: 'rgba(207, 239, 9, 0.05)'}} className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-4" style={{color: '#cfef09'}}>
            <Sparkles className="h-4 w-4" />
            DISCOVER OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(to right, #cfef09, #cfef09)'}} />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We design and develop digital experiences that help businesses grow with modern, secure, and impactful
          technology. Our approach combines creativity with strategic engineering to craft solutions that perform and
          delight.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 order-2 lg:order-1"
          >
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.1}
                  direction="left"
                />
              ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                  alt="CodeNest Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d062b] via-[#0d062b]/50 to-transparent opacity-60 pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 z-10"
                >
                  <Link 
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-black px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105" 
                    style={{backgroundColor: '#cfef09'}}
                  >
                    Our Portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)'}}
              >
                <Code className="h-8 w-8 text-black" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                style={{backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)'}}
              >
                <Terminal className="h-6 w-6 text-black" />
              </motion.div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-3 w-6 h-6 rounded-full blur-sm" style={{backgroundColor: 'rgba(207, 239, 9, 0.3)'}} />
              <div className="absolute bottom-1/3 -right-3 w-4 h-4 rounded-full blur-sm" style={{backgroundColor: 'rgba(207, 239, 9, 0.4)'}} />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 order-3"
          >
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.1}
                  direction="right"
                />
              ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center backdrop-blur-sm rounded-3xl p-10 border border-white/10"
          style={{background: 'linear-gradient(135deg, rgba(13, 6, 43, 0.5) 0%, rgba(13, 6, 43, 0.7) 100%)'}}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your digital presence?
            </h3>
            <p className="text-white/70 mb-8">
              Let's build something amazing together.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-shadow"
            style={{backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)'}}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(207, 239, 9, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(207, 239, 9, 0.3)'}
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants?: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, delay, direction }: ServiceItemProps) {
  return (
    <Link to="/about" className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        whileHover={{ scale: 1.02, x: direction === "left" ? 5 : -5 }}
        className="group p-6 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:shadow-lg cursor-pointer"
      style={{
        backgroundColor: 'rgba(13, 6, 43, 0.3)',
        '--hover-border': '#cfef09',
        '--hover-shadow': 'rgba(207, 239, 9, 0.1)'
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(207, 239, 9, 0.5)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(207, 239, 9, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="relative p-3 rounded-xl transition-colors duration-300" 
          style={{
            backgroundColor: 'rgba(207, 239, 9, 0.1)',
            color: '#cfef09'
          }}
          onMouseEnter={(e) => {
            if (e.currentTarget.parentElement?.parentElement?.classList.contains('group')) {
              e.currentTarget.style.backgroundColor = '#cfef09';
              e.currentTarget.style.color = '#000';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(207, 239, 9, 0.1)';
            e.currentTarget.style.color = '#cfef09';
          }}
        >
          {icon}
          <span className="absolute -bottom-1 -right-1 p-1 rounded-lg text-white/70 transition-colors duration-300" 
            style={{backgroundColor: '#0d062b'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#cfef09';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            {secondaryIcon}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 mt-2 group-hover-title" 
          onMouseEnter={(e) => {
            if (e.currentTarget.parentElement?.parentElement?.classList.contains('group')) {
              e.currentTarget.style.color = '#cfef09';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#fff';
          }}
        >
          {title}
        </h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed mb-4 pl-[60px]">
        {description}
      </p>
      <div className="pl-[60px]">
        <span className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{color: '#cfef09'}}>
          Learn more <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.div>
    </Link>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center p-6 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 group"
      style={{backgroundColor: 'rgba(13, 6, 43, 0.3)'}}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(207, 239, 9, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-colors duration-300"
        style={{
          backgroundColor: 'rgba(207, 239, 9, 0.1)',
          color: '#cfef09'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#cfef09';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(207, 239, 9, 0.1)';
          e.currentTarget.style.color = '#cfef09';
        }}
      >
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </div>
      <p className="text-white/70 text-sm">{label}</p>
      <div className="w-12 h-1 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #cfef09, #cfef09)'}} />
    </motion.div>
  )
}
