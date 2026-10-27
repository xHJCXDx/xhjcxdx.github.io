import React, { useState } from 'react';
import { Navbar, Footer, Home, About, Skills, Projects, Contact } from '@/components';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

    return (
      <div className="min-h-screen bg-white dark:bg-off-black text-charcoal dark:text-warm-gray overflow-x-hidden transition-colors duration-300">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-20 lg:pt-24">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

export default App;