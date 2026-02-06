import { ArrowRight, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { InsightModule } from '@/app/components/InsightModule';

interface OverviewStepProps {
  ideaStatement: string;
}

export function OverviewStep({ ideaStatement }: OverviewStepProps) {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - AI Insights */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Your Idea</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">Original description</p>
            <p className="text-foreground leading-relaxed">{ideaStatement}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">AI-Generated Definition</h3>
          <div className="bg-gradient-to-br from-accent/5 to-accent-violet/5 border border-accent/20 rounded-lg p-6">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              A SaaS platform offering AI-powered mock interviews with real-time feedback, helping students and early professionals build interview confidence and improve their performance through personalized coaching.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Insights</h3>
          <div className="space-y-3">
            <InsightModule 
              type="opportunity"
              title="Interview preparation market growing at 15% annually, driven by competitive job market and remote hiring"
              confidence="high"
            />
            <InsightModule 
              type="differentiation"
              title="AI-powered personalized feedback is a strong differentiator from generic video practice tools"
              confidence="high"
            />
            <InsightModule 
              type="risk"
              title="User acquisition requires trust-building; students may prefer free alternatives initially"
              confidence="medium"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Visual Dashboard */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Snapshot Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Demand Score</span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <div className="text-3xl font-semibold text-foreground">8.2</div>
              <div className="text-xs text-accent mt-1">Very Strong</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Growth Signal</span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <div className="text-3xl font-semibold text-foreground">+15%</div>
              <div className="text-xs text-accent mt-1">Growing</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Competition</span>
                <AlertTriangle className="w-4 h-4 text-warning" />
              </div>
              <div className="text-3xl font-semibold text-foreground">Medium</div>
              <div className="text-xs text-warning mt-1">Moderate</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Viability Score</span>
                <Lightbulb className="w-4 h-4 text-accent-violet" />
              </div>
              <div className="text-3xl font-semibold text-foreground">7.8</div>
              <div className="text-xs text-accent-violet mt-1">Strong</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Value Flow</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <p className="text-sm font-medium text-foreground">Problem</p>
                <p className="text-xs text-muted-foreground mt-1">Interview anxiety & lack of practice</p>
              </div>

              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mx-2" />

              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-lg bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center mb-2">
                  <Lightbulb className="w-8 h-8 text-accent-violet" />
                </div>
                <p className="text-sm font-medium text-foreground">Solution</p>
                <p className="text-xs text-muted-foreground mt-1">AI mock interviews + feedback</p>
              </div>

              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mx-2" />

              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Impact</p>
                <p className="text-xs text-muted-foreground mt-1">Better interviews, more offers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The interview prep market is growing steadily with clear demand from students and professionals. Your AI-powered approach offers strong differentiation, but you'll need to build trust and demonstrate value early.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Dig deeper
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Explain simply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
