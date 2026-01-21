
import React from 'react';
import Logo from './Logo';

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full flex bg-white border border-slate-100 rounded-lg overflow-hidden select-none">
      {/* Sidebar Mock */}
      <aside className="w-48 bg-slate-50 border-r border-slate-100 p-4 space-y-6">
        <div className="scale-75 -ml-4 mb-4">
            <Logo />
        </div>
        
        <nav className="space-y-1">
          <div className="bg-[#0051a8] text-white p-2 rounded-md flex items-center gap-2 text-[10px] font-semibold">
            <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
            Dashboard
          </div>
          <div className="p-2 text-slate-400 flex items-center gap-2 text-[10px] font-medium hover:bg-slate-100 rounded-md transition-colors">
            <div className="w-3 h-3 bg-slate-200 rounded-sm"></div>
            Branches
          </div>
          <div className="p-2 text-slate-400 flex items-center gap-2 text-[10px] font-medium hover:bg-slate-100 rounded-md transition-colors">
            <div className="w-3 h-3 bg-slate-200 rounded-sm"></div>
            Stock
          </div>
          <div className="p-2 text-slate-400 flex items-center gap-2 text-[10px] font-medium hover:bg-slate-100 rounded-md transition-colors">
            <div className="w-3 h-3 bg-slate-200 rounded-sm"></div>
            Cards
          </div>
        </nav>
      </aside>

      {/* Main Content Mock */}
      <main className="flex-1 p-6 overflow-hidden">
        <header className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
             <div className="w-3 h-3 bg-slate-100 rounded-full"></div>
             <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full bg-slate-100"></div>
             <div className="w-12 h-2 bg-slate-100 rounded-full"></div>
          </div>
        </header>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Hi Nazeer, what would you like to do today?</h3>
          <p className="text-[10px] text-slate-400">Last login: 26/11/2024 14:39:58</p>
        </div>

        <section className="mb-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Your Quick Access</p>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-slate-100 rounded-lg p-3 flex items-center justify-between hover:bg-[#0051a8]/5 transition-colors cursor-default">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0051a8] flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-700">Manage a Card</span>
                </div>
                <svg className="w-2 h-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* Charts Mock */}
        <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 h-48 flex flex-col justify-end">
                <div className="flex-1 flex items-end justify-around gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 95].map((h, i) => (
                        <div key={i} className="w-full bg-slate-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] text-slate-400 font-bold uppercase">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Card Status</span>
                    <div className="w-2 h-2 rounded-full bg-[#0051a8]"></div>
                </div>
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded p-2 flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="w-8 h-1.5 bg-slate-100 rounded-full"></div>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPreview;
