import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-16 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Institute Courses</h3>
                        <p className="text-sm leading-relaxed">
                            Empowering learners worldwide with quality education and professional courses.
                        </p>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a></li>
                            <li><a href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="space-y-2">
                            <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                               aria-label="Facebook">
                                <i className="fab fa-facebook-f text-sm w-5 h-5 flex items-center justify-center"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                               aria-label="Twitter">
                                <i className="fab fa-twitter text-sm w-5 h-5 flex items-center justify-center"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                               aria-label="Instagram">
                                <i className="fab fa-instagram text-sm w-5 h-5 flex items-center justify-center"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                               aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in text-sm w-5 h-5 flex items-center justify-center"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <p className="text-sm">&copy; 2025 Institute Courses. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="/terms" className="text-sm hover:text-white transition-colors">Terms</a>
                            <a href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</a>
                            <a href="/security" className="text-sm hover:text-white transition-colors">Security</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;