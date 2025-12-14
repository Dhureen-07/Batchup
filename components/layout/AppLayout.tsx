import React from 'react';
import { LayoutGrid, BookOpen, Users, Briefcase, Hammer, BrainCircuit, UserCircle, Settings, Hexagon, LogOut } from 'lucide-react';
import { NavItem, ViewState } from '../../types';

interface AppLayoutProps {
  children: React.ReactNode;
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', icon: LayoutGrid, label: 'Home' },
  { id: 'planner', icon: BrainCircuit, label: 'Plan' },
  { id: 'notes', icon: BookOpen, label: 'Library' },
  { id: 'mentors', icon: Users, label: 'Mentors' },
  { id: 'career', icon: Briefcase, label: 'Career' },
  { id: 'build', icon: Hammer, label: 'Build' },
];

export const AppLayout: React.FC<AppLayoutProps> = ({ children, activeView, onNavigate }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl z-20">
        <div className="p-6 flex items-center gap-3">
           <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Hexagon className="w-6 h-6 text-white fill-white/20" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">BatchUp</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mb-2">Menu</div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeView === item.id 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeView === item.id ? 'fill-cyan-500/20' : ''}`} />
              <span className="font-medium text-sm">{item.label}</span>
              {activeView === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
              )}
            </button>
          ))}

          <div className="pt-8 text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mb-2">System</div>
          
          <button
            onClick={() => onNavigate('prototype')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
               activeView === 'prototype' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">Prototype Lab</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer" onClick={() => onNavigate('profile')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 p-0.5">
               <img src="https://picsum.photos/400/400" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-black" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">Dhureen</h4>
              <p className="text-xs text-slate-400 truncate">Electronics & Comm.</p>
            </div>
            <Settings className="w-4 h-4 text-slate-400 hover:text-white" onClick={(e) => { e.stopPropagation(); onNavigate('settings'); }} />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[84px] bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 px-4 pb-5 pt-3 flex justify-between items-center">
        {NAV_ITEMS.slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeView === item.id ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <item.icon className={`w-6 h-6 ${activeView === item.id ? 'fill-cyan-500/20' : ''}`} strokeWidth={activeView === item.id ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
         <button
            onClick={() => onNavigate('profile')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeView === 'profile' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <UserCircle className={`w-6 h-6 ${activeView === 'profile' ? 'fill-cyan-500/20' : ''}`} strokeWidth={activeView === 'profile' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">Me</span>
          </button>
      </nav>
    </div>
  );
};