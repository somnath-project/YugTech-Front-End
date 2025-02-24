import React from 'react';
import { AuroraText } from "@/components/ui/aurora-text";
import { IconCloud } from "@/components/ui/icon-cloud";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordRotate } from "@/components/ui/word-rotate";
import { BoxReveal } from "@/components/magicui/box-reveal";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "salesforce",
  "amazonaws",
  "postgresql",
  "firebase",
  "springboot",
  "tailwindcss",
  "python",
  "jest",
  "mysql",
  "docker",
  "git",
  "jira",
  "github",
  "vite",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "spring",
  "intellijidea"
];

const HeroSection = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/fff`
  );

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                Transform Your Career at <br />
                <WordRotate
                  words={["YugTech", " Academy"]}
                  className="!text-4xl md:!text-4xl lg:!text-4xl"
                />
              </h1>
            </BoxReveal>

            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                Accelerate your tech career with industry-aligned programs in
                software development, cloud computing, and cutting-edge
                technologies. Learn from experts and join our community of
                successful alumni.
              </p>
            </BoxReveal>

            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#courses"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl 
                text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </BoxReveal>
          </motion.div>

          {/* Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl backdrop-blur-xl" /> */}
            <IconCloud
              images={images}
              className="scale-75 lg:scale-90"
              config={{
                radius: 300,
                imageSize: 60,
                rotation: 0,
                buttonColor: "transparent",
                buttonSize: 40,
              }}
            />
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/60" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;