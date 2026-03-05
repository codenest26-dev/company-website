import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  Globe,
  Megaphone,
  ShoppingCart,
  Palette,
  Award,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Search,
  MessageSquare,
  TrendingUp,
  Target,
  Lightbulb,
  Phone,
  Mail,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services: React.FC = () => {
  const services = [
    {
      id: 'web-development',
      icon: <Code className="w-12 h-12" />,
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites that captivate your audience and drive conversions with cutting-edge technology.',
      features: [
        'Web design',
        'Web development',
        'Custom icons & illustrations',
        'Hosting',
        'Website audit',
      ],
      link: '/services/web-development',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      id: 'digital-marketing',
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Amplify your brand reach and engagement with strategic marketing campaigns that deliver measurable results.',
      features: [
        'Social media marketing',
        'Marketing campaigns',
        'Marketing management',
        'SEO',
      ],
      link: '/services/digital-marketing',
      gradient: 'from-pink-500/20 to-orange-500/20',
    },
    {
      id: 'mobile-apps',
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce',
      description: 'Build powerful online stores that provide seamless shopping experiences and maximize your revenue potential.',
      features: [
        'E-Commerce website design',
        'WooCommerce',
        'Content management',
        'Hosting',
      ],
      link: '/services/ecommerce',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'ui-ux-design',
      icon: <Palette className="w-12 h-12" />,
      title: 'Branding & Creative Services',
      description: 'Craft memorable brand identities that resonate with your audience and set you apart from the competition.',
      features: [
        'Visual identity',
        'Branding for social media',
        'Custom illustrations',
      ],
      link: '/services/branding',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  const whyWorkWithUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Experience',
      description: 'With years of hands-on industry experience, we\'ve helped businesses of all sizes build and scale their digital presence with confidence.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'We listen, adapt, and deliver — putting your goals and customer experience at the heart of everything we create.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Unique Technologies',
      description: 'We use the latest platforms, tools, and frameworks to deliver high-performing, innovative solutions tailored to your business needs.',
    },
  ];

  const workingProcess = [
    {
      number: '1',
      title: 'Problem Identification',
      description: 'We begin by understanding your business, audience, and the challenges you\'re facing. This step allows us to define clear goals and set the right direction before we design or code.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: '2',
      title: 'Investigation',
      description: 'Through market research, competitor analysis, and stakeholder interviews, we gather valuable insights to guide the solution and identify opportunities that align with your business objectives.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      number: '3',
      title: 'Strategy Development',
      description: 'Based on our findings, we craft a custom strategy — blending UX, technology, and branding to build a solid foundation for your digital solution.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      number: '4',
      title: 'Results Evaluation',
      description: 'Before launch, we rigorously test the product for performance, usability, and functionality. Post-launch, we analyze key metrics to measure success and identify areas for improvement.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: '5',
      title: 'Support',
      description: 'Our work doesn\'t end after delivery. We offer ongoing maintenance, updates, and support to ensure your website or app continues to perform and evolve with your business.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d062b', position: 'relative' }}>
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
                Our Services
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white">Digital </span>
              <span style={{ color: '#cfef09' }}>Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              Unique technologies & modern approach
            </motion.p>
          </div>
        </motion.header>

        {/* Services Grid */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden scroll-mt-24"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="relative text-white/70 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <ul className="relative space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#cfef09' }} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link to={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black transition-all duration-300"
                      style={{ backgroundColor: '#cfef09' }}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="relative backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 text-center overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, rgba(207, 239, 9, 0.15) 0%, rgba(13, 6, 43, 0.9) 100%)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(207, 239, 9, 0.3) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />

              <div className="relative z-10">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  We're looking forward to start a <span style={{ color: '#cfef09' }}>new project</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-white/80 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Let's take your business to the next level!
                </motion.p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(207, 239, 9, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-black transition-all duration-300"
                    style={{ backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)' }}
                  >
                    Request a Call-Back
                    <Phone className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
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
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#cfef09]/30 bg-[#cfef09]/10 backdrop-blur-sm mb-6">
                <Award className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  Our Advantages
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Work </span>
                <span style={{ color: '#cfef09' }}>With Us?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyWorkWithUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cfef09]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="relative text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="relative text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Working Process */}
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
                <TrendingUp className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] font-medium text-sm uppercase tracking-wider">
                  How We Work
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our Working </span>
                <span style={{ color: '#cfef09' }}>Process</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                We follow a clear, proven process that ensures quality, consistency, and results — from the first idea to ongoing support.
              </p>
            </motion.div>

            <div className="space-y-8">
              {workingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:border-[#cfef09]/50 group overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cfef09]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-6">
                    {/* Number Badge */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl"
                      style={{ backgroundColor: 'rgba(207, 239, 9, 0.2)', color: '#cfef09' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(207, 239, 9, 0.15)', color: '#cfef09' }}>
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="relative backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 overflow-hidden group"
              style={{ backgroundColor: 'rgba(13, 6, 43, 0.5)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradients */}
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#cfef09]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#cfef09]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 text-center">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">Questions? </span>
                  <span style={{ color: '#cfef09' }}>Reach Us</span>
                </motion.h2>

                <motion.p
                  className="text-xl text-white/80 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Monday – Friday from 9 am to 6 pm
                </motion.p>

                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="tel:+17862196512" className="flex items-center gap-3 text-xl text-white hover:text-[#cfef09] transition-colors">
                    <Phone className="w-6 h-6" style={{ color: '#cfef09' }} />
                    +1 (786) 219-6512
                  </a>
                  <span className="hidden md:block text-white/30">|</span>
                  <a href="mailto:info@codenesttechllc.com" className="flex items-center gap-3 text-xl text-white hover:text-[#cfef09] transition-colors">
                    <Mail className="w-6 h-6" style={{ color: '#cfef09' }} />
                    Email Us
                  </a>
                </motion.div>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(207, 239, 9, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-black transition-all duration-300"
                    style={{ backgroundColor: '#cfef09', boxShadow: '0 10px 15px -3px rgba(207, 239, 9, 0.3)' }}
                  >
                    Request for Quote
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
