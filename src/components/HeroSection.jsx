import React from 'react';
import { AuroraText } from "@/components/ui/aurora-text";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
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
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const HeroSection = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-400 text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Welcome to Our <AuroraText>Institute</AuroraText>
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Empowering you with knowledge and skills for a brighter future. Explore our comprehensive course offerings
            today.
          </p>
          <a
            href="#courses"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
          >
            Explore Courses
          </a>
        </div>
        <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg items-center justify-center overflow-hidden rounded-lg">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
