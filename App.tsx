import React, { useState } from 'react';
import { OnboardingScreen } from './components/screens/Onboarding';
import { DashboardScreen } from './components/screens/Dashboard';
import { NotesScreen } from './components/screens/Notes';
import { MentorshipScreen } from './components/screens/Mentorship';
import { CareerScreen } from './components/screens/Career';
import { AIBuildScreen } from './components/screens/AIBuild';
import { PrototypeScreen } from './components/screens/Prototype';
import { StudyPlannerScreen } from './components/screens/StudyPlanner';
import { ProfileScreen } from './components/screens/Profile';
import { SettingsScreen } from './components/screens/Settings';
import { AppLayout } from './components/layout/AppLayout';
import { ChatAssistant } from './components/ui/ChatAssistant';
import { ViewState } from './types';

function App() {
  const [activeView, setActiveView] = useState<ViewState>('onboarding');
  const [theme, setTheme] = useState<'glass' | 'contrast'>('glass');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle Login Flow
  if (!isAuthenticated) {
    return (
      <div className="h-screen w-screen bg-midnight text-white overflow-hidden">
        {/* Mock auth wrapper */}
        <div className="h-full w-full max-w-md mx-auto md:max-w-full md:flex md:items-center md:justify-center">
          <div className="w-full h-full md:w-[400px] md:h-[800px] md:border-[10px] md:border-gray-900 md:rounded-[3rem] relative overflow-hidden bg-black shadow-2xl">
            <OnboardingScreen onLogin={() => setIsAuthenticated(true)} />
          </div>
        </div>
      </div>
    );
  }

  const renderScreen = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardScreen />;
      case 'notes': return <NotesScreen />;
      case 'mentors': return <MentorshipScreen />;
      case 'career': return <CareerScreen />;
      case 'build': return <AIBuildScreen />;
      case 'prototype': return <PrototypeScreen />;
      case 'planner': return <StudyPlannerScreen />;
      case 'profile': return <ProfileScreen />;
      case 'settings': return <SettingsScreen theme={theme} setTheme={setTheme} />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <div className={`h-screen w-screen overflow-hidden text-white selection:bg-cyan-500/30 font-sans ${theme === 'contrast' ? 'bg-black' : 'bg-midnight'}`}>
       
       {/* Responsive Layout Shell */}
       <AppLayout activeView={activeView} onNavigate={setActiveView}>
         
         {/* Render the active screen content, constrained width for large screens */}
         <div className="w-full h-full relative overflow-hidden">
            <div className="h-full w-full max-w-7xl mx-auto md:px-8 relative">
               {/* Screen Content */}
               {renderScreen()}
            </div>
         </div>

       </AppLayout>

       {/* Floating AI Chatbot - Always available */}
       <ChatAssistant />

    </div>
  );
}

export default App;
