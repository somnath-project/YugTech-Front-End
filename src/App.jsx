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

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
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
            
            <Route path="/courses/:courseId" element={
              <AnimatedSection>
                <CourseDetail />
             </AnimatedSection>
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