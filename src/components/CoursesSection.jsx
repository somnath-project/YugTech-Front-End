import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BorderBeam } from '@/components/ui/border-beam';
import { Clock, BarChart, Star } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";

// Skeleton loader component that mimics the structure of a course card.
const SkeletonCourseCard = () => {
  return (
    <div className="relative group bg-white rounded-xl shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 animate-pulse">
      <div className="relative h-48 overflow-hidden bg-gray-300"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
          <span className="text-gray-500">•</span>
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
          <span className="text-gray-500">•</span>
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-4"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
      <BorderBeam 
        size={560} 
        duration={12} 
        delay={9}
        className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendURL}/api/courses`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
        // For each course, fetch the image and store its object URL
        data.forEach((course) => {
          fetch(`${backendURL}/api/courses/${course.id}/image`)
            .then((res) => res.blob())
            .then((blob) => {
              setImageUrls((prev) => ({ ...prev, [course.id]: URL.createObjectURL(blob) }));
            })
            .catch((error) =>
              console.error(`Error fetching image for course ${course.id}:`, error)
            );
        });
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setIsLoading(false);
      });
  }, [backendURL]);

  return (
    <section id="courses" className="container mx-auto mt-20 px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 text-lg">
          Master new skills with our expertly crafted curriculum
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        {isLoading ? (
          // Display 6 skeleton loaders while loading.
          Array.from({ length: 3 }).map((_, index) => <SkeletonCourseCard key={index} />)
        ) : (
          courses.map((course, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imageUrls[course.id] || `${backendURL}/api/courses/${course.id}/image`}
                  alt={course.courseName} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{course.rating || '4.8'}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration || '6 Weeks'}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <BarChart className="w-4 h-4" />
                    <span className="text-sm capitalize">{course.level || 'Intermediate'}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.courseName}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {course.shortDescription}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <BorderBeam 
                size={560} 
                duration={12} 
                delay={9}
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
