import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/sections/ProjectCard';

export const portfolioData = {
  portfolio: {
    custom_app_development: [
      {
        slug: "my-socials",
        title: "My Socials",
        image: "/Codenest Pictures/Publish-_-Manage-post.png",
        description: "My Socials is an all-in-one social media management platform designed to simplify content planning, scheduling, and analytics.",
        overview: "My Socials is an all-in-one social media management platform designed to simplify content planning, scheduling, and analytics. The app empowers businesses, creators, and agencies to manage multiple social platforms from a single dashboard.",
        goals: "Provide a centralized solution for managing multiple social media accounts.\n\nHelp users plan, schedule, and publish content seamlessly.\n\nOffer in-depth analytics to track growth, engagement, and performance.\n\nSimplify collaboration for teams and agencies.",
        approach: "We built My Socials with a focus on usability, automation, and performance insights. From intuitive scheduling tools to real-time analytics dashboards, every feature was crafted to save time and maximize impact. Integration with major platforms ensures users can manage their entire social presence without hassle.",
        features: [
          "Multi-platform scheduling (Instagram, Facebook, Twitter, LinkedIn, TikTok)",
          "Drag-and-drop content calendar for easy planning",
          "Automated posting with optimal timing suggestions",
          "Analytics dashboards with engagement and growth insights",
          "Team collaboration tools for agencies and businesses",
          "Custom branding options for client reporting"
        ],
        results: "My Socials has streamlined the way users manage their online presence, saving hours of manual work while boosting engagement and visibility. The platform has become a reliable tool for creators, agencies, and businesses looking to grow their digital footprint effectively.",
        type: "App"
      },
      {
        slug: "dalfa-pak",
        title: "DALFA PAK",
        image: "/Codenest Pictures/New-Arrivals.png",
        description: "Dalfa Pak App is a comprehensive platform designed to promote Dairy, Agriculture, Livestock, Fisheries, and Poultry while leveraging advanced technology.",
        overview: "Dalfa Pak App is a comprehensive platform designed to promote Dairy, Agriculture, Livestock, Fisheries, Poultry, and the utilization of advanced technology to strengthen Pakistan’s economy. The app serves as a hub for farmers, businesses, and stakeholders, enabling access to resources, updates, and tools that enhance productivity and sustainability.",
        goals: "Provide a digital platform to connect agricultural and livestock communities.\n\nPromote modern technology and techniques for better yield and efficiency.\n\nEmpower farmers and industry stakeholders with knowledge and resources.\n\nSupport Pakistan’s economic growth through innovation in agriculture and allied sectors.",
        approach: "We developed Dalfa Pak App with an easy-to-use interface and accessible features that cater to both experts and grassroots communities. By integrating multilingual support, resource libraries, and sector-specific tools, the app ensures inclusivity and practical usability.",
        features: [
          "Sector-specific updates: Dairy, Agriculture, Livestock, Fisheries, and Poultry",
          "Knowledge hub with articles, guides, and tutorials",
          "Smart notifications for industry news, events, and opportunities",
          "Technology promotion: insights on modern tools and methods",
          "User-friendly design with offline accessibility for rural areas"
        ],
        results: "Dalfa Pak App bridges the gap between technology and agriculture in Pakistan. It has become a trusted platform for stakeholders across multiple sectors, contributing to greater awareness, adoption of advanced practices, and sustainable growth in the national economy.",
        type: "App"
      },
      {
        slug: "burnout",
        title: "Burnout",
        subtitle: "Fitness & Workout Mobile Application",
        image: "/Codenest Pictures/mobile2.2.jpg",
        description: "Designed the UI/UX for Burnout, a dynamic fitness and workout mobile application with a modern dark-mode interface.",
        overview: "Burnout is a next-generation fitness and workout mobile application built for individuals who want to stay active, motivated, and consistent with their health goals. The app combines personalized training, progress tracking, and engaging features to create a truly immersive fitness experience.",
        goals: "Design an easy-to-use app for workouts and fitness tracking.\n\nPersonalize workout plans based on user goals and activity level.\n\nIncorporate progress tracking to boost accountability.\n\nBuild an engaging platform that keeps users motivated daily.",
        approach: "We collaborated with fitness experts and trainers to design user-centric workflows. From wireframes to final UI/UX, the focus was on clarity, simplicity, and motivation. Our development team integrated advanced workout libraries, video tutorials, and tracking mechanisms while ensuring smooth performance on both iOS and Android.",
        features: [
          "Personalized workout plans tailored to user goals",
          "Video-guided exercises with clear instructions",
          "Real-time progress tracking (calories burned, workouts completed)",
          "Goal-setting & reminders for better consistency",
          "Gamification features (streaks, achievements, leaderboards)",
          "Seamless integration with wearables and fitness trackers"
        ],
        results: "The Burnout app empowers users to achieve their fitness goals with a personalized and motivating digital experience. With its clean design, robust features, and seamless performance, Burnout has positioned itself as a trusted companion for anyone serious about health and wellness.",
        type: "App"
      },
      {
        slug: "my-cart",
        title: "My Cart",
        subtitle: "Grocery E-commerce Android Application",
        image: "/Codenest Pictures/mobile1.1.jpg",
        description: "Conceptualized and designed the My Cart Android application, an intuitive mobile solution for grocery and general merchandise shopping.",
        overview: "My Cart is a modern grocery e-commerce Android application designed to simplify shopping for everyday essentials. With a focus on convenience, speed, and user experience, the app allows users to browse, order, and receive groceries right at their doorstep.",
        goals: "Develop a user-friendly grocery shopping app.\n\nEnable easy product search, categorization, and filtering.\n\nProvide a smooth and secure checkout process.\n\nIntegrate delivery tracking for transparency and trust.\n\nBuild a scalable platform for vendors and customers.",
        approach: "We designed My Cart with mobile-first usability, ensuring that busy shoppers could quickly find products, add them to their cart, and check out without hassle. A clean and intuitive UI was paired with robust e-commerce functionality. For vendors, we integrated easy product management and inventory updates. Secure payment gateways and order tracking were added to ensure reliability.",
        features: [
          "Intuitive product browsing and advanced search",
          "Categorized product listings with filters",
          "Smart cart system with quick add/remove options",
          "Multiple secure payment options",
          "Real-time order and delivery tracking",
          "Push notifications for deals, offers, and order updates"
        ],
        results: "My Cart transformed grocery shopping into a fast, seamless, and enjoyable experience. By combining modern design with powerful features, the app helped vendors expand their digital reach while providing customers with the convenience of reliable doorstep delivery.",
        type: "App"
      }
    ],
    custom_web_development: [
      {
        slug: "axapparel",
        title: "AxApparel",
        image: "/Codenest Pictures/axapparel_2_60-scaled.png",
        description: "AxApparel is a modern fashion and lifestyle brand that wanted a sleek, functional, and conversion-focused online presence.",
        overview: "AxApparel is a modern fashion and lifestyle brand that wanted a sleek, functional, and conversion-focused online presence. They approached us to design and develop a website that reflects their brand identity while making shopping smooth and engaging.",
        goals: "Build a mobile-friendly eCommerce website.\n\nHighlight product collections with a clean, stylish design.\n\nCreate an easy shopping flow to improve conversions.\n\nStrengthen brand presence with custom visuals and graphics.",
        approach: "We worked closely with AxApparel’s team to understand their audience and brand positioning. From wireframes to polished layouts, every design choice was made to emphasize usability and brand appeal. We integrated an eCommerce system with secure checkout, product filtering, and easy inventory management.",
        features: [
          "Modern UI/UX tailored for fashion retail",
          "Fully responsive design for mobile & desktop",
          "E-commerce functionality with product filters, cart, and secure checkout",
          "Custom graphics and branded visuals",
          "Optimized speed & SEO-friendly structure"
        ],
        results: "The final website gave AxApparel a strong digital presence that not only showcases their products beautifully but also drives measurable results in traffic and sales. The sleek design paired with a seamless user experience has positioned them as a standout in their niche.",
        type: "Website"
      },
      {
        slug: "david-moses-uk-ltd",
        title: "David Moses UK Ltd",
        image: "/Codenest Pictures/davidmosesukltd_60-scaled.png",
        description: "A professional digital presence for a UK-based eCommerce market analyzer reflecting expertise and credibility.",
        overview: "David Moses is a UK-based eCommerce market analyzer helping businesses identify growth opportunities, optimize performance, and scale effectively. He approached us to create a professional digital presence that reflects his expertise while making his services approachable and credible for online retailers.",
        goals: "Build a service-focused, mobile-friendly website.\n\nHighlight market analysis, strategy, and consulting services.\n\nCreate a structured flow to guide potential clients toward inquiries.\n\nStrengthen credibility with custom visuals and a modern brand aesthetic.",
        approach: "We focused on a clean, professional design that emphasizes data and strategic value. By using custom infographics and a structured service breakdown, we ensured that complex analysis services are presented in a digestible and authoritative manner.",
        features: [
          "Clean, modern UI/UX for professional consulting",
          "Fully responsive design for desktop, tablet, and mobile",
          "Service detail pages with clear CTAs for inquiries",
          "Custom infographics and branded visuals to simplify data",
          "SEO-optimized structure for UK market visibility"
        ],
        results: "The final platform gave David Moses a strong professional presence, positioning him as a trusted market analyzer in the UK eCommerce space. The website has enhanced client engagement and improved lead generation.",
        type: "Website"
      },
      {
        slug: "fbc",
        title: "FBC",
        image: "/Codenest Pictures/home-page_1-scaled.jpg",
        description: "A secure, scalable, and decentralized review and reputation platform built outside mainstream tech monopolies.",
        overview: "FBC is a decentralized review platform designed to enable free speech and public accountability. Unlike traditional platforms, it addresses issues like censorship and bias by allowing users to review not just businesses, but also public officials, all while safeguarding user privacy.",
        goals: "Safeguard user anonymity while broadening the scope of public accountability.\n\nReward truth-telling through tangible incentives.\n\nProvide transparent, decentralized moderation to prevent bias.\n\nSupport anonymous cryptocurrency payments for security and privacy.",
        approach: "We utilized an iterative, user-centered design approach, conducting extensive research with privacy advocates and business owners. The architecture integrates a powerful geosearch engine with Leaflet maps and a custom Monero RPC implementation for completely private transactions.",
        features: [
          "Location-Based Search with Map Interface",
          "Dynamic 'Christmas Tree' filters and tags",
          "Tiered Profile System (Users, Businesses, Officials)",
          "Crypto-First Monetization via Monero integration",
          "Document-backed review submissions for accountability"
        ],
        results: "Delivered a secure, scalable, and crypto-integrated platform within six months. It empowers communities to hold both businesses and people in power accountable while ensuring absolute user privacy.",
        type: "Website"
      },
      {
        slug: "eazyos",
        title: "Eazyos",
        image: "/Codenest Pictures/eazyos_60-scaled.png",
        description: "A tech-driven eCommerce platform for gadgets and home appliances designed for high conversion.",
        overview: "Eazyos is a modern electronics retailer offering everything from gadgets to home appliances. They wanted a powerful online store that reflects their tech-driven identity while making the shopping experience seamless for customers.",
        goals: "Build a fully functional, mobile-friendly eCommerce website.\n\nOrganize a large range of electronics into easy-to-browse categories.\n\nProvide a fast, secure, and intuitive shopping experience.\n\nStrengthen brand presence with modern visuals.",
        approach: "We designed a clean, tech-inspired interface with intuitive navigation and powerful product filters to simplify browsing large inventories. We integrated a secure eCommerce system with real-time inventory updates and a streamlined checkout journey.",
        features: [
          "Modern, tech-inspired UI/UX design",
          "Fully responsive layout for desktop and mobile",
          "Advanced product filters and cart management",
          "Product-focused visuals and branded graphics",
          "Optimized performance and SEO-friendly structure"
        ],
        results: "The final website positioned Eazyos as a trusted online destination for electronics, boosting both traffic and conversions while strengthening their digital brand presence.",
        type: "Website"
      },
      {
        slug: "flowz",
        title: "Flowz",
        image: "/Codenest Pictures/flowz-scaled.png",
        description: "An elegant and fashion-forward online store for contemporary women's clothing.",
        overview: "Flowz is a contemporary women’s clothing brand known for its stylish yet comfortable fashion. We designed and developed a platform that captures their brand’s elegance while making shopping smooth and enjoyable.",
        goals: "Build a mobile-friendly eCommerce website tailored for women’s fashion.\n\nHighlight seasonal collections and trending styles.\n\nCreate a seamless shopping flow to improve conversions.\n\nStrengthen brand identity with custom visuals.",
        approach: "The design emphasizes clean layouts, engaging imagery, and intuitive navigation. We focused on reflecting the brand's elegance through custom graphics and ensures a lightweight, visually striking experience with a secure checkout.",
        features: [
          "Elegant and modern UI/UX for fashion retail",
          "Fully responsive design across all devices",
          "E-commerce system with wishlist and product filters",
          "Custom graphics and refined branded visuals",
          "SEO-optimized and fast-loading structure"
        ],
        results: "Flowz now has a stylish digital platform that beautifully showcases their collections. The seamless shopping experience has established the brand as a standout in women’s fashion online.",
        type: "Website"
      },
      {
        slug: "aqj",
        title: "AQJ",
        image: "/Codenest Pictures/AQJ-scaled.png",
        description: "A premium and sophisticated digital storefront for a luxury jewelry brand.",
        overview: "AQJ is a premium jewelry brand offering timeless designs that blend tradition with modern elegance. We crafted a digital platform that highlights their collections with sophistication and style, ensuring a trustworthy shopping journey.",
        goals: "Build a luxury-focused, mobile-friendly eCommerce website.\n\nShowcase jewelry collections with high-quality visuals.\n\nCreate a seamless shopping and checkout flow.\n\nStrengthen brand identity with a refined design.",
        approach: "We kept the design minimal yet luxurious, focusing on large, high-resolution visuals and intuitive browsing. The eCommerce system includes secure payments, product filtering, and wishlist features for an effortless buying experience.",
        features: [
          "Elegant, luxury-inspired UI/UX design",
          "Fully responsive layout for mobile, tablet, and desktop",
          "High-resolution product imagery and branded visuals",
          "E-commerce system with secure checkout and wishlist",
          "Optimized performance with SEO-friendly structure"
        ],
        results: "The final website positioned AQJ as a refined and trustworthy jewelry destination, elevating its digital presence and building stronger customer engagement.",
        type: "Website"
      },
      {
        slug: "marry-me-in-portugal",
        title: "Marry Me in Portugal",
        image: "/Codenest Pictures/marrymeinportugal.jpeg",
        description: "A visually romantic and functional destination wedding planning platform in Portugal.",
        overview: "Marry Me in Portugal is a wedding ceremony arrangement service that helps couples plan their dream celebrations. We designed and developed a digital platform that combines romance and elegance with functional ease.",
        goals: "Create a visually romantic, mobile-friendly website.\n\nHighlight wedding packages, venues, and planning services.\n\nBuild trust with testimonials and galleries.\n\nStrengthen brand identity with a warm design style.",
        approach: "The website uses soft color palettes, graceful typography, and imagery that reflects love. To make planning effortless, we structured clear service sections and an easy inquiry system, using storytelling elements to create an emotional connection.",
        features: [
          "Romantic and elegant UI/UX design",
          "Fully responsive layout for all screen sizes",
          "Service and package showcase with easy navigation",
          "Gallery and testimonial sections for trust-building",
          "Integrated inquiry forms for smooth communication"
        ],
        results: "The final website gave Marry Me in Portugal a graceful digital identity. The blend of beauty and functionality inspires couples and drives inquiries, making the planning journey memorable.",
        type: "Website"
      },
      {
        slug: "maven-cosmetic",
        title: "Maven Cosmetic",
        image: "/Codenest Pictures/mavencosmetic-scaled.png",
        description: "A fresh and vibrant beauty eCommerce website for skincare and cosmetic products.",
        overview: "Maven Cosmetic is a contemporary beauty brand offering skincare and cosmetic products. We crafted a clean, stylish, and conversion-focused website that brings their youthful and vibrant brand identity to life.",
        goals: "Build a mobile-first eCommerce website tailored for beauty retail.\n\nHighlight products with bold visuals and clear descriptions.\n\nCreate a seamless shopping journey to increase conversions.\n\nStrengthen brand image with fresh design elements.",
        approach: "We used soft color palettes and minimal layouts to emphasize high-quality product imagery. The integrated eCommerce system includes product filtering, secure checkout, and customer reviews to build trust and engagement.",
        features: [
          "Fresh and modern UI/UX design for beauty retail",
          "Fully responsive structure optimized for all devices",
          "E-commerce functionality with filters, cart, and reviews",
          "Custom graphics, branded visuals, and lifestyle imagery",
          "SEO-friendly build with fast load speed"
        ],
        results: "The final platform positioned Maven Cosmetic as a sleek, modern beauty brand. The elegant design and smooth shopping flow have boosted sales and customer engagement.",
        type: "Website"
      },
      {
        slug: "oskfarforoh",
        title: "Oskfarforoh",
        image: "/Codenest Pictures/oskfarforoh-scaled.png",
        description: "A bold and trendy streetwear-inspired T-shirt brand's online store.",
        overview: "Oskfarforoh is a modern T-shirt brand focused on stylish streetwear. We designed and developed a digital platform that highlights their collections with a youthful, bold edge, providing a smooth shopping experience.",
        goals: "Build a mobile-friendly eCommerce website for T-shirt collections.\n\nShowcase products with bold visuals and clean layouts.\n\nCreate a seamless shopping journey to boost conversions.\n\nReflect a fresh, streetwear-inspired brand identity.",
        approach: "The design captures an urban vibe using bold typography and clean grids. An intuitive shopping flow with secure checkout and product filters ensures that customers can easily find their style and complete purchases.",
        features: [
          "Trendy and modern UI/UX for streetwear retail",
          "Fully responsive design across all devices",
          "E-commerce features including wishlist and cart",
          "Branded visuals and bold, high-energy graphics",
          "Optimized speed and SEO-friendly structure"
        ],
        results: "Oskfarforoh now has a strong online identity that connects with its audience, driving sales while positioning the brand as a go-to for trendy apparel.",
        type: "Website"
      },
      {
        slug: "electropie",
        title: "ELECTROPIE",
        subtitle: "Responsive E-commerce Platform",
        image: "/Codenest Pictures/Website21.jpg",
        description: "A cutting-edge electronics eCommerce platform designed for performance and speed.",
        overview: "Electropie is a modern electronics retailer that needed a sleek, responsive online store to cater to tech-savvy customers. We delivered a cutting-edge platform designed for performance and high conversions.",
        goals: "Build a fully responsive eCommerce website for mobile and desktop.\n\nOrganize products into clear, easy-to-browse categories.\n\nEnsure fast load speed and secure shopping flow.\n\nStrengthen tech-focused identity with modern visuals.",
        approach: "We collaborated to create a futuristic interface with strong usability. Advanced filtering, real-time inventory, and secure checkout were integrated, with special attention to mobile optimization for users on-the-go.",
        features: [
          "Tech-inspired, modern UI/UX design",
          "Fully responsive structure across all devices",
          "Advanced product filters and secure checkout",
          "Product-focused visuals and tech-branded graphics",
          "Optimized for speed, performance, and SEO"
        ],
        results: "Electropie is now positioned as a reliable and modern electronics retailer. The sleek design and fast performance have attracted more traffic and improved customer trust.",
        type: "Website"
      },
      {
        slug: "herbo",
        title: "HERBO",
        subtitle: "E-commerce Website Design",
        image: "/Codenest Pictures/resize-web.jpg",
        description: "Designed and developed a comprehensive eCommerce website for HERBO, a beauty and wellness brand.",
        overview: "Designed and developed a comprehensive eCommerce website for HERBO, a beauty and wellness brand, featuring intuitive navigation, strong product visibility, and a streamlined checkout process.",
        goals: "Convey the 'herbal and natural' message through design while maintaining high eCommerce standards.",
        approach: "Earth tones and natural textures integrated into a modern UI layout.",
        features: ["Natural ingredient education", "Bundled product offers", "User-friendly filter sidebar", "Rich product data"],
        results: "Strong brand positioning as a premium natural skincare provider.",
        type: "Website"
      },
      {
        slug: "deshbo",
        title: "DESHBO",
        subtitle: "SaaS Analytics Dashboard UI/UX",
        image: "/Codenest Pictures/SaasDashboard2.jpg",
        description: "Created the UI/UX for DESHBO, a scalable SaaS analytics dashboard focused on clear data visualization.",
        overview: "Created the UI/UX for DESHBO, a scalable SaaS analytics dashboard focused on clear data visualization and digestible presentation of complex metrics.",
        goals: "Translate complex data sets into simple, actionable insights via an intuitive dashboard.",
        approach: "User-centered design with customizable widgets and a dark/light mode toggle.",
        features: ["Customizable report widgets", "Real-time data streaming", "Exportable PDF/Excel reports", "Collaborative workspace"],
        results: "Positive feedback from beta testers on data clarity and ease of navigation.",
        type: "Website"
      },
      {
        slug: "surkhi-powder",
        title: "Surkhi Powder",
        image: "/Codenest Pictures/surkhipowder-scaled.png",
        description: "A specialized platform for the construction industry supply chain.",
        overview: "Surkhi Powder is a specialized platform designed for the construction industry, facilitating the supply chain for building materials.",
        goals: "Digitalize a traditionally offline supply chain to improve transparency and efficiency.",
        approach: "Focus on bulk ordering processes, logistics tracking, and clear pricing tiers.",
        features: ["Bulk order management", "Real-time logistics tracking", "Supplier rating system", "Quotations management"],
        results: "Improved turnaround time for orders by 25%.",
        type: "Website"
      }
    ]
  }
};

const Portfolio: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize category from URL params, default to 'app' if not specified
  const initialCategory = (searchParams.get('category') === 'web' ? 'web' : 'app') as 'app' | 'web';
  const [activeCategory, setActiveCategory] = useState<'app' | 'web'>(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Update URL params when category changes
  useEffect(() => {
    setSearchParams({ category: activeCategory }, { replace: true });
    setCurrentPage(1);
  }, [activeCategory, setSearchParams]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const allProjects = activeCategory === 'app' 
    ? portfolioData.portfolio.custom_app_development 
    : portfolioData.portfolio.custom_web_development;

  // Only paginate web development projects
  const shouldPaginate = activeCategory === 'web';
  const totalPages = shouldPaginate ? Math.ceil(allProjects.length / projectsPerPage) : 1;
  
  const currentProjects = shouldPaginate
    ? allProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
    : allProjects;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d062b', position: 'relative' }}>
      <Header />
      
      <main className="pt-32 pb-20" style={{ position: 'relative' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Our <span className="text-[#cfef09]">Portfolio</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Explore our exceptional work across mobile apps and web platforms
            </p>
          </motion.div>

          {/* Category Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-20"
          >
            <button
              onClick={() => setActiveCategory('app')}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeCategory === 'app'
                  ? 'bg-[#cfef09] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              Custom App Development
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeCategory === 'web'
                  ? 'bg-[#cfef09] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              Custom Web Development
            </button>
          </motion.div>

          {/* Projects List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-32"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={`${activeCategory}-${currentPage}-${index}`}
                  slug={project.slug}
                  {...project}
                  index={index}
                  isReversed={index % 2 !== 0}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination - Only for Web Development */}
          {shouldPaginate && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center gap-3 mt-20"
            >
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-[#cfef09] text-black'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                Next
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
