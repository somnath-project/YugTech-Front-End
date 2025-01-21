import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendURL= import.meta.env.VITE_BACKEND_URL;

    try {
      const response = await fetch(`${backendURL}/api/contactform`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire("Success", "Message Send successfully!", "success");
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <section id="contact" className="container mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 flex-1 space-y-4 mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope text-indigo-600"></i>
            <p className="text-gray-600">
              <strong>Email:</strong> contact@institute.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone text-indigo-600"></i>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 8376556432
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt text-indigo-600"></i>
            <p className="text-gray-600">
              <strong>Location:</strong> Nashik
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-clock text-indigo-600"></i>
            <p className="text-gray-600">
              <strong>Timings:</strong> Monday to Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-life-ring text-indigo-600"></i>
            <p className="text-gray-600">
              <strong>Support:</strong> For assistance, please email support@institute.com
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 flex-1">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 w-full text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
