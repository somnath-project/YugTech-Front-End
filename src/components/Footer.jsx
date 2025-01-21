import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Institute Courses. All Rights Reserved.</p>
                <div className="mt-4">
                    <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6">
                        <li><a href="/terms" className="hover:underline">Terms and Policies</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="hover:underline">Terms Of Service</a></li>
                        <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
                        <li><a href="/team" className="hover:underline">Team</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div className="mt-6">
                    <p>Follow us:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
