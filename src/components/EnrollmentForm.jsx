import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

const EnrollmentForm = ({ closeForm, selectedCourse }) => {
  const [errors, setErrors] = useState({});

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000;
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

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.education.trim()) newErrors.education = "Education is required";
    if (!formData.workingProfession.trim()) newErrors.workingProfession = "Working Profession is required";

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

    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(`${backendURL}/api/enrollment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit enrollment");

      await Swal.fire({
        title: "Success!",
        text: "Enrollment submitted successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        width: "400px",
        padding: "1.5rem",
        background: "#f8f9fa",
        color: "#212529",
        showClass: { 
          popup: "animate__animated animate__fadeInUp animate__faster" 
        },
        hideClass: { 
          popup: "animate__animated animate__fadeOutDown animate__faster" 
        },
        customClass: {
          title: 'text-success fw-bold mb-3',
          icon: 'border-success',
          popup: 'border'
        },
        buttonsStyling: false,
        backdrop: 'rgba(33,37,41,0.15)'
      });

      closeForm();
      triggerConfetti();

      emailjs.init("6Yx-9qp2M9sCHKw3w");
      await emailjs.send("service_gu5r29s", "template_afax5w8", {
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
    <section className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl relative w-full max-w-[95vw] md:max-w-2xl mx-2 p-4 md:p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
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

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Enroll in {selectedCourse}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Pune"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="education" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  Education <span className="text-red-500">*</span>
                </label>
                <select
                  id="education"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.education ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled selected hidden>Select Education</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Science">Science</option>
                  <option value="Computer Application">Computer Application</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="High-School">High-School</option>
                  <option value="Other">Other</option>
                </select>
                {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="workingProfession" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                  Profession <span className="text-red-500">*</span>
                </label>
                <select
                  id="workingProfession"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.workingProfession ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled selected hidden>Select Profession</option>
                  <option value="IT Industry">IT Industry</option>
                  <option value="Non-IT Industry">Non-IT Industry</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Previously Worked">Previously Worked</option>
                  <option value="Other">Other</option>
                </select>
                {errors.workingProfession && (
                  <p className="text-red-500 text-xs mt-1">{errors.workingProfession}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto md:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;