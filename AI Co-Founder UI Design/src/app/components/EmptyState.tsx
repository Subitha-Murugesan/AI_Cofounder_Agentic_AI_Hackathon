import { Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface EmptyStateProps {
  onStartValidation: () => void;
}

export function EmptyState({ onStartValidation }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      {/* Abstract Illustration */}
      <div className="mb-8 relative">
        <div className="w-64 h-64 relative">
          {/* Animated circles representing ideas forming into charts */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-accent/10 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-accent-violet/10 animate-pulse delay-150"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-accent" />
          </div>
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-3xl font-semibold text-foreground mb-3">
        Turn uncertainty into clarity
      </h2>

      {/* Subtext */}
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        AI-powered validation for first-time founders
      </p>

      {/* CTA */}
      <Button 
        onClick={onStartValidation}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg h-auto"
      >
        Validate Your First Idea
      </Button>

      {/* Supporting text */}
      <p className="text-sm text-muted-foreground mt-6">
        Get actionable insights in minutes
      </p>
    </div>
  );
}
