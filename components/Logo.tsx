
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Stylized Hands holding a person icon */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#006838]">
          <path d="M20 70 Q 50 100 80 70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M30 60 Q 50 85 70 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="40" r="12" fill="#f58220" />
          <path d="M35 55 Q 50 65 65 55" fill="none" stroke="#f58220" strokeWidth="4" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight text-[#f58220]">LAPO</span>
        <span className="text-[10px] font-semibold text-[#006838] uppercase tracking-tighter">Microfinance Bank</span>
        <span className="text-[8px] text-[#006838] italic">...improving lives</span>
      </div>
    </div>
  );
};

export default Logo;
