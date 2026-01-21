
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
      {/* Left Section: Login Form */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <LoginForm onLoginSuccess={handleLogin} />
        </div>
        
        <footer className="mt-8 text-sm text-gray-400">
          © 2024 Mercator Technologies Ltd. All rights reserved.
        </footer>
      </div>

      {/* Right Section: Hero Content */}
      <div className="hidden md:flex w-full md:w-[55%] lg:w-[60%] bg-[#f0f7ff] p-4 lg:p-8">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
