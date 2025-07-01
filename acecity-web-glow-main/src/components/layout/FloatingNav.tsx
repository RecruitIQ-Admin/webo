
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, Users, Briefcase, Building, Star, UserCheck } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full backdrop-blur-lg shadow-elegant z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
        style={{ backgroundColor: '#050A30' }}
      >
        {navItems.map((navItem, idx) => (
          <motion.a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-white/80 hover:text-white transition-colors flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-white/10"
            )}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="block sm:hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {navItem.icon}
            </motion.span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </motion.a>
        ))}
        <button className="bg-gradient-brand rounded-full py-2 px-6 text-white font-medium shadow-brand hover:shadow-glow transition-smooth">
          Contact
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About Us",
    link: "/about",
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: <Building className="h-4 w-4" />,
  },
  {
    name: "Leadership",
    link: "/leadership",
    icon: <Star className="h-4 w-4" />,
  },
  {
    name: "Talents",
    link: "/talents",
    icon: <UserCheck className="h-4 w-4" />,
  },
];
