import LiquidMetalHero from "@/components/ui/liquid-metal-hero";

export function HeroSection() {
  return (
    <LiquidMetalHero
      badge="✨ Transform Your Digital Presence"
      title="We build digital experiences"
      subtitle="Websites | Branding | Digital Marketing"
      primaryCtaLabel="Book a consultation"
      primaryCtaLink="/contact"
      secondaryCtaLabel="Explore Services"
      secondaryCtaLink="#services"
      stats={[
        { value: "100+", label: "Projects Completed" },
        { value: "300+", label: "Happy Clients" },
        { value: "10", label: "Years Experience" },
        { value: "100%", label: "Satisfaction Rate" },
      ]}
    />
  );
}
