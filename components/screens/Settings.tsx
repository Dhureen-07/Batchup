import React from 'react';
import { ArrowLeft, Bell, Shield, Eye, Smartphone, ChevronRight } from 'lucide-react';
import { LiquidBackground, GlassCard } from '../ui/GlassComponents';

interface SettingsScreenProps {
  theme: 'glass' | 'contrast';
  setTheme: (theme: 'glass' | 'contrast') => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ theme, setTheme }) => {
  return (
    <div className={`h-full w-full flex flex-col relative transition-colors duration-500 ${theme === 'contrast' ? 'bg-black' : 'bg-transparent'}`}>
      {theme === 'glass' && <LiquidBackground />}
      
      {/* Navbar */}
      <div className="pt-8 md:pt-12 px-6 pb-4 flex items-center gap-4 z-10 sticky top-0">
         <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 z-10 no-scrollbar space-y-8 max-w-4xl mx-auto w-full">
        
        {/* Appearance Section */}
        <div>
             <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 ml-1">Appearance</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Glass Theme Option */}
                 <button 
                    onClick={() => setTheme('glass')}
                    className={`relative p-1 rounded-2xl border-2 transition-all duration-300 text-left ${theme === 'glass' ? 'border-cyan-500 bg-white/5' : 'border-transparent bg-black/40'}`}
                 >
                     <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-900 to-slate-900 overflow-hidden relative mb-2 border border-white/10">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
                         <div className="absolute bottom-2 left-2 right-2 h-2 bg-white/10 rounded-full"></div>
                         <div className="absolute bottom-6 left-2 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"></div>
                     </div>
                     <div className="flex justify-between items-center px-2 pb-1">
                        <span className={`text-sm font-medium ${theme === 'glass' ? 'text-white' : 'text-slate-400'}`}>Liquid Glass</span>
                        {theme === 'glass' && <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>}
                     </div>
                 </button>

                 {/* High Contrast Option */}
                 <button 
                    onClick={() => setTheme('contrast')}
                    className={`relative p-1 rounded-2xl border-2 transition-all duration-300 text-left ${theme === 'contrast' ? 'border-emerald-400 bg-white/5' : 'border-transparent bg-black/40'}`}
                 >
                     <div className="h-24 rounded-xl bg-black overflow-hidden relative mb-2 border border-slate-800">
                         <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                             <div className="w-16 h-4 bg-white rounded-md"></div>
                             <div className="w-10 h-4 bg-emerald-400 rounded-md"></div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center px-2 pb-1">
                        <span className={`text-sm font-medium ${theme === 'contrast' ? 'text-white' : 'text-slate-400'}`}>High Contrast</span>
                        {theme === 'contrast' && <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>}
                     </div>
                 </button>
             </div>
             
             {theme === 'contrast' && (
                 <div className="mt-3 p-3 rounded-lg bg-emerald-900/20 border border-emerald-500/20 flex gap-3 items-center">
                     <Eye className="w-4 h-4 text-emerald-400" />
                     <p className="text-xs text-emerald-100">High Contrast mode enabled. Shadows removed, text legibility maximized for low light.</p>
                 </div>
             )}
        </div>

        {/* General Settings List */}
        <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">General</h2>
            
            <GlassCard className="p-0 overflow-hidden">
                <SettingRow icon={Bell} title="Notifications" value="On" />
                <div className="h-px bg-white/5 mx-4"></div>
                <SettingRow icon={Shield} title="Privacy & Security" />
                <div className="h-px bg-white/5 mx-4"></div>
                <SettingRow icon={Smartphone} title="App Icon" value="Default" />
            </GlassCard>
        </div>
        
        <div className="text-center pt-8">
            <p className="text-xs text-slate-600">BatchUp v1.1.0 (Production Build)</p>
        </div>

      </div>
    </div>
  );
};

const SettingRow: React.FC<{ icon: React.ElementType, title: string, value?: string }> = ({ icon: Icon, title, value }) => (
    <div className="flex items-center justify-between p-4 hover:bg-white/5 cursor-pointer transition-colors group">
        <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-white/5 text-slate-300 group-hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-200">{title}</span>
        </div>
        <div className="flex items-center gap-2">
            {value && <span className="text-xs text-slate-500">{value}</span>}
            <ChevronRight className="w-4 h-4 text-slate-600" />
        </div>
    </div>
);
