import React from 'react';
import { CheckCircle2, Download, Star, Filter, FolderOpen, ArrowLeft } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

const subjects = [
    { title: "Data Structures & Algo", code: "CS-302", rating: 4.9, downloads: "2.4k", tags: ["Topper Notes", "Exam Ready"], verified: true },
    { title: "Digital Logic Design", code: "CS-304", rating: 4.5, downloads: "1.1k", tags: ["Lab Manual"], verified: true },
    { title: "Engineering Math III", code: "MA-301", rating: 4.8, downloads: "3.2k", tags: ["Formula Sheet", "Exam Ready"], verified: true },
    { title: "Operating Systems", code: "CS-401", rating: 4.7, downloads: "1.8k", tags: ["Exam Ready"], verified: true },
];

export const NotesScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative">
      <LiquidBackground />
      
      {/* Navbar */}
      <div className="pt-8 md:pt-12 px-6 pb-4 flex items-center gap-4 z-10 sticky top-0">
         <h1 className="text-2xl font-bold">Library</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-24 md:pb-8 z-10 no-scrollbar space-y-6">
        
        {/* Semester Selector */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {['Sem 1', 'Sem 3', 'Sem 5', 'Sem 7'].map((sem, i) => (
                <button key={sem} className={`px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-all ${i === 1 ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>
                    {sem}
                </button>
            ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <GlassCard variant="solid" className="p-3 flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                    <FolderOpen className="w-5 h-5" />
                </div>
                <div className="text-sm">
                    <p className="font-semibold">CSE Core</p>
                    <p className="text-[10px] text-slate-400">12 Files</p>
                </div>
            </GlassCard>
             <GlassCard variant="solid" className="p-3 flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                    <Filter className="w-5 h-5" />
                </div>
                <div className="text-sm">
                    <p className="font-semibold">Electives</p>
                    <p className="text-[10px] text-slate-400">4 Files</p>
                </div>
            </GlassCard>
        </div>

        {/* List */}
        <div>
             <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-semibold tracking-tight">Verified Materials</h2>
                <span className="text-xs text-slate-400">Sort by: Popular</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((sub, i) => (
                    <GlassCard key={i} variant="translucent" className="p-5 flex flex-col gap-3 group">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center font-bold text-xs text-slate-300">
                                    {sub.code.split('-')[1]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-white">{sub.title}</h3>
                                        {sub.verified && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-0.5">{sub.code} • Prof. Anderson</p>
                                </div>
                            </div>
                            <button className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="h-px w-full bg-white/5"></div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {sub.tags.map(tag => (
                                    <Badge key={tag} color={tag.includes('Exam') ? 'amber' : 'green'}>{tag}</Badge>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-300">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span>{sub.rating}</span>
                                <span className="text-slate-500">({sub.downloads})</span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
