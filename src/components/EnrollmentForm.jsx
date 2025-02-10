import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";


const EnrollmentForm = ({ closeForm, selectedCourse }) => {
  const [errors, setErrors] = useState({});

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.education.trim()) {
      newErrors.education = "Education is required";
    }
    if (!formData.workingProfession.trim()) {
      newErrors.workingProfession = "Working Profession is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      education: document.getElementById("education").value,
      workingProfession: document.getElementById("workingProfession").value,
      courseName: selectedCourse,
    };

    // API URL
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(`${backendURL}/api/enrollment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit enrollment");

      await Swal.fire({
        title: "Success!",
        text: "Enrollment submitted successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

      closeForm();
      triggerConfetti();

      emailjs.init("ljrg2HzXzm5dCjmpg");
      await emailjs.send("service_a4vpqfh", "template_mv0vmdn", {
        courseName: formData.courseName,
        email: formData.email,
        name: formData.name,
      });

      e.target.reset();
      setErrors({});
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl relative w-full max-w-2xl p-8">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Enroll in {selectedCourse}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+91 9876543210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Pune"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Education Background <span className="text-red-500">*</span>
                </label>
                <select
                  id="education"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.education ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled selected hidden>Select Education Background</option>
                  <option value="Graduate or Post Graduate in Engineering">
                    Graduate or Post Graduate in Engineering
                  </option>
                  <option value="Graduate or Post Graduate in Science">
                    Graduate or Post Graduate in Science
                  </option>
                  <option value="Graduate or Post Graduate in Computer Application">
                    Graduate or Post Graduate in Computer Application
                  </option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="High-School">High-School</option>
                  <option value="Other">Other</option>
                </select>
                {errors.education && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.education}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="workingProfession"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Working Professional? <span className="text-red-500">*</span>
                </label>
                <select
                  id="workingProfession"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.workingProfession
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="" disabled selected hidden>Select Working Profession</option>
                  <option value="Yes, I work in IT Industry">
                    Yes, I work in IT Industry
                  </option>
                  <option value="Yes, I work in Non-IT Industry">
                    Yes, I work in Non-IT Industry
                  </option>
                  <option value="No, I don't work, I'M Freasher">
                    No, I don't work, I'M Freasher
                  </option>
                  <option value="Not working right now, but I used to work">
                    Not working right now, but I used to work
                  </option>
                  <option value="Other">Other</option>
                </select>
                {errors.workingProfession && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.workingProfession}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-center w-auto px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;
