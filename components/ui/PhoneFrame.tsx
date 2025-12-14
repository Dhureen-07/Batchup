import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  title?: string;
  label?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, title, label }) => {
  return (
    <div className="flex flex-col items-center gap-6">
       {label && (
        <div className="text-center space-y-1">
          <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">{label}</p>
        </div>
      )}
      
      {/* Phone Chassis */}
      <div className="relative mx-auto border-[10px] border-[#1a1b1e] rounded-[3.5rem] h-[800px] w-[390px] shadow-2xl lg:shadow-[0_0_60px_-15px_rgba(34,211,238,0.2)] bg-[#000000] overflow-hidden ring-1 ring-white/10 z-10 transform transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[18px] z-50 flex items-center justify-center pointer-events-none">
          <div className="w-[60px] h-[60%] bg-neutral-900/40 rounded-full blur-[1px]"></div>
        </div>

        {/* Screen Content Area */}
        <div className="h-full w-full bg-[#05070f] relative overflow-hidden text-white font-sans flex flex-col">
          {children}
          
          {/* iOS Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
        </div>

        {/* Glossy Bezel Reflections */}
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none ring-1 ring-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
      </div>
    </div>
  );
};
