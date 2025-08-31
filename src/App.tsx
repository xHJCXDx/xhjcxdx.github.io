import React, { useState } from 'react';
import { Navbar, Footer, Home, About, Skills, Projects, Contact } from '@/components';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-16 lg:pt-20">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;