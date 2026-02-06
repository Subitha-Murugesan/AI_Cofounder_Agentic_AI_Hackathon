import { LayoutDashboard, TrendingUp, Users, Target, DollarSign, Rocket } from 'lucide-react';
import { Progress } from '@/app/components/ui/progress';

interface Step {
  id: number;
  name: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface SideNavigationProps {
  activeStep: number;
  onStepChange: (step: number) => void;
  completionPercentage: number;
}

export function SideNavigation({ activeStep, onStepChange, completionPercentage }: SideNavigationProps) {
  const steps: Step[] = [
    { id: 1, name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, completed: true },
    { id: 2, name: 'Market', icon: <TrendingUp className="w-5 h-5" />, completed: true },
    { id: 3, name: 'Users', icon: <Users className="w-5 h-5" />, completed: false },
    { id: 4, name: 'Competition', icon: <Target className="w-5 h-5" />, completed: false },
    { id: 5, name: 'Revenue', icon: <DollarSign className="w-5 h-5" />, completed: false },
    { id: 6, name: 'MVP Plan', icon: <Rocket className="w-5 h-5" />, completed: false },
  ];

  return (
    <aside className="w-20 border-r border-border bg-card flex flex-col items-center py-6">
      {/* Progress Indicator */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <div className="relative w-14 h-14">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - completionPercentage / 100)}`}
              className="text-accent transition-all duration-500"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-foreground">{completionPercentage}%</span>
          </div>
        </div>
        <span className="text-[10px] text-muted-foreground">Complete</span>
      </div>

      {/* Step Icons */}
      <nav className="flex flex-col gap-2 flex-1">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepChange(step.id)}
            className={`
              relative flex flex-col items-center gap-1 p-3 rounded-lg transition-all
              ${activeStep === step.id 
                ? 'bg-accent text-accent-foreground' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
          >
            {step.icon}
            <span className="text-[10px] font-medium text-center leading-tight">{step.name}</span>
            
            {/* Completion Indicator */}
            {step.completed && activeStep !== step.id && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
