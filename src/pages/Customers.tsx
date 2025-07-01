import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Quote, Star, CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const Customers = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow Solutions",
      image: "/api/placeholder/80/80",
      testimonial: "RecruitIQ transformed our hiring process. They found us three exceptional senior engineers in just two weeks, something we couldn't achieve in months of searching.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Human Resources Officer",
      company: "Global Finance Corp",
      image: "/api/placeholder/80/80",
      testimonial: "The quality of candidates and the speed of delivery exceeded our expectations. RecruitIQ understands our culture and consistently delivers perfect matches.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Founder & CEO",
      company: "HealthTech Innovations",
      image: "/api/placeholder/80/80",
      testimonial: "As a startup, finding the right talent is crucial. RecruitIQ helped us build our entire leadership team with professionals who share our vision and drive.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Digital Transformation",
      company: "Major Retail Corporation",
      challenge: "Needed to hire 50+ technology professionals to support digital transformation initiative within 6 months.",
      solution: "Developed dedicated talent pipeline with specialized screening process and cultural integration program.",
      results: [
        "52 positions filled in 5 months",
        "95% retention rate after 1 year",
        "40% faster time-to-productivity",
        "$2M+ savings in recruitment costs"
      ]
    },
    {
      title: "Startup Leadership Build-out",
      company: "AI Healthcare Startup",
      challenge: "Series B startup needed to rapidly scale leadership team across engineering, sales, and operations.",
      solution: "Executive search with focus on startup experience and cultural alignment with company's mission.",
      results: [
        "C-level team completed in 8 weeks",
        "100% offer acceptance rate",
        "Team led to successful Series C funding",
        "3x revenue growth in first year"
      ]
    },
    {
      title: "Global Expansion Support",
      company: "European Fintech",
      challenge: "International expansion into US market required local expertise and regulatory knowledge.",
      solution: "Targeted search for professionals with US fintech experience and regulatory expertise.",
      results: [
        "US operations launched on schedule",
        "Regulatory approval achieved in record time",
        "Team of 25 professionals hired",
        "Market entry ahead of competition"
      ]
    }
  ];

  const clientLogos = [
    { name: "TechFlow", logo: "/api/placeholder/120/60" },
    { name: "Global Finance", logo: "/api/placeholder/120/60" },
    { name: "HealthTech", logo: "/api/placeholder/120/60" },
    { name: "DataCorp", logo: "/api/placeholder/120/60" },
    { name: "Innovation Labs", logo: "/api/placeholder/120/60" },
    { name: "Future Systems", logo: "/api/placeholder/120/60" }
  ];

  const successMetrics = [
    { icon: <TrendingUp className="h-8 w-8" />, metric: "98%", label: "Client Retention Rate" },
    { icon: <Users className="h-8 w-8" />, metric: "87%", label: "First-Year Retention" },
    { icon: <CheckCircle className="h-8 w-8" />, metric: "92%", label: "Offer Acceptance Rate" },
    { icon: <Award className="h-8 w-8" />, metric: "15", label: "Days Average Fill Time" }
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
              Customer Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover how leading companies have transformed their organizations with RecruitIQ's 
              innovative recruitment solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-brand-coral mb-4 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-gradient-brand mb-2">{item.metric}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              What Our <span className="text-gradient-brand">Clients</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the RecruitIQ difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-8 bg-card rounded-2xl border border-border shadow-elegant relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Quote className="h-8 w-8 text-brand-coral mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-brand-coral">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into how we've helped organizations achieve their talent goals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="bg-card p-8 rounded-2xl border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-brand-coral font-medium mb-4">{study.company}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-4">Results</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-brand-coral flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">
              Partnering with companies of all sizes across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex justify-center items-center p-4 bg-card rounded-lg border border-border opacity-60 hover:opacity-100 transition-smooth"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us help you build the team that will drive your organization's next chapter of growth and innovation.
            </p>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              Start Your Success Story
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;