import React from 'react';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "CodeNest revolutionized our operations, streamlining our web development process. The team keeps us productive with outstanding support.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing our new website was smooth and quick. The customizable, user-friendly interface made team onboarding effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "CodeNest's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Their robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using CodeNest, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
  {
    text: "The app development process was flawless. Their attention to detail and commitment to quality truly set them apart.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ayesha Rahman",
    role: "Product Owner",
  },
  {
    text: "Outstanding digital marketing services that helped us reach our target audience effectively and grow our brand presence.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Kamran Sheikh",
    role: "Brand Manager",
  },
  {
    text: "Their SEO expertise brought our website to the top of search results. We've seen a remarkable increase in organic traffic.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Nadia Khan",
    role: "Digital Strategist",
  },
  {
    text: "The UI/UX design they created is both beautiful and functional. Our users love the intuitive interface.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Raza Ahmed",
    role: "UX Lead",
  },
  {
    text: "Professional service from start to finish. They understood our vision and delivered beyond our expectations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sofia Malik",
    role: "Founder & CEO",
  },
  {
    text: "Great communication, timely delivery, and exceptional results. Would highly recommend CodeNest to anyone.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Imran Ali",
    role: "Technology Director",
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 10);
const thirdColumn = testimonials.slice(10, 15);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className} style={{ overflow: 'hidden' }}>
      <div
        style={{
          animation: `marquee-up ${props.duration || 10}s linear infinite`,
          willChange: 'transform',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${index}-${i}`}
                className="p-8 rounded-3xl bg-card border border-border shadow-lg max-w-xs w-full"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground text-sm leading-tight tracking-tight">
                        {name}
                      </span>
                      <span className="text-xs text-muted-foreground leading-tight tracking-tight">
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary" style={{ position: 'relative', scrollMarginTop: '120px' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Testimonials
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary-foreground tracking-tight">
            What our users say
          </h2>
          <p className="text-lg text-primary-foreground/70 text-center max-w-xl mt-4">
            Discover how teams streamline their operations with our platform.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
