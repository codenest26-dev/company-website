import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, lazy, Suspense } from 'react';
import { PageTransition } from './PageTransition';
import { StickyCTA } from '@/components/ui/sticky-cta';

// Lazy load pages for better performance
const Index = lazy(() => import('@/pages/Index'));
const Contact = lazy(() => import('@/pages/Contact'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Services = lazy(() => import('@/pages/Services'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Service detail pages
const WebDevelopment = lazy(() => import('@/pages/services/WebDevelopment'));
const DigitalMarketing = lazy(() => import('@/pages/services/DigitalMarketing'));
const ECommerce = lazy(() => import('@/pages/services/ECommerce'));
const BrandingCreative = lazy(() => import('@/pages/services/BrandingCreative'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#0d062b] flex items-center justify-center">
    <div className="animate-pulse text-accent text-xl">Loading...</div>
  </div>
);

export function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: '#0d062b', minHeight: '100vh', position: 'relative' }}>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Index />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutUs />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/services/web-development"
              element={
                <PageTransition>
                  <WebDevelopment />
                </PageTransition>
              }
            />
            <Route
              path="/services/digital-marketing"
              element={
                <PageTransition>
                  <DigitalMarketing />
                </PageTransition>
              }
            />
            <Route
              path="/services/ecommerce"
              element={
                <PageTransition>
                  <ECommerce />
                </PageTransition>
              }
            />
            <Route
              path="/services/branding"
              element={
                <PageTransition>
                  <BrandingCreative />
                </PageTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <Portfolio />
                </PageTransition>
              }
            />
            <Route
              path="/portfolio/:slug"
              element={
                <PageTransition>
                  <ProjectDetail />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <StickyCTA />
    </div>
  );
}
