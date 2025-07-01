
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, Users, Briefcase, Building, Star, UserCheck } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Customers", href: "/customers", icon: Building },
    { name: "Leadership", href: "/leadership", icon: Star },
    { name: "Talents", href: "/talents", icon: UserCheck },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50",
        className
      )}
      style={{ backgroundColor: '#050A30' }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src="/lovable-uploads/0149f609-41b3-4bf0-a130-b8f9f73e9722.png"
              alt="RecruitIQ Logo"
              className="h-16 w-auto"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                mixBlendMode: 'multiply'
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-smooth relative group flex items-center space-x-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-smooth" />
              </motion.a>
            ))}
          </div>

          {/* Contact Button */}
          <motion.a
            href="/contact"
            className="bg-gradient-brand text-white px-6 py-2 rounded-full shadow-brand hover:shadow-glow transition-smooth font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Contact Us
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};
