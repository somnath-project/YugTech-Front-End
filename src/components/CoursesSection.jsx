import React, { useEffect, useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { meta } from '@eslint/js';

const CoursesSection = ({ selectCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from API when component mounts
    const backendURL= import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendURL}/api/courses`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section id="courses" className="container mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 flex flex-col overflow-hidden"
          >
            <BorderBeam size={250} duration={12} delay={9} />
            <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-md mb-4">
              <i className={`${course.icon} text-6xl text-indigo-600`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{course.courseName}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <p className="text-gray-700 font-semibold mt-2">Price: ₹{course.price}</p>
            <p className="text-gray-700 font-semibold">Duration: {course.duration}</p>
            <p className="text-gray-700 font-semibold">Mode: {course.mode}</p>
            <button
              onClick={() => selectCourse(course.courseName)}
              className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;