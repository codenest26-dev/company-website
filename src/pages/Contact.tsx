import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Facebook, Linkedin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactService } from "@/services/contactService";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await contactService.submitContactForm(formData);

      if (response.status === "success") {
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description:
            response.message || "We'll get back to you within 24 hours.",
        });
        // Reset form for next time
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        const errorMsg =
          response.message || "Please try again later or contact us directly.";
        setError(errorMsg);
        toast({
          title: "Submission failed",
          description: errorMsg,
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMsg = "An unexpected error occurred. Please try again.";
      setError(errorMsg);
      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen bg-background"
      style={{ position: "relative" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 gradient-hero"
        style={{ position: "relative" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <a 
              href="#contact-form"
              className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 hover:bg-accent/30 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Get In Touch
            </a>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Book a <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-lg text-white/70">
              Ready to start your next project? We'd love to hear from you.
              Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Fill out the form and our team will get back to you within 24
                hours. Or reach out to us directly using the contact information
                below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      +1 (786) 219-6512
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Call us: Mon – Fri 9:00 – 19:00
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Pearland, Texas
                    </div>
                    <div className="text-sm text-muted-foreground">
                      3812 Houston Lake Dr, Pearland, TX, United States
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      info@codenesttechllc.com
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Drop us a line anytime!
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/company/codenest-technologiestx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      LinkedIn
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Connect with us professionally
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/codenesttechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Facebook
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Follow us for updates
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-card rounded-2xl p-12 border border-border text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We'll get back to you within
                    24 hours.
                  </p>
                  <Button
                    variant="accent"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl p-8 md:p-12 border border-border card-shadow"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (786) 219-6512"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project, goals, and timeline..."
                        required
                        className="min-h-[150px] resize-none"
                      />
                    </div>

                    {error && (
                      <motion.div
                        className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {error}
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      variant="accent"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
