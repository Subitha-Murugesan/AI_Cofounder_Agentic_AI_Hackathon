import { Plus, TrendingUp, Clock, Eye, RefreshCw, GitCompare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ValidationIdea {
  id: string;
  title: string;
  description: string;
  viabilityScore: number;
  status: 'completed' | 'in-progress' | 'draft';
  lastUpdated: string;
  completionPercentage: number;
}

interface DashboardProps {
  onStartNewValidation: () => void;
  onViewIdea: (id: string) => void;
  recentValidations: ValidationIdea[];
}

const statusColors = {
  completed: 'bg-accent text-accent-foreground',
  'in-progress': 'bg-warning text-warning-foreground',
  draft: 'bg-muted text-muted-foreground',
};

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  draft: 'Draft',
};

export function Dashboard({ onStartNewValidation, onViewIdea, recentValidations }: DashboardProps) {
  return (
    <div className="h-full overflow-auto p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-3">
            What do you want to validate today?
          </h1>
          <p className="text-lg text-muted-foreground">
            Turn your startup ideas into data-driven decisions
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mb-12">
          <Button 
            onClick={onStartNewValidation}
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Validate a New Startup Idea
          </Button>
        </div>

        {/* Recent Validations */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-6">Recent Validations</h2>
          
          {recentValidations.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No validations yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start your first idea validation to see it here
              </p>
              <Button 
                onClick={onStartNewValidation}
                variant="outline"
              >
                Get Started
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentValidations.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[idea.status]}`}>
                      {statusLabels[idea.status]}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {idea.lastUpdated}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{idea.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {idea.description}
                  </p>

                  {/* Score and Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Viability Score</span>
                      <span className="text-lg font-semibold text-accent">{idea.viabilityScore}/10</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent rounded-full h-2 transition-all" 
                        style={{ width: `${idea.completionPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {idea.completionPercentage}% complete
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => onViewIdea(idea.id)}
                      variant="default"
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Analysis
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <GitCompare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
