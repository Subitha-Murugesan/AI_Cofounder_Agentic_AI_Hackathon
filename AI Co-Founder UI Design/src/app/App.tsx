import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { SideNavigation } from '@/app/components/SideNavigation';
import { Dashboard } from '@/app/components/Dashboard';
import { EmptyState } from '@/app/components/EmptyState';
import { IdeaInput } from '@/app/components/IdeaInput';
import { OverviewStep } from '@/app/components/steps/OverviewStep';
import { MarketStep } from '@/app/components/steps/MarketStep';
import { UsersStep } from '@/app/components/steps/UsersStep';
import { CompetitionStep } from '@/app/components/steps/CompetitionStep';
import { RevenueStep } from '@/app/components/steps/RevenueStep';
import { MvpStep } from '@/app/components/steps/MvpStep';
import { ActionBar } from '@/app/components/ActionBar';

type AppState = 'dashboard' | 'input' | 'analyzing' | 'results';

interface ValidationIdea {
  id: string;
  title: string;
  description: string;
  viabilityScore: number;
  status: 'completed' | 'in-progress' | 'draft';
  lastUpdated: string;
  completionPercentage: number;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>('dashboard');
  const [activeStep, setActiveStep] = useState(1);
  const [ideaStatement, setIdeaStatement] = useState('');
  const [currentIdeaId, setCurrentIdeaId] = useState<string | null>(null);

  // Mock data for recent validations
  const [recentValidations] = useState<ValidationIdea[]>([
    {
      id: '1',
      title: 'AI Interview Prep Coach',
      description: 'An AI-powered platform that helps students and early-career professionals prepare for interviews through personalized mock interviews, instant feedback, and skill improvement tracking.',
      viabilityScore: 7.8,
      status: 'completed',
      lastUpdated: '2 hours ago',
      completionPercentage: 100,
    },
  ]);

  const handleStartNewValidation = () => {
    setAppState('input');
    setCurrentIdeaId(null);
    setActiveStep(1);
  };

  const handleViewIdea = (id: string) => {
    const idea = recentValidations.find(v => v.id === id);
    if (idea) {
      setIdeaStatement(idea.description);
      setCurrentIdeaId(id);
      setAppState('results');
      setActiveStep(1);
    }
  };

  const handleGoHome = () => {
    setAppState('dashboard');
    setActiveStep(1);
  };

  const handleIdeaSubmit = (idea: string) => {
    setIdeaStatement(idea);
    setAppState('analyzing');
    
    // Simulate AI processing
    setTimeout(() => {
      setAppState('results');
    }, 2000);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return <OverviewStep ideaStatement={ideaStatement} />;
      case 2:
        return <MarketStep />;
      case 3:
        return <UsersStep />;
      case 4:
        return <CompetitionStep />;
      case 5:
        return <RevenueStep />;
      case 6:
        return <MvpStep />;
      default:
        return <OverviewStep ideaStatement={ideaStatement} />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      {/* Top Header */}
      <Header 
        showHomeButton={appState === 'results' || appState === 'analyzing'}
        onHomeClick={handleGoHome}
      />

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Show navigation only when in results state */}
        {appState === 'results' && (
          <SideNavigation 
            activeStep={activeStep}
            onStepChange={setActiveStep}
            completionPercentage={100}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {appState === 'dashboard' && (
            <Dashboard 
              onStartNewValidation={handleStartNewValidation}
              onViewIdea={handleViewIdea}
              recentValidations={recentValidations}
            />
          )}

          {appState === 'input' && (
            <IdeaInput onSubmit={handleIdeaSubmit} />
          )}

          {appState === 'analyzing' && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative">
                <div className="w-24 h-24 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-8">Analyzing your idea...</h3>
              <p className="text-sm text-muted-foreground mt-2">This will take a few moments</p>
            </div>
          )}

          {appState === 'results' && (
            <>
              <div className="flex-1 overflow-hidden">
                {renderStepContent()}
              </div>
              <ActionBar />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
