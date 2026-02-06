import { RefreshCw, Target, Lightbulb, GitCompare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ActionBarProps {
  ideaTitle?: string;
}

export function ActionBar({ ideaTitle = 'AI Interview Prep Coach' }: ActionBarProps) {
  return (
    <div className="border-t border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refine Idea
          </Button>
          <Button variant="outline" size="sm">
            <Target className="w-4 h-4 mr-2" />
            Test a Niche
          </Button>
          <Button variant="outline" size="sm">
            <Lightbulb className="w-4 h-4 mr-2" />
            Generate MVP Plan
          </Button>
          <Button variant="outline" size="sm">
            <GitCompare className="w-4 h-4 mr-2" />
            Compare with Another Idea
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Analyzing: <span className="font-medium text-foreground">{ideaTitle}</span></span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Last updated: Just now</span>
        </div>
      </div>
    </div>
  );
}