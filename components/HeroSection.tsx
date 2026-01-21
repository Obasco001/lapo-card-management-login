
import React from 'react';
import DashboardPreview from './DashboardPreview';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
      {/* Decorative blue curve in the corner */}
      <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-[#0051a8]"></div>
      </div>

      <div className="px-12 pt-20 pb-8 flex-shrink-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-lg mb-4">
          The simplest way to manage your cards
        </h2>
        <p className="text-lg text-slate-500">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex-1 px-12 pb-12 overflow-hidden relative group">
        <div className="w-full h-full bg-slate-50 rounded-2xl border border-slate-100 shadow-inner overflow-hidden p-6 transition-transform duration-700 group-hover:scale-[1.02]">
            <DashboardPreview />
        </div>
        
        {/* Floating Stat Card (Replicating the one in Figma) */}
        <div className="absolute left-8 bottom-1/3 w-64 bg-white rounded-xl shadow-2xl p-5 border border-slate-100 animate-bounce-slow">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                <span className="text-sm font-medium text-slate-400">Total Active Cards</span>
            </div>
            <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-slate-900">26,478</span>
                <div className="flex items-center text-green-500 text-sm font-bold">
                    <svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +9%
                    <span className="text-slate-400 font-normal ml-1">this month</span>
                </div>
            </div>
        </div>

        {/* Cardinfra Logo at Bottom Right */}
        <div className="absolute bottom-10 right-10 flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Powered By</span>
            <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-[#004d8c] flex items-center justify-center rounded-sm">
                    <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-current">
                        <path d="M20 50 L50 20 L80 50 L50 80 Z" />
                    </svg>
                </div>
                <span className="text-lg font-black text-[#004d8c] italic tracking-tight">cardinfra.</span>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
