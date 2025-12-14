import React from 'react';
import { Settings, Share2, Award, Medal, GraduationCap, MapPin, Briefcase, Link as LinkIcon, Edit2, ShieldCheck } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative bg-transparent">
      <LiquidBackground />
      
      {/* Top Actions */}
      <div className="pt-8 md:pt-12 px-6 pb-2 flex justify-between items-center z-10 sticky top-0">
          <h1 className="text-2xl font-bold">Profile</h1>
         <div className="flex gap-2">
             <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Share2 className="w-4 h-4 text-white" />
             </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 md:pb-8 z-10 no-scrollbar space-y-6 max-w-4xl mx-auto w-full">
        
        {/* Header Profile */}
        <div className="flex flex-col items-center text-center mt-2">
            <div className="relative">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                    <img src="https://picsum.photos/400/400" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-black" />
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-slate-800 rounded-full border border-slate-600 text-white shadow-lg cursor-pointer hover:bg-slate-700">
                    <Edit2 className="w-3 h-3" />
                </button>
            </div>
            
            <h2 className="text-2xl font-bold text-white mt-4 flex items-center gap-2">
                Dhureen
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </h2>
            <p className="text-slate-400 text-sm mt-1">Electronics and Communication • Class of 2025</p>
            
            <div className="flex gap-4 mt-4">
                 <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GPA 3.8</span>
                 </div>
                 <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>San Francisco</span>
                 </div>
            </div>
        </div>

        {/* Bio */}
        <div className="text-sm text-slate-300 text-center leading-relaxed max-w-lg mx-auto">
            "Passionate about distributed systems and AI. Building tools to help students learn faster. Currently interning at TechCorp."
        </div>

        {/* Skills */}
        <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">Top Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {['React Native', 'Python', 'System Design', 'Figma', 'Public Speaking'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 hover:bg-white/10 hover:border-cyan-500/30 transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full">
             <GlassCard className="p-4 flex flex-col items-center justify-center gap-1">
                <span className="text-2xl font-bold text-white">12</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wide">Projects</span>
             </GlassCard>
             <GlassCard className="p-4 flex flex-col items-center justify-center gap-1">
                <span className="text-2xl font-bold text-white">#42</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wide">Class Rank</span>
             </GlassCard>
        </div>

        {/* Achievements */}
        <div className="max-w-2xl mx-auto w-full">
            <div className="flex justify-between items-end mb-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Achievements</h3>
                <span className="text-[10px] text-cyan-400 cursor-pointer hover:underline">View All</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <GlassCard variant="translucent" className="p-3 flex gap-3 items-center">
                    <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white">Hackathon Winner</h4>
                        <p className="text-xs text-slate-400">Global AI Summit 2024</p>
                    </div>
                </GlassCard>
                 <GlassCard variant="translucent" className="p-3 flex gap-3 items-center">
                    <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <Medal className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white">Top Contributor</h4>
                        <p className="text-xs text-slate-400">Open Source Club</p>
                    </div>
                </GlassCard>
            </div>
        </div>

      </div>
    </div>
  );
};