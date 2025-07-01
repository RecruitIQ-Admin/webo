import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Award, Globe, Heart, Lightbulb, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "People First",
      description: "We believe that behind every great company are exceptional people. Our human-centered approach ensures meaningful connections."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly evolving our technology and methodologies to stay ahead of industry trends and deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "Transparent, honest, and ethical practices in all our interactions. Trust is the foundation of lasting partnerships."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Connecting talent across borders with expertise in diverse markets and cultures worldwide."
    }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, text: "Top 10 Recruitment Agency 2024" },
    { icon: <Zap className="h-6 w-6" />, text: "Fastest Growing Tech Recruiter" },
    { icon: <Globe className="h-6 w-6" />, text: "International Excellence Award" },
    { icon: <Heart className="h-6 w-6" />, text: "Best Employee Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section - Updated padding for new header height */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              About RecruitIQ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Founded on the belief that exceptional talent drives innovation, we've spent over a decade 
              perfecting the art and science of recruitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To revolutionize the recruitment industry by creating meaningful connections between 
                exceptional talent and innovative companies through technology, insight, and personalized service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that the right match can transform careers, drive innovation, and create 
                lasting value for both individuals and organizations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-elegant"
            >
              <h3 className="text-2xl font-bold mb-4 text-brand-coral">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in intelligent recruitment, where every placement creates 
                mutual success and drives positive change in the world of work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-brand-coral mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto text-muted-foreground"
            >
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2014 by a team of recruitment veterans and technology innovators, 
                RecruitIQ was born from a simple observation: traditional recruitment methods 
                weren't keeping pace with the rapidly evolving job market.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We started with a vision to combine the personal touch of boutique recruiting 
                with the power of artificial intelligence and data analytics. What began as a 
                small team of five has grown into a global organization of over 200 professionals 
                serving clients across six continents.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be recognized as industry leaders, but our core mission 
                remains unchanged: connecting exceptional talent with opportunities that drive 
                mutual success and positive impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Recognition & Awards</h2>
            <p className="text-xl text-muted-foreground">
              Honored by industry leaders for our innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.text}
                className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-brand-coral">{achievement.icon}</div>
                <span className="font-medium">{achievement.text}</span>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of the recruitment revolution. Let's create something extraordinary together.
            </p>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;