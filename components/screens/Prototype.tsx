import React from 'react';
import { Beaker, Settings, Play, ToggleRight } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

export const PrototypeScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative bg-[#0a0a0a]">
       {/* Grid overlay for 'blueprint' feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      <div className="pt-8 md:pt-12 px-6 pb-6 z-10 relative">
          <Badge color="amber">Internal Build v0.9.4</Badge>
         <h1 className="text-2xl font-bold mt-3">Prototype Lab</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 md:pb-8 z-10 no-scrollbar space-y-6 relative">
        
        {/* Experimental Features */}
        <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Experimental Modules</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassCard variant="outline" className="p-4 border-amber-500/20 bg-amber-900/5">
                  <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-amber-500">
                          <Beaker className="w-4 h-4" />
                          <span className="font-semibold text-sm">AR Campus Nav</span>
                      </div>
                      <ToggleRight className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-xs text-slate-400">Augmented reality overlay for finding classrooms.</p>
              </GlassCard>

              <GlassCard variant="outline" className="p-4">
                  <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-slate-300">
                          <Beaker className="w-4 h-4" />
                          <span className="font-semibold text-sm">Voice Notes Summary</span>
                      </div>
                      <ToggleRight className="w-6 h-6 text-slate-600" />
                  </div>
                  <p className="text-xs text-slate-500">Auto-transcribe and summarize lectures.</p>
              </GlassCard>
            </div>
        </div>

        {/* Feature Tests */}
        <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Stress Tests</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 <button className="h-20 border border-white/10 rounded-xl bg-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 active:scale-95 transition-all">
                    <Play className="w-5 h-5 text-white" />
                    <span className="text-xs text-slate-400">Load Library</span>
                 </button>
                  <button className="h-20 border border-white/10 rounded-xl bg-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 active:scale-95 transition-all">
                    <Settings className="w-5 h-5 text-white" />
                    <span className="text-xs text-slate-400">Reset State</span>
                 </button>
            </div>
        </div>

        {/* Console Log placeholder */}
        <div className="bg-black border border-white/10 rounded-xl p-3 font-mono text-[10px] text-green-400 h-32 overflow-hidden shadow-inner">
            <p className="opacity-50">Start session 293...</p>
            <p>Module 'AR_NAV' loaded.</p>
            <p>Connection established (34ms)</p>
            <p className="text-amber-400">Warn: Low memory in render thread</p>
            <p>Listening for events...</p>
        </div>

      </div>
    </div>
  );
};
