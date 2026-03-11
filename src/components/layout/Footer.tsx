"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Web Dev", href: "/#services" },
      { label: "UI/UX Design", href: "/#services" },
      { label: "Solutions", href: "/#services" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} style={{ color: "#cfef09" }} />,
    text: "info@codenesttechllc.com",
    href: "mailto:info@codenesttechllc.com",
  },
  {
    icon: <Phone size={18} style={{ color: "#cfef09" }} />,
    text: "+1 (786) 219-6512",
    href: "tel:+17862196512",
  },
  {
    icon: <MapPin size={18} style={{ color: "#cfef09" }} />,
    text: "United States",
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/share/1B386b3tHE/?mibextid=wwXIfr" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/codenest-technologiestx/" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0d062b" }}
    >
      <FooterBackgroundGradient />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Brand section */}
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/Codenest Logo.png"
                  alt="CodeNest Logo"
                  className="h-36 w-auto object-contain brightness-110"
                />
              </Link>
              <p className="text-sm leading-relaxed text-white/50 max-w-xs">
                CodeNest Technologies LLC creates beautiful, high-performance
                digital experiences with cutting-edge tech.
              </p>
            </div>

            {/* Footer link sections */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#cfef09" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/40 transition-all hover:text-white hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div className="space-y-6">
              <h3
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#cfef09" }}
              >
                Get in Touch
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 opacity-80">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/40 transition-colors hover:text-white"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm text-white/40">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-white/10 mt-12 mb-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Footer bottom */}
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row pb-2">
            {/* Social icons only */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all hover:bg-[#cfef09] hover:text-black hover:border-transparent scale-110"
                >
                  {React.cloneElement(icon as React.ReactElement, { size: 18 })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
