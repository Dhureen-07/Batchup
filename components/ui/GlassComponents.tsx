import React from 'react';

export const LiquidBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob"></div>
    <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
  </div>
);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'solid' | 'translucent' | 'outline';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, variant = 'solid' }) => {
  const baseStyle = "relative backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg transition-all duration-300";
  
  const variants = {
    solid: "bg-white/[0.03] hover:bg-white/[0.06] shadow-black/20",
    translucent: "bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:border-white/20 shadow-xl",
    outline: "bg-transparent border-white/20 hover:bg-white/[0.02]"
  };

  return (
    <div onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: 'green' | 'amber' | 'cyan' | 'purple' }> = ({ children, color = 'cyan' }) => {
  const colors = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  };
  
  return (
    <span className={`px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-md border ${colors[color]}`}>
      {children}
    </span>
  );
};

export const SectionHeader: React.FC<{ title: string; action?: string }> = ({ title, action }) => (
  <div className="flex justify-between items-end mb-4 px-1">
    <h2 className="text-lg font-semibold text-white tracking-tight">{title}</h2>
    {action && <span className="text-xs text-cyan-400 hover:text-cyan-300 cursor-pointer">{action}</span>}
  </div>
);
