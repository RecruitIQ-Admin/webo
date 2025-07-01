import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Linkedin, Twitter, Mail, Award, Building2, GraduationCap } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer & Founder",
      bio: "Visionary leader with 15+ years in recruitment technology. Previously VP of Talent at three unicorn startups. Harvard MBA, passionate about transforming how companies find exceptional talent.",
      expertise: ["Strategic Leadership", "Recruitment Innovation", "Startup Scaling"],
      education: "Harvard Business School, MIT",
      achievements: ["Forbes 40 Under 40", "Top CEO Award 2023", "Innovation Leader"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former Google engineer turned recruitment tech innovator. Led engineering teams at three successful exits. Stanford CS degree. Expert in AI, machine learning, and scalable systems architecture.",
      expertise: ["AI & Machine Learning", "System Architecture", "Team Leadership"],
      education: "Stanford University, UC Berkeley",
      achievements: ["Tech Innovation Award", "Best CTO 2024", "AI Pioneer"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Williams",
      role: "Chief Operating Officer",
      bio: "Operations excellence expert with 12+ years at top consulting firms. Wharton MBA. Specializes in process optimization, global expansion, and organizational development.",
      expertise: ["Operations Excellence", "Global Expansion", "Process Innovation"],
      education: "Wharton School, Princeton University",
      achievements: ["COO of the Year", "Global Leader Award", "Excellence in Ops"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "Chief Revenue Officer",
      bio: "Sales and marketing veteran with track record of 10x revenue growth. Previously built and led sales teams at SaaS unicorns. Expert in enterprise sales and customer success.",
      expertise: ["Revenue Growth", "Enterprise Sales", "Customer Success"],
      education: "Northwestern Kellogg, University of Chicago",
      achievements: ["Sales Leader Award", "Revenue Growth Champion", "CRO Excellence"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Chief People Officer",
      bio: "Organizational psychologist and people strategy expert. PhD in Industrial Psychology. Former Chief People Officer at two Fortune 500 companies. Champion of inclusive workplace culture.",
      expertise: ["People Strategy", "Organizational Psychology", "Culture Building"],
      education: "PhD Industrial Psychology, Yale University",
      achievements: ["People Leader Award", "Culture Champion", "Diversity Advocate"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "James Thompson",
      role: "Chief Financial Officer",
      bio: "Finance executive with experience scaling companies from startup to IPO. Former investment banker at Goldman Sachs. CPA with expertise in strategic finance and international expansion.",
      expertise: ["Strategic Finance", "International Expansion", "Investment Strategy"],
      education: "Columbia Business School, CPA",
      achievements: ["CFO Excellence Award", "Finance Innovation", "Strategic Leader"],
      image: "/api/placeholder/300/300"
    }
  ];

  const advisors = [
    {
      name: "Prof. Michael Anderson",
      role: "Chairman of Advisory Board",
      company: "Former CEO of TalentCorp Global",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Jennifer Roberts",
      role: "Technology Advisor",
      company: "Former CTO of LinkedIn",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Robert Liu",
      role: "Strategy Advisor",
      company: "Former Partner at McKinsey & Co",
      image: "/api/placeholder/200/200"
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We continuously push boundaries and embrace new technologies to solve complex recruitment challenges."
    },
    {
      title: "People-Centric",
      description: "Every decision we make prioritizes the human element - our clients, candidates, and team members."
    },
    {
      title: "Excellence Standards",
      description: "We maintain the highest standards in everything we do, from service delivery to internal operations."
    },
    {
      title: "Global Mindset",
      description: "We think globally while acting locally, understanding diverse markets and cultural nuances."
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
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Meet the visionary leaders driving RecruitIQ's mission to transform 
              the recruitment industry through innovation, expertise, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Executive <span className="text-gradient-brand">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans and innovative thinkers united by a shared vision of recruitment excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="group bg-card rounded-2xl border border-border shadow-elegant overflow-hidden hover:shadow-brand transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-brand flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-brand-coral font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                  
                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-accent px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>{leader.education}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">Achievements</h4>
                    <div className="space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <Award className="h-3 w-3 text-brand-coral" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <button className="p-2 bg-accent rounded-full hover:bg-brand-coral hover:text-white transition-smooth">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-accent rounded-full hover:bg-brand-coral hover:text-white transition-smooth">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-accent rounded-full hover:bg-brand-coral hover:text-white transition-smooth">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Leadership Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core values that guide our leadership team and shape our company culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Advisory Board</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry luminaries providing strategic guidance and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold mb-1">{advisor.name}</h3>
                <p className="text-brand-coral font-medium mb-2">{advisor.role}</p>
                <p className="text-muted-foreground text-sm">{advisor.company}</p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Want to be part of a team that's transforming recruitment? We're always looking for exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                View Open Positions
              </AnimatedButton>
              <AnimatedButton 
                variant="ghost" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Contact Leadership
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;