

"use client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/hooks/use-scroll";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Palette, Smartphone, Zap, X, ShoppingCart, Megaphone } from "lucide-react";

// Memoize service menu items to prevent recreation
const servicesMenuItems = [
  {
    title: "Web Development",
    description: "Custom websites and web applications",
    icon: <Code className="size-5 shrink-0" />,
    url: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand and reach your audience",
    icon: <Megaphone className="size-5 shrink-0" />,
    url: "/services/digital-marketing",
  },
  {
    title: "E-Commerce",
    description: "Powerful online stores that drive sales",
    icon: <ShoppingCart className="size-5 shrink-0" />,
    url: "/services/ecommerce",
  },
  {
    title: "Branding & Creative",
    description: "Memorable brand identities that resonate",
    icon: <Palette className="size-5 shrink-0" />,
    url: "/services/branding",
  },
];

const links = [{ label: "About", href: "/about" }];

const linksAfterServices = [
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Portfolio", href: "/portfolio" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  // Handle hash navigation for testimonials and other sections
  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Wait for navigation, animations, and DOM to be ready
      const timeoutId = setTimeout(() => {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Get element position and subtract header height (120px for safety)
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 120;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 500); // Increased timeout to allow for page animations
      
      return () => clearTimeout(timeoutId);
    }
  }, [location.hash, location.pathname]);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = React.useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 120;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    }
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        scrolled ? "pt-4 px-4" : "pt-0 px-0",
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-500 ease-in-out px-6 relative",
          scrolled
            ? "bg-primary/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/10 rounded-2xl h-16"
            : "bg-transparent h-20 border-transparent",
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-all duration-300"
        >
          <img
            src="/Codenest Logo.png"
            alt="CodeNest Logo"
            className={cn(
              "transition-all duration-500 object-contain",
              scrolled ? "h-32" : "h-40",
            )}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "relative px-4 py-2 font-medium transition-all duration-500 rounded-full group overflow-hidden text-sm md:text-[15px]",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-white/80 hover:text-white",
              )}
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className={cn(
                  "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  location.pathname === link.href && "opacity-100 bg-white/10",
                )}
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-1/2" />
            </Link>
          ))}

          {/* Services Dropdown Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-muted-foreground">
                <Link to="/services" className="group/trigger relative">
                  <NavigationMenuTrigger
                    className={cn(
                      "font-medium text-white/80 transition-all duration-500 bg-transparent hover:bg-transparent text-sm md:text-[15px] h-10 px-4 py-2 rounded-full relative overflow-hidden group-data-[state=open]:text-accent",
                    )}
                  >
                    <span className="relative z-10">Services</span>
                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover/trigger:opacity-100 group-data-[state=open]:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover/trigger:w-1/2 group-data-[state=open]:w-1/2" />
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="relative bg-[#0b0622]/95 backdrop-blur-[40px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] rounded-[32px] overflow-hidden translate-y-2">
                  {/* Subtle Glow Background Art */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/20 blur-[100px] pointer-events-none" />
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/10 blur-[100px] pointer-events-none" />

                  <div className="relative z-10 w-[min(90vw,850px)] p-0 flex flex-col md:flex-row">
                    {/* Brand/Hero Section - Left */}
                    <div className="w-full md:w-[280px] p-8 bg-gradient-to-b from-white/5 to-transparent flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
                          Our Expertise
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-3">
                          Elevating Digital Standards
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed font-light">
                          We don't just build websites; we craft digital
                          experiences that resonate and convert.
                        </p>
                      </div>

                      <div className="mt-12 group/all">
                        <Link
                          to="/services"
                          className="text-sm font-semibold text-white/60 hover:text-accent transition-colors flex items-center gap-2 group-hover/all:gap-3"
                        >
                          View all services
                          <span className="transition-transform group-hover/all:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Services Grid - Right */}
                    <div className="flex-1 p-8 bg-transparent">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {servicesMenuItems.map((subItem, idx) => (
                          <Link
                            key={subItem.title}
                            to={subItem.url}
                            className="group/service flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/5"
                            onClick={() => setOpen(false)}
                          >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-accent group-hover/service:from-accent group-hover/service:to-accent/60 group-hover/service:text-primary transition-all duration-500 shadow-lg group-hover/service:shadow-accent/20">
                              {subItem.icon}
                            </div>
                            <div className="pt-1">
                              <h4 className="text-[15px] font-bold text-white mb-1 group-hover/service:text-accent transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[13px] text-white/40 leading-relaxed font-light group-hover/service:text-white/60 transition-colors">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer */}
                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                          <span className="text-[12px] text-white/40 uppercase tracking-widest font-semibold">
                            Available for new projects
                          </span>
                        </div>
                        <Button
                          asChild
                          variant="accent"
                          size="sm"
                          className="rounded-full shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                        >
                          <Link to="/contact">Start a project today</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {linksAfterServices.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "relative px-4 py-2 font-medium transition-all duration-500 rounded-full group overflow-hidden text-sm md:text-[15px]",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-white/80 hover:text-white",
              )}
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className={cn(
                  "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  location.pathname === link.href && "opacity-100 bg-white/10",
                )}
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-1/2" />
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => handleNavClick("/contact")}
            className={cn(
              "relative px-4 py-2 font-medium transition-all duration-500 rounded-full group overflow-hidden text-sm md:text-[15px]",
              location.pathname === "/contact"
                ? "text-accent"
                : "text-white/80 hover:text-white",
            )}
          >
            <span className="relative z-10">Contact</span>
            <span
              className={cn(
                "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                location.pathname === "/contact" && "opacity-100 bg-white/10",
              )}
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-1/2" />
          </Link>
          <Button
            asChild
            variant="accent"
            size={scrolled ? "default" : "lg"}
            className="transition-all duration-500 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)]"
          >
            <Link to="/contact">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Zap className="size-4 transition-transform duration-300 group-hover/btn:scale-125" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" />
        </Button>
      </div>

      {/* Mobile Menu - Only render when needed */}
      {open && (
        <div
          className="fixed inset-0 bg-primary/95 backdrop-blur-2xl md:hidden z-[60] overflow-y-auto"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="container mx-auto flex h-full flex-col justify-between gap-8 px-6 py-8 animate-in fade-in duration-300">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <img
                  src="/Codenest Logo.png"
                  alt="CodeNest Logo"
                  className="h-24 object-contain"
                  loading="eager"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-white/10 rounded-full"
                aria-label="Close menu"
              >
                <X className="size-8" />
              </Button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 pt-6">
              {links.map((link, idx) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl font-display font-bold text-white hover:text-accent transition-all duration-300 transform hover:translate-x-2"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Accordion for Mobile */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="services"
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="py-4 font-display text-4xl font-bold text-white hover:text-accent hover:no-underline transition-all duration-300">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 pb-4">
                    <div className="flex flex-col gap-4 pl-4">
                      {servicesMenuItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.url}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-4 group/mobile-service"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-accent group-hover/mobile-service:bg-accent group-hover/mobile-service:text-primary transition-all duration-300">
                            {subItem.icon}
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-white group-hover/mobile-service:text-accent transition-colors">
                              {subItem.title}
                            </div>
                            <p className="text-sm text-white/50">
                              {subItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {linksAfterServices.map((link, idx) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl font-display font-bold text-white hover:text-accent transition-all duration-300 transform hover:translate-x-2"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-4xl font-display font-bold text-white hover:text-accent transition-all duration-300 transform hover:translate-x-2"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Footer Area */}
            <div className="flex flex-col gap-8 pb-12 mt-auto">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@codenesttechllc.com"
                    className="text-white hover:text-accent transition-colors underline underline-offset-4"
                  >
                    info@codenesttechllc.com
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
                    Follow
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-accent transition-colors"
                    >
                      LN
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-accent transition-colors"
                    >
                      IG
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-accent transition-colors"
                    >
                      TW
                    </a>
                  </div>
                </div>
              </div>
              <Button
                asChild
                variant="accent"
                size="xl"
                className="w-full h-16 text-lg font-bold shadow-[0_0_30px_rgba(var(--accent),0.3)]"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
