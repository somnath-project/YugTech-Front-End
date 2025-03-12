import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";
import { NumberTicker } from "@/components/ui/number-ticker";
import ClipLoader from "react-spinners/ClipLoader";
import AnimatedSection from "./AnimatedSection";
// import {Accordion, AccordionItem} from "@heroui/accordion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendURL}/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course:", error));
  }, [courseId]);

  // if (!course)
  //   return (
  //     <div className="text-center py-8">
  //       <ClipLoader size={50} color={"#123abc"} loading={!course} />
  //     </div>
  //   );

  if (!course)
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 p-4">
        <div className="max-w-7xl mx-auto space-y-12 animate-pulse">
          {/* Header Section Skeleton */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Content Skeleton */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-full max-w-2xl"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>

              {/* Stats Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-gray-200 rounded w-12"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specifications Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Enrollment Card Skeleton */}
            <div className="w-full lg:w-[400px] bg-gray-100 rounded-3xl p-8">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>

                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded-xl"></div>
                  <div className="h-12 bg-gray-200 rounded-xl"></div>

                  <div className="space-y-2 pt-2">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section Skeleton */}
          <div className="pt-12">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            <EnrollmentForm
              closeForm={() => setShowForm(false)}
              selectedCourse={course.courseName}
            />
          </div>
        </div>
      )}
      <AnimatedSection>
        {/* Gradient Header Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Main Content */}
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Course Details */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    {/* <div className="inline-flex items-center bg-white/10 px-4 py-1 rounded-full text-xs mb-4">
                      🚀 {course.category}
                    </div> */}
                    <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                      {course.courseName}
                    </h1>
                    <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                      {course.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      {
                        label: "Duration",
                        value: course.duration,
                        icon: "⏳",
                      },
                      {
                        label: "Enrolled",
                        value: (
                          <NumberTicker
                            value={course.enrolled}
                            className="text-2xl font-bold text-white"
                          />
                        ),
                        icon: "👥",
                      },
                      {
                        label: "Rating",
                        value: `${course.rating}/5`,
                        icon: "⭐",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{stat.icon}</span>
                          <div>
                            <p className="text-xs text-white/80 mb-1">
                              {stat.label}
                            </p>
                            <p className="text-2xl font-bold">
                              {stat.value}
                              {stat.label === "Rating" && (
                                <span className="text-yellow-400 ml-1.5">
                                  ★
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <span className="text-xl">📚</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            Course Includes
                          </p>
                          <p className="text-base">
                            {course.modules} Modules • {course.projects} Live
                            Projects
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <span className="text-xl">🌐</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            Language & Mode
                          </p>
                          <p className="text-base">
                            {course.language} • {course.mode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enrollment Card */}
                <div className="w-full lg:w-[400px] bg-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Start Learning</h3>
                      <p className="text-sm text-white/80">
                        Join {course.enrolled}+ students already enrolled
                      </p>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() => setShowForm(true)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-sm font-bold hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-cyan-500/20"
                      >
                        Enroll Now
                      </button>

                      <button className="w-full flex items-center justify-center gap-2 border-2 border-white/30 text-sm text-white py-3 rounded-xl font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download Brochure
                      </button>

                      {/* Discounted Price Section */}
                      <div className="text-center pt-2">
                        <div className="inline-flex items-baseline gap-2">
                          {/* <span className="text-white/50 text-sm line-through">
                            ₹{course.originalPrice || "15000"}
                          </span> */}
                          <span className="text-lg font-bold text-green-400">
                            ₹{course.discountedPrice || "15000"}
                          </span>
                        </div>
                        {/* <p className="text-xs mt-1 text-cyan-400 font-medium">
                          Limited Time Offer 🔥
                        </p> */}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex flex-col gap-3 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <span>✅</span>
                          <span className="text-sm">
                            3-day free demo session
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✅</span>
                          <span className="text-sm">
                            Certificate of Completion
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✅</span>
                          <span className="text-sm">1-on-1 Mentorship</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="mt-16 pt-12 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-8">
                  Earn Industry Recognized Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {course.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-400/10 rounded-lg">
                          <span className="text-xl">📜</span>
                        </div>
                        <p className="text-sm font-medium">{cert}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        {/* Course Description Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="space-y-10 p-8">
              {/* Course Header */}
              <div className="text-center mb-12">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 font-[Inter]">
                  About {course.courseName}
                </h1>
                <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
                  <span className="text-indigo-600 font-medium">
                    {course.courseIntro}
                  </span>{" "}
                  {course.trainingDescription}
                </p>
              </div>

              {/* Who Should Enroll */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
                  Who Should Enroll?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.eligibility.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-400 mr-2 mt-0.5">👉</span>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
                  What You'll Achieve
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100"
                    >
                      <div className="shrink-0 bg-indigo-600 p-1.5 rounded-full mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Overview */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
                  Course Overview
                </h2>
                <div className="space-y-4">
                  {course.courseOverview.map((paragraph, index) => (
                    <div
                      key={index}
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-500 before:rounded-full"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.keyHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
                    >
                      <span className="shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
{/* Frequently Asked Questions */}
<div className="space-y-6 mt-12">
  <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
    Frequently Asked Questions
  </h2>
  <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
    {[
      {
        question: `Can I learn ${course.courseName} In 3 Months?`,
        answer: `Yes, ${course.courseName} can offer promising career opportunities due to its high demand, diverse career paths, competitive salaries, certification opportunities, global reach, and potential for remote work and career growth.`,
      },
      {
        question: "Who Can join this course?",
        answer:
          "The course is open for graduates (technical and non-technical background), working professionals (any field), students, IT professionals who want a career switch, IT aspirants with career or educational gaps, women who want to restart their career journey, and anyone who is willing to work hard for joining one of the most in-demand IT fields.",
      },
      {
        question: `Does ${course.courseName} have a good career?`,
        answer:
          `Absolutely, ${course.courseName} is a rapidly growing technology that's currently in high demand in the IT industry. It's a big deal right now!`,
      },
      {
        question: `Why is Online ${course.courseName} Certification Important?`,
        answer: `Online ${course.courseName} certification is crucial because it adds credibility to their skills, improves career prospects, and helps them stand out in the job market. Moreover, it allows students to stay updated with the latest industry trends and opens doors to exciting career paths in the tech world.`,
      },
      {
        question: "What is this course all about?",
        answer: `This course is all about the ${course.courseName} which is the one of the blooming technology in the IT Industry.`,
      },
    ].map((faq, index) => (
      <Accordion 
        key={index}
        disableElevation
        sx={{
          border: 'none',
          boxShadow: 'none',
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className="text-gray-600 h-5 w-5" />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          className="p-4 hover:bg-gray-50"
        >
          <Typography component="span" className="text-gray-900 font-medium">
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-50 px-4 pb-4 pt-2">
          <Typography className="text-gray-600 text-sm">
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
</div>

              {/* CTA Section */}
              <div className="pt-8 border-t border-gray-100">
                <button
                  onClick={() => {
                    setShowForm(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full max-w-xs mx-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Enroll Now
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CourseDetail;
