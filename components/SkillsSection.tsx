"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SQLite from "@/components/ui/ClickSpark/scroll_icons/sql";
import Nodejs from "@/components/ui/ClickSpark/scroll_icons/nodejs";
import HTML5 from "@/components/ui/ClickSpark/scroll_icons/html";
import XD from "@/components/ui/ClickSpark/scroll_icons/xd";
import TailwindCSS from "@/components/ui/ClickSpark/scroll_icons/tailwindcss";
import  Bootstrap  from "@/components/ui/ClickSpark/scroll_icons/bootstrap";
import  ReactJS  from "@/components/ui/ClickSpark/scroll_icons/newreactjs";
import  Javascript  from "@/components/ui/ClickSpark/scroll_icons/javascript";
import  CSS3  from "@/components/ui/ClickSpark/scroll_icons/css";
import  MongoDB  from "@/components/ui/ClickSpark/scroll_icons/mongoDb";
import  GitHub  from "@/components/ui/ClickSpark/scroll_icons/github";
import  Figma  from "@/components/ui/ClickSpark/scroll_icons/figma";
import  MySQL  from "@/components/ui/ClickSpark/scroll_icons/mysql";
import  HuggingFace  from "@/components/ui/ClickSpark/scroll_icons/huggingFace";
import TypeScript from "./ui/ClickSpark/scroll_icons/typescript";
import { Python } from "./ui/ClickSpark/scroll_icons/python";
import { Powerbi } from "./ui/ClickSpark/scroll_icons/powerBi";




// Skill icons list
const skills = [
  { icon: <ReactJS width={40} height={40} /> },
  { icon: <Javascript width={40} height={40} /> },
  { icon: <HTML5 width={40} height={40} /> },
  { icon: <CSS3 width={40} height={40} /> },
  { icon: <Nodejs width={40} height={40} /> },
  { icon: <SQLite width={40} height={40} /> },
  { icon: <MySQL width={40} height={40} /> },
  { icon: <MongoDB width={40} height={40} /> },
  { icon: <GitHub width={40} height={40} /> },
  { icon: <Bootstrap width={40} height={40} /> },
  { icon: <Figma width={40} height={40} /> },
  { icon: <XD width={40} height={40} /> },
  { icon: <HuggingFace width={40} height={40} /> },
  { icon: <TailwindCSS width={40} height={40} /> },
  { icon:<TypeScript width={40} height={40}/>},
  { icon:<Python width={40} height={40}/>},
  { icon:<Powerbi width={40} height={40}/>},

];

// Duplicate the skills list for smooth infinite scrolling
const infiniteSkills = [...skills, ...skills];

export function SkillsSection() {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <section id="skills" className="py-20 text-white overflow-hidden relative">
      {/* Left & Right Gradient Fades for Smooth Visibility */}
      <div className="absolute top-0 left-0 w-10 md:w-20 h-full bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 md:w-20 h-full bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        {/* Infinite Scrolling Container with Pause on Hover */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
          onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
        >
          <motion.div
            className="flex space-x-6 w-max cursor-pointer"
            animate={{ x: isPaused ? "0%" : ["0%", "-50%"] }} // Pause at current position
            transition={{ repeat: isPaused ? 0 : Infinity, duration: 10, ease: "linear" }}
          >
            {infiniteSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-transparent p-2 rounded-lg flex flex-col items-center min-w-[80px] shadow-lg"
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
