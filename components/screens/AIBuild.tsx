import React from 'react';
import { Sparkles, Cpu, Zap, Database, ArrowDown, Bot, Search } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

export const AIBuildScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative bg-transparent">
      {/* Darker tech background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-80 pointer-events-none"></div>
      
      <div className="pt-8 md:pt-12 px-6 pb-6 z-10 flex justify-between items-end">
         <div>
            <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">Powered by Gemini</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Build Studio</h1>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 md:pb-8 z-10 no-scrollbar space-y-6">
        
        {/* Visual Pipeline */}
        <div className="relative py-4 max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
            
            <div className="space-y-6">
                {/* Node 1 */}
                <GlassCard variant="solid" className="ml-12 p-4 border-l-4 border-l-blue-500 relative">
                    <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-blue-500 z-10"></div>
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2 text-blue-400">
                            <Database className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Data Ingestion</span>
                        </div>
                        <span className="text-[10px] text-slate-500">120ms</span>
                    </div>
                    <p className="text-sm text-slate-300">Processing raw campus data and user interaction logs.</p>
                </GlassCard>

                {/* Node 2 */}
                <GlassCard variant="solid" className="ml-12 p-4 border-l-4 border-l-cyan-500 relative shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
                     <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"></div>
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Cpu className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">AI Processing</span>
                        </div>
                        <Badge color="cyan">Active</Badge>
                    </div>
                    <p className="text-sm text-slate-300">Gemini 1.5 Pro analyzing learning patterns for optimization.</p>
                    <div className="mt-3 bg-black/40 rounded p-2 text-[10px] font-mono text-cyan-200/70 border border-white/5">
                        {`> optimizing_path_vectors...`} <br/>
                        {`> generating_insight_graph...`} <br/>
                        {`> confidence_score: 98.4%`}
                    </div>
                </GlassCard>

                {/* Node 3 */}
                <GlassCard variant="solid" className="ml-12 p-4 border-l-4 border-l-purple-500 relative">
                     <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 z-10"></div>
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2 text-purple-400">
                            <Zap className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Student Insight</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-300">Delivering personalized recommendations to frontend.</p>
                </GlassCard>
            </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <GlassCard className="p-4 flex flex-col items-center justify-center gap-3 text-center border-dashed border-white/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer">
                <Bot className="w-8 h-8 text-slate-400" />
                <span className="text-xs font-medium text-slate-300">Auto-Verifier Bot</span>
            </GlassCard>
             <GlassCard className="p-4 flex flex-col items-center justify-center gap-3 text-center border-dashed border-white/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer">
                <Search className="w-8 h-8 text-slate-400" />
                <span className="text-xs font-medium text-slate-300">Smart Indexer</span>
            </GlassCard>
        </div>

      </div>
    </div>
  );
};
