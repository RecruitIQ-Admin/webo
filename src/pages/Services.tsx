import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Users, Search, Clock, Target, Briefcase, Code, Heart, Building } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Executive Search",
      description: "C-level and senior leadership recruitment with comprehensive market mapping and succession planning.",
      features: ["Leadership Assessment", "Market Intelligence", "Succession Planning", "Cultural Fit Analysis"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Permanent Placement",
      description: "Full-time recruitment across all levels from entry-level to senior management positions.",
      features: ["Skills Matching", "Background Verification", "Reference Checks", "Onboarding Support"]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Contract & Temporary",
      description: "Flexible staffing solutions for project-based work and temporary coverage needs.",
      features: ["Rapid Deployment", "Project Staffing", "Temporary Coverage", "Flexible Terms"]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Retained Search",
      description: "Dedicated search mandates for critical positions with guaranteed results and comprehensive support.",
      features: ["Dedicated Consultant", "Market Research", "Candidate Pipelining", "Guarantee Period"]
    }
  ];

  const specializations = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technology",
      description: "Software engineers, data scientists, DevOps, cybersecurity, and emerging tech roles."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare",
      description: "Medical professionals, healthcare administrators, biotech, and pharmaceutical experts."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Finance",
      description: "Investment banking, fintech, accounting, risk management, and financial services."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Professional Services",
      description: "Legal, consulting, marketing, sales, and business development professionals."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your needs, culture, and specific requirements to create a targeted search strategy."
    },
    {
      step: "02",
      title: "Market Research",
      description: "Comprehensive market mapping and competitive intelligence to identify the best talent pools."
    },
    {
      step: "03",
      title: "Candidate Sourcing",
      description: "Multi-channel sourcing using our network, technology platforms, and direct outreach methods."
    },
    {
      step: "04",
      title: "Screening & Assessment",
      description: "Rigorous evaluation process including skills assessment, cultural fit, and reference verification."
    },
    {
      step: "05",
      title: "Presentation & Selection",
      description: "Detailed candidate profiles with insights and recommendations to support your decision-making."
    },
    {
      step: "06",
      title: "Offer & Onboarding",
      description: "Negotiation support and seamless transition to ensure successful integration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive recruitment solutions tailored to your unique needs and designed 
              to deliver exceptional results across all industries and levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="text-gradient-brand">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From executive search to contract staffing, we provide end-to-end recruitment solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-brand-coral mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-coral rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Industry Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across key industries with specialized knowledge and networks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-brand-coral mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{spec.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures consistent results and exceptional candidate experience.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Service Guarantee
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                We stand behind our work with industry-leading guarantees and service commitments. 
                Your success is our success, and we're committed to delivering exceptional results 
                that exceed your expectations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">30-Day</div>
                  <div className="text-primary-foreground/80">Replacement Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-primary-foreground/80">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-primary-foreground/80">Satisfaction Focus</div>
                </div>
              </div>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                Start Your Search Today
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;