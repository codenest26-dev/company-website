import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Users,
  BarChart,
  Search,
  Share2
} from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'We manage and grow your presence across platforms like Instagram, Facebook, LinkedIn, and TikTok. Our social media marketing strategies increase engagement, followers, and brand loyalty.',
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: 'Marketing Campaigns',
      description: 'Our team designs targeted digital marketing campaigns using audience research, competitor analysis, and conversion optimization to deliver the best ROI.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'Marketing Management',
      description: 'We provide complete digital marketing management, handling everything from strategy development to performance monitoring so you can focus on running your business.',
      icon: <BarChart className="w-8 h-8" />,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Our SEO services help your website rank higher on search engines like Google. We optimize your site with keyword research, on-page SEO, technical SEO, and content marketing strategies to improve organic traffic.',
      icon: <Search className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Increased online visibility',
    'Higher website traffic and leads',
    'Improved brand awareness',
    'Data-driven campaign optimization',
    'Long-term organic growth through SEO',
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
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-pink-500/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-orange-500/10"
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
              <span className="text-white">Digital Marketing</span>
            </div>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6"
              >
                <Megaphone className="w-4 h-4 text-pink-500" />
                <span className="text-pink-500 text-sm font-medium">Digital Marketing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Digital Marketing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Digital Marketing Services That Drive Growth
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-400 leading-relaxed mb-8"
              >
                In today's competitive online landscape, businesses need more than just a website. Our digital marketing services help brands increase visibility, attract targeted audiences, and generate measurable results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                As a full-service digital marketing agency, we combine data-driven strategies with creative campaigns to maximize brand awareness and conversions.
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
                Our Digital Marketing Solutions
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

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits of Our Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-400">
                Our goal is to help your business reach the right audience at the right time.
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
              className="relative p-12 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <TrendingUp className="w-16 h-16 text-[#cfef09] mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's create a digital marketing strategy that delivers real, measurable results.
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
                    View Case Studies
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

export default DigitalMarketing;
