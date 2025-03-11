import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import CourseDetail from './components/CourseDetail';
import ContactSection from './components/ContactSection';
import { MarqueeComponent } from './components/MarqueeComponent';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ScrollToTopButton from './components/ScrollToTopButton';

// Import all policy pages
import TermsOfService from './pages/terms';
import PrivacyPolicy from './pages/privacy';
import RefundPolicy from './pages/refund-policy';
import CookiePolicy from './pages/cookie-policy';
import FAQ from './pages/faq';
import OurTeam from './pages/team';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <AnimatedSection>
                  <HeroSection />
                </AnimatedSection>
                <AnimatedSection>
                  <CoursesSection />
                </AnimatedSection>
                <AnimatedSection>
                  <MarqueeComponent />
                </AnimatedSection>
                <AnimatedSection>
                  <ContactSection />
                </AnimatedSection>
              </>
            } />
            
            {/* Course Detail Page */}
            <Route path="/courses/:courseId" element={
              <AnimatedSection>
                <CourseDetail />
              </AnimatedSection>
            } />

            {/* Policy Pages */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<OurTeam />} />
            
            {/* Support Page (You'll need to create this component) */}
            <Route path="/support" element={
              <div className="min-h-screen flex items-center justify-center">
                <h1>Support Page - Coming Soon</h1>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;