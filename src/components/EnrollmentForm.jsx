import React from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const EnrollmentForm = ({ closeForm, selectedCourse, backendURL }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      courseName: selectedCourse,
    };

    // API 
    const backendURL= import.meta.env.VITE_BACKEND_URL;

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email is valid
    if (!emailPattern.test(formData.email)) {
      return Swal.fire({
        title: 'Invalid Email!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }


    try {
      const response = await fetch(`${backendURL}/api/enrollment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit enrollment');

      await Swal.fire({
        title: 'Success!',
        text: 'Enrollment submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      closeForm();

      emailjs.init('ljrg2HzXzm5dCjmpg');

      const courseName = formData.courseName;
      const email = formData.email;
      const name = formData.name;

      try {
        await emailjs.send('service_a4vpqfh', 'template_mv0vmdn', { courseName, email, name });
      } catch {
        await Swal.fire({
          title: 'Warning!',
          text: 'Enrollment successful, but confirmation email failed.',
          icon: 'warning',
          confirmButtonText: 'OK',
        });
      }

      e.target.reset();
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <section id="enrollment-form" className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Enrollment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" id="courseName" name="courseName" />
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full text-center text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 w-full text-center text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;
