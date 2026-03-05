import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  Image,
  Lightbulb
} from 'lucide-react';

const BrandingCreative: React.FC = () => {
  const services = [
    {
      title: 'Visual Identity',
      description: 'We create unique and memorable brand identities that communicate your values and resonate with your target audience. From logo design to complete brand guidelines, we ensure consistency across all touchpoints.',
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: 'Social Media Branding',
      description: 'Our social media branding services create consistent, eye-catching designs across all your social platforms. We develop templates, graphics, and content strategies that engage audiences and build brand recognition.',
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: 'Custom Illustrations',
      description: 'Stand out with custom illustrations that capture your brand\'s personality. We create unique graphics, icons, and illustrations that communicate your message in creative and engaging ways.',
      icon: <Image className="w-8 h-8" />,
    },
  ];

  const features = [
    'Memorable brand identity design',
    'Consistent visual language',
    'Strategic positioning',
    'Custom illustration & iconography',
    'Brand guidelines & documentation',
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
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-purple-500/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-pink-500/10"
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
              <span className="text-white">Branding & Creative</span>
            </div>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-purple-500 text-sm font-medium">Creative Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Branding & Creative Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Build a strong brand identity that sets you apart
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-400 leading-relaxed mb-8"
              >
                Your brand is more than a logo—it's how customers recognize, remember, and connect with your business. Our branding and creative services help you build a cohesive visual identity that communicates your values and resonates with your audience.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                From brand strategy and logo design to custom illustrations and social media templates, we deliver creative solutions that strengthen your brand and drive engagement.
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
                Our Creative Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#cfef09]/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#cfef09]/10 text-[#cfef09] group-hover:bg-[#cfef09] group-hover:text-[#0d062b] transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#cfef09] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Deliver
              </h2>
              <p className="text-xl text-gray-400">
                We create brands that stand out, connect emotionally, and drive business success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle className="w-6 h-6 text-[#cfef09] flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">{feature}</span>
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
              className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <Lightbulb className="w-16 h-16 text-[#cfef09] mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Brand?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's create a memorable brand identity that resonates with your audience and drives results.
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

export default BrandingCreative;
