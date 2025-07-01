import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav, navItems } from "@/components/layout/FloatingNav";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      inquiryType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@recruitiq.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Business Ave, Tech City, TC 12345",
      description: "Our headquarters"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "We're here to help"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Hiring Solutions",
    "Job Opportunities",
    "Partnership",
    "Support",
    "Media Inquiry"
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@recruitiq.com"
    },
    {
      city: "San Francisco",
      address: "456 Innovation Blvd, Floor 12\nSan Francisco, CA 94105",
      phone: "+1 (555) 234-5678",
      email: "sanfrancisco@recruitiq.com"
    },
    {
      city: "London",
      address: "789 Talent Street, Level 8\nLondon, UK EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@recruitiq.com"
    }
  ];

  const quickActions = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      action: "Start Chat"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our experts",
      action: "Book Now"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Request Demo",
      description: "See our platform in action",
      action: "Get Demo"
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to transform your recruitment process or advance your career? 
              Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Quick Actions</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to connect with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-smooth cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-brand-coral mb-4 group-hover:scale-110 transition-transform flex justify-center">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                <p className="text-muted-foreground mb-6">{action.description}</p>
                <AnimatedButton variant="outline" className="w-full">
                  {action.action}
                </AnimatedButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <AnimatedButton variant="gradient" size="lg" type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </AnimatedButton>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-brand-coral flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <motion.div
                      key={office.city}
                      className="p-4 bg-card rounded-lg border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-lg text-brand-coral">{office.city}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line mb-2">{office.address}</p>
                      <p className="text-sm"><span className="font-medium">Phone:</span> {office.phone}</p>
                      <p className="text-sm"><span className="font-medium">Email:</span> {office.email}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you fill a position?",
                answer: "Our average time-to-fill is 15 days, but this varies depending on the role complexity and market conditions. We provide regular updates throughout the process."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We specialize in technology, healthcare, finance, and professional services, with deep expertise in emerging sectors and executive leadership roles."
              },
              {
                question: "Do you offer international recruitment?",
                answer: "Yes, we have a global network and can support international placements and expansion into new markets worldwide."
              },
              {
                question: "What is your fee structure?",
                answer: "Our fees vary based on the service type and role level. We offer competitive rates and flexible payment terms. Contact us for a detailed quote."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-card rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;