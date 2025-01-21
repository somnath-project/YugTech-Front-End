import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';
import EnrollmentForm from './components/EnrollmentForm';
import { MarqueeComponent } from './components/MarqueeComponent';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setShowEnrollmentForm(true);
  };

  const closeEnrollmentForm = () => {
    setSelectedCourse(null);
    setShowEnrollmentForm(false);
  };

  return (
    <div>
     
       <Header />
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <CoursesSection selectCourse={handleSelectCourse} />
      </AnimatedSection>
      <AnimatedSection>
        <MarqueeComponent />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      {showEnrollmentForm && (
        <EnrollmentForm
          closeForm={closeEnrollmentForm}
          selectedCourse={selectedCourse}
        />
      )}
      <AnimatedSection>
      <Footer />
      </AnimatedSection>
      
    </div>
  );
};

export default App;