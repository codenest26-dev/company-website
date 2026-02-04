import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Award,
  Users,
  Calendar,
  CheckCircle2,
  Target,
  Eye,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  Code,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" as const
    } 
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d062b' }}>
      <Header />
      
      <div className="pt-24" style={{ position: 'relative' }}>
        {/* Hero Section */}
        <motion.header
          className="relative py-20 px-6 text-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Enhanced background effects */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl" 
              style={{ backgroundColor: 'rgba(207, 239, 9, 0.3)' }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" 
              style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)' }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" 
              style={{ backgroundColor: 'rgba(207, 239, 9, 0.15)' }}
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="container mx-auto relative z-10">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#cfef09]"
              />
              <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                Digital Excellence
              </span>
            </motion.div>

            {/* Main Title with staggered animation */}
            <motion.h1 
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6"
              variants={titleVariants}
            >
              <motion.span 
                className="inline-block text-white"
                whileHover={{ scale: 1.05, color: '#cfef09' }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.span>
              {' '}
              <motion.span 
                className="inline-block text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #cfef09, #a3e635, #cfef09, #a3e635, #cfef09)',
                  backgroundSize: '200% auto',
                  backgroundPosition: '0% center'
                }}
                animate={{ 
                  backgroundPosition: ['0% center', '100% center']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "reverse"
                }}
              >
                Us
              </motion.span>
            </motion.h1>

            {/* Company name with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative inline-block mb-6"
            >
              <p className="text-xl md:text-3xl font-bold text-white/90 max-w-3xl mx-auto">
                CodeNest Technologies LLC
              </p>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#cfef09] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Animated Image */}
            <motion.div 
              className="mt-12 rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl border-2 border-[#cfef09]/20"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(207, 239, 9, 0.5)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" 
                alt="Innovative Technology" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.header>

        {/* Company Introduction */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="relative backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 overflow-hidden group"
              style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#cfef09]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Who We <span style={{ color: '#cfef09' }}>Are</span>
              </motion.h2>
              <p className="text-lg text-white/80 leading-relaxed relative z-10">
                At CodeNest Technologies LLC, we are dedicated to transforming innovative ideas into powerful digital solutions that drive business success. Founded with a clear vision to empower businesses through cutting-edge technology, we excel in providing premium services including website development, mobile app development, social media marketing, brand designing, and SEO. Our passionate team of developers, designers, and marketers has built a solid reputation by delivering customized solutions that blend creativity, strategic insight, and technical prowess to help businesses flourish in the digital world.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mission */}
              <motion.div 
                className="relative backdrop-blur-sm rounded-3xl p-10 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden" 
                style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at top right, rgba(207, 239, 9, 0.1), transparent)' }}
                />
                
                <motion.div 
                  className="relative flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto" 
                  style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)' }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8" style={{ color: '#cfef09' }} />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed text-center">
                  Our mission is to provide exceptional digital solutions that propel business growth. By deeply understanding your unique objectives, we craft strategies and products that resonate with your audience and yield measurable results.
                </p>
                <motion.div 
                  className="mt-8 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Mission" className="w-full h-auto" />
                </motion.div>
              </motion.div>

              {/* Vision */}
              <motion.div 
                className="relative backdrop-blur-sm rounded-3xl p-10 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden" 
                style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at top right, rgba(207, 239, 9, 0.1), transparent)' }}
                />
                
                <motion.div 
                  className="relative flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto" 
                  style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)' }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-8 h-8" style={{ color: '#cfef09' }} />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Vision</h2>
                <p className="text-lg text-white/80 leading-relaxed text-center">
                  We aspire to be the trusted global partner for businesses, equipping them with advanced technology and digital strategies to realize their maximum potential.
                </p>
                <motion.div 
                  className="mt-8 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop" alt="Vision" className="w-full h-auto" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* History and Founding */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              className="relative backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 overflow-hidden group"
              style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#cfef09]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#cfef09]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-white">History and </span>
                <span style={{ color: '#cfef09' }}>Founding</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/80 leading-relaxed mb-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Established in 2020, CodeNest Technologies LLC started with a dynamic team of dedicated developers, designers, and marketers committed to supporting businesses in navigating and succeeding in the digital era. Over the years, we've grown by focusing on innovation and client success, building a reputation for excellence in the digital landscape.
              </motion.p>
              
              <motion.div 
                className="rounded-xl overflow-hidden relative z-10 border-2 border-[#cfef09]/20"
                whileHover={{ scale: 1.03, borderColor: 'rgba(207, 239, 9, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=400&fit=crop" alt="Company History Timeline" className="w-full h-auto" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Offered */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-6">
                <Code className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  What We Do
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Services </span>
                <span style={{ color: '#cfef09' }}>Offered</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">Comprehensive digital solutions tailored to your needs</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Code className="w-8 h-8" />, title: 'Website Development', desc: 'Modern, responsive websites built with cutting-edge technology' },
                { icon: <Smartphone className="w-8 h-8" />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile solutions' },
                { icon: <MessageSquare className="w-8 h-8" />, title: 'Social Media Marketing', desc: 'Strategic campaigns that drive engagement and growth' },
                { icon: <Palette className="w-8 h-8" />, title: 'Brand Designing', desc: 'Creating memorable identities that resonate' },
                { icon: <Search className="w-8 h-8" />, title: 'SEO', desc: 'Optimizing your digital presence for maximum visibility' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="relative backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cfef09]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="relative flex items-center justify-center w-14 h-14 rounded-xl mb-4" 
                    style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="relative text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="relative text-white/70 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Overview */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-6">
                <Users className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  Meet The Team
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Team </span>
                <span style={{ color: '#cfef09' }}>Overview</span>
              </h2>
            </motion.div>
            
            <motion.div
              className="backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 relative overflow-hidden group"
              style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#cfef09]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <motion.p 
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Our team at CodeNest Technologies LLC is composed of <span className="font-bold" style={{ color: '#cfef09' }}>highly skilled professionals</span> with over <span className="font-bold" style={{ color: '#cfef09' }}>10 years of combined experience</span> in the digital industry. We are a close-knit group of passionate developers, creative designers, strategic marketers, and innovative problem-solvers who thrive on turning complex challenges into elegant solutions.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Each team member brings a unique set of expertise and a shared commitment to excellence. Our developers are masters of modern frameworks and technologies, our designers understand the psychology of user experience, and our marketers know how to connect brands with their audiences in meaningful ways.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  What sets us apart is our <span className="font-semibold text-white">collaborative approach</span> and <span className="font-semibold text-white">dedication to continuous learning</span>. We stay ahead of industry trends, embrace new technologies, and constantly refine our skills to deliver cutting-edge solutions that exceed expectations. When you work with CodeNest, you're not just hiring a service provider—you're partnering with a team that genuinely cares about your success.
                </motion.p>
                
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#cfef09' }}>10+</div>
                    <p className="text-white/70">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#cfef09' }}>Expert</div>
                    <p className="text-white/70">Developers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#cfef09' }}>100%</div>
                    <p className="text-white/70">Dedicated</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-6">
                <Heart className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  What Drives Us
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Core </span>
                <span style={{ color: '#cfef09' }}>Values</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Award className="w-6 h-6" />, title: 'Expert Team', desc: 'Bringing years of experience to every project with a passion for excellence.' },
                { icon: <Target className="w-6 h-6" />, title: 'Customized Solutions', desc: 'Tailored approaches designed specifically for your unique business needs.' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation-Driven', desc: 'Staying ahead with cutting-edge solutions and emerging technologies.' },
                { icon: <Heart className="w-6 h-6" />, title: 'Client-Centric Approach', desc: 'Prioritizing your satisfaction and success in everything we create.' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Results-Oriented', desc: 'Delivering measurable outcomes that drive real business growth.' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-start gap-4 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group relative overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cfef09]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" 
                    style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-white/70">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="rounded-xl overflow-hidden border-2 border-[#cfef09]/20"
              whileHover={{ scale: 1.03, borderColor: 'rgba(207, 239, 9, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop" alt="Core Values" className="w-full h-auto" />
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-6">
                <Award className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  Our Track Record
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">By the </span>
                <span style={{ color: '#cfef09' }}>Numbers</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">Real results that speak for themselves</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <CheckCircle2 className="w-10 h-10" />, value: '100', suffix: '+', label: 'Projects Completed' },
                { icon: <Users className="w-10 h-10" />, value: '300', suffix: '+', label: 'Happy Clients' },
                { icon: <Calendar className="w-10 h-10" />, value: '10', suffix: '', label: 'Years Experience' },
                { icon: <Award className="w-10 h-10" />, value: '100', suffix: '%', label: 'Satisfaction Rate' },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cfef09]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="relative flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto" 
                    style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  <div className="relative">
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold mb-3"
                      style={{ 
                        background: 'linear-gradient(135deg, #cfef09 0%, #a3e635 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {achievement.value}{achievement.suffix}
                    </motion.div>
                    <p className="text-lg md:text-xl text-white/80 font-medium">{achievement.label}</p>
                  </div>
                  
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(207, 239, 9, 0.3), transparent)',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="relative backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 overflow-hidden group" 
              style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradients */}
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#cfef09]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#cfef09]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-white">Why Choose </span>
                <span style={{ color: '#cfef09' }}>Us</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/80 leading-relaxed text-center relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Choose CodeNest Technologies LLC for our <span className="font-semibold text-white">expert team</span>, <span className="font-semibold text-white">customized solutions</span>, <span className="font-semibold text-white">innovation-driven approach</span>, <span className="font-semibold text-white">client-centric focus</span>, and <span className="font-semibold text-white">results-oriented strategies</span> that enhance your online presence and drive measurable performance improvements.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Work With Us */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Work </span>
                <span style={{ color: '#cfef09' }}>With Us</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Award className="w-6 h-6" />, title: 'Rich Experience', desc: 'Deep knowledge across industries for high-quality solutions.' },
                { icon: <Users className="w-6 h-6" />, title: 'Great Client Support', desc: 'Committed to communication and trust-building.' },
                { icon: <Zap className="w-6 h-6" />, title: 'Complex Solutions', desc: 'Excelling in custom digital products.' },
                { icon: <Globe className="w-6 h-6" />, title: 'Unique Technologies', desc: 'Utilizing the latest tools for scalable results.' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Flexible Prices', desc: 'Transparent packages for all business sizes.' },
                { icon: <Shield className="w-6 h-6" />, title: 'Top Industry Specialists', desc: 'Dedicated experts for world-class delivery.' },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-white/70">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" alt="Collaboration" className="w-full h-auto" />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.footer
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center" style={{ background: 'linear-gradient(135deg, rgba(207, 239, 9, 0.1) 0%, rgba(13, 6, 43, 0.8) 100%)' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Innovate?</h2>
              <p className="text-xl text-white/80 mb-8">Contact us today to discuss how we can help your business thrive.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-black transition-all duration-300"
                style={{ backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)' }}
              >
                Book a Consultation
              </motion.button>
            </div>
          </div>
        </motion.footer>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
