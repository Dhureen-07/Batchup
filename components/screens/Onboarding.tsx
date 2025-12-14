import React from 'react';
import { ArrowRight, Hexagon } from 'lucide-react';
import { LiquidBackground, GlassCard } from '../ui/GlassComponents';

interface OnboardingProps {
  onLogin?: () => void;
}

export const OnboardingScreen: React.FC<OnboardingProps> = ({ onLogin }) => {
  return (
    <div className="h-full w-full flex flex-col relative p-6">
      <LiquidBackground />
      
      {/* Header / Brand */}
      <div className="mt-12 flex items-center gap-2 mb-auto z-10">
        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <Hexagon className="w-6 h-6 text-white fill-white/20" />
        </div>
        <span className="text-xl font-bold tracking-tight">BatchUp</span>
      </div>

      {/* Main Content */}
      <div className="z-10 w-full mb-12">
        <h1 className="text-4xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          One Platform.<br/>
          One Login.<br/>
          <span className="text-cyan-400">Zero Friction.</span>
        </h1>
        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
          The unified operating system for your college life. Connect, learn, and build in one place.
        </p>

        {/* Login Card */}
        <GlassCard variant="translucent" className="p-6 space-y-4">
            <div className="space-y-1">
                <label className="text-xs text-slate-400 font-medium ml-1">College Email</label>
                <input 
                    type="email" 
                    placeholder="student@university.edu" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
            </div>
            
            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
                <span>Verify & Continue</span>
                <ArrowRight className="w-4 h-4" />
            </button>
        </GlassCard>

        <p className="text-center text-xs text-slate-500 mt-6">
            Protected by Verified Campus ID Protocol
        </p>
      </div>
    </div>
  );
};
