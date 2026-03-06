import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Smartphone, 
  Search,
  Trophy,
  Target
} from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const services = [
    {
      title: 'Responsive Web Design',
      description: 'We create visually appealing responsive websites that adapt perfectly to every device. Our design process focuses on usability, speed, and modern UI/UX principles to ensure your users enjoy a seamless browsing experience.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Custom Website Development',
      description: 'Our developers build secure, scalable, and fast websites using modern technologies and frameworks. Every website is developed with performance optimization and SEO-friendly coding practices.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'Custom Icons & Illustrations',
      description: 'Unique visuals strengthen your brand identity. We design custom icons, illustrations, and graphics that make your website stand out while maintaining a consistent brand experience.',
      icon: <Trophy className="w-8 h-8" />,
    },
    {
      title: 'Website Hosting & Maintenance',
      description: 'We provide reliable website hosting solutions with high uptime, security monitoring, and technical support to ensure your website remains accessible and protected.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Website Audit & Optimization',
      description: 'Our website audit services analyze performance, SEO structure, loading speed, and technical issues to help improve search engine rankings and user experience.',
      icon: <Search className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'SEO-friendly website architecture',
    'Mobile-first responsive design',
    'Fast loading and optimized performance',
    'Secure and scalable development',
    'Conversion-focused UI/UX design',
  ];

  return (
    <div className="min-h-screen bg-[#0d062b]">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-6 overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-[#cfef09]/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-blue-500/10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-[#cfef09] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[#cfef09] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Web Design & Development</span>
            </div>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cfef09]/10 border border-[#cfef09]/30 mb-6"
              >
                <Code className="w-4 h-4 text-[#cfef09]" />
                <span className="text-[#cfef09] text-sm font-medium">Web Development</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Web Design & Development
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Professional Web Design & Development Services
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-400 leading-relaxed mb-8"
              >
                Your website is the foundation of your online presence. Our web design and web development services focus on creating modern, high-performing, and responsive websites that not only look beautiful but also convert visitors into customers.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                We design custom websites tailored to your brand, optimized for performance, user experience, and search engines. Whether you need a corporate website, landing page, or full business platform, our team delivers scalable and future-ready digital solutions.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Web Design & Development Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#cfef09]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#cfef09]/10 text-[#cfef09] group-hover:bg-[#cfef09] group-hover:text-[#0d062b] transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#cfef09] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#cfef09]/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Web Development Services
              </h2>
              <p className="text-xl text-gray-400">
                We build websites designed to increase engagement, improve search rankings, and generate leads.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle className="w-6 h-6 text-[#cfef09] flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-3xl bg-gradient-to-br from-[#cfef09]/10 to-blue-500/10 border border-[#cfef09]/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#cfef09]/5 to-transparent" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <Target className="w-16 h-16 text-[#cfef09] mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Website?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's create a powerful online presence that drives results for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#cfef09] text-[#0d062b] rounded-full font-bold hover:bg-[#cfef09]/90 transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
