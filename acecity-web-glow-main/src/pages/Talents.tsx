import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { User, Star, TrendingUp, Shield, Heart, Zap, CheckCircle, ArrowRight } from "lucide-react";

const Talents = () => {
  const talentServices = [
    {
      icon: <User className="h-12 w-12" />,
      title: "Career Coaching",
      description: "Personalized guidance to help you navigate your career path and achieve your professional goals.",
      features: ["Resume Optimization", "Interview Preparation", "Salary Negotiation", "Career Strategy"]
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Executive Opportunities",
      description: "Exclusive access to C-level and senior leadership positions across top-tier organizations.",
      features: ["Executive Search", "Board Positions", "Leadership Roles", "Confidential Searches"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Skill Development",
      description: "Access to learning resources and development programs to enhance your professional capabilities.",
      features: ["Skills Assessment", "Training Programs", "Certification Paths", "Mentorship"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Privacy Protection",
      description: "Complete confidentiality and discretion throughout your job search and career transition process.",
      features: ["Confidential Search", "Privacy First", "Secure Platform", "Discreet Process"]
    }
  ];

  const careerLevels = [
    {
      level: "Entry Level",
      experience: "0-2 years",
      description: "Perfect starting positions for recent graduates and career changers",
      opportunities: ["Graduate Programs", "Junior Roles", "Training Positions", "Internships"]
    },
    {
      level: "Mid-Level",
      experience: "3-7 years",
      description: "Strategic roles for experienced professionals ready to take the next step",
      opportunities: ["Senior Roles", "Team Leadership", "Project Management", "Specialist Positions"]
    },
    {
      level: "Senior Level",
      experience: "8-15 years",
      description: "Leadership positions for seasoned professionals with proven track records",
      opportunities: ["Director Roles", "VP Positions", "Department Heads", "Strategic Leadership"]
    },
    {
      level: "Executive",
      experience: "15+ years",
      description: "C-suite and board positions for industry leaders and change makers",
      opportunities: ["C-Suite Roles", "Board Positions", "Founder/Co-founder", "Strategic Advisor"]
    }
  ];

  const successStories = [
    {
      name: "Jennifer Park",
      previousRole: "Senior Software Engineer",
      newRole: "VP of Engineering",
      company: "TechFlow Solutions",
      growth: "300% salary increase",
      testimonial: "RecruitIQ helped me transition from an IC role to leading a 50-person engineering team. The process was seamless and the support was exceptional."
    },
    {
      name: "Michael Chen",
      previousRole: "Marketing Manager",
      newRole: "Chief Marketing Officer",
      company: "Growth Startup",
      growth: "C-level position",
      testimonial: "The executive search team understood exactly what I was looking for. They found me the perfect role that aligned with my values and career goals."
    },
    {
      name: "Sarah Johnson",
      previousRole: "Finance Director",
      newRole: "CFO",
      company: "Public Company",
      growth: "50% salary increase",
      testimonial: "Moving from private to public company was a big step. The team provided incredible support throughout the entire transition process."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personalized Approach",
      description: "Every candidate receives individualized attention and career guidance"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Placement",
      description: "Average time from application to offer is just 2-3 weeks"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Confidential Process",
      description: "Your job search remains completely confidential until you're ready"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "We focus on long-term career advancement, not just job placement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              For Talented Professionals
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Unlock your potential with personalized career guidance, exclusive opportunities, 
              and support from recruitment experts who understand your worth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="gradient" size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Upload Your Resume
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services for Talents */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services for <span className="text-gradient-brand">Talents</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support designed to accelerate your career and connect you with opportunities that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {talentServices.map((service, index) => (
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
                      <CheckCircle className="w-4 h-4 text-brand-coral mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Opportunities for Every Career Stage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From entry-level positions to executive roles, we have opportunities that match your experience and aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerLevels.map((level, index) => (
              <motion.div
                key={level.level}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{level.level}</h3>
                  <p className="text-brand-coral font-medium text-sm">{level.experience}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{level.description}</p>
                <div className="space-y-2">
                  {level.opportunities.map((opportunity, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-brand-coral rounded-full mr-2" />
                      {opportunity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real professionals who achieved their career goals with RecruitIQ's support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                className="p-8 bg-card rounded-2xl border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <div className="text-sm text-muted-foreground mt-2">
                    <div>{story.previousRole} → {story.newRole}</div>
                    <div className="text-brand-coral font-medium">{story.company}</div>
                    <div className="text-brand-orange font-semibold">{story.growth}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{story.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose RecruitIQ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just recruiters - we're career partners committed to your long-term success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-brand-coral mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with RecruitIQ. 
              Your next opportunity is just one conversation away.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-primary font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Your Profile</h3>
                <p className="text-primary-foreground/80 text-sm">Upload your resume and tell us about your career goals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-primary font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Expert Consultation</h3>
                <p className="text-primary-foreground/80 text-sm">Meet with our career specialists to discuss opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-primary font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Get Matched</h3>
                <p className="text-primary-foreground/80 text-sm">We connect you with perfect-fit opportunities</p>
              </div>
            </div>

            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              Start Your Journey Today
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Talents;