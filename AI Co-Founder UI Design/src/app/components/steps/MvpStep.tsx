import { Rocket, CheckCircle2, Circle, Clock, Target } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const features = [
  {
    id: 1,
    name: 'Basic mock interview (3 common questions)',
    category: 'must-have',
    effort: 'High',
  },
  {
    id: 2,
    name: 'AI speech-to-text transcription',
    category: 'must-have',
    effort: 'Medium',
  },
  {
    id: 3,
    name: 'Simple feedback scoring (1-5 scale)',
    category: 'must-have',
    effort: 'Medium',
  },
  {
    id: 4,
    name: 'Basic user account and auth',
    category: 'must-have',
    effort: 'Medium',
  },
  {
    id: 5,
    name: 'Interview history tracking',
    category: 'must-have',
    effort: 'Low',
  },
  {
    id: 6,
    name: 'Detailed AI feedback breakdown',
    category: 'nice-to-have',
    effort: 'High',
  },
  {
    id: 7,
    name: 'Custom question library',
    category: 'nice-to-have',
    effort: 'Medium',
  },
  {
    id: 8,
    name: 'Progress analytics dashboard',
    category: 'nice-to-have',
    effort: 'High',
  },
  {
    id: 9,
    name: 'Mobile app',
    category: 'nice-to-have',
    effort: 'Very High',
  },
];

const validationChecklist = [
  { id: 1, text: '30+ student interviews about pain points', completed: false },
  { id: 2, text: 'Landing page with 100+ email signups', completed: false },
  { id: 3, text: 'Beta test with 20 students during recruiting season', completed: false },
  { id: 4, text: 'Validate $29/mo price point with 10+ users', completed: false },
  { id: 5, text: 'Measure satisfaction score (target: 4.2+/5)', completed: false },
];

export function MvpStep() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - MVP Recommendation */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">MVP Strategy</h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Recommended Approach</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Start with a web-based mock interview tool covering 3-5 common behavioral questions. Use existing AI APIs (OpenAI, Assembly AI) to minimize development time. Focus on proving students will use and pay for AI feedback.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Launch during recruiting season (August-October for fall recruiting) when student demand peaks. Target 20 beta users at one university first.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Feature Prioritization</h3>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <h4 className="text-sm font-semibold text-foreground">Must-Have Features</h4>
            </div>
            <ul className="space-y-2">
              {features.filter(f => f.category === 'must-have').map((feature) => (
                <li key={feature.id} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-foreground">{feature.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">({feature.effort})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-muted"></div>
              <h4 className="text-sm font-semibold text-foreground">Nice-to-Have Features</h4>
            </div>
            <ul className="space-y-2">
              {features.filter(f => f.category === 'nice-to-have').map((feature) => (
                <li key={feature.id} className="flex items-start gap-3 text-sm">
                  <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-muted-foreground">{feature.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">({feature.effort})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You can build a working MVP with just the must-haves using no-code tools or simple React + OpenAI integration. Don't build analytics or mobile until you validate core value.
          </p>
        </div>
      </div>

      {/* Right Panel - Validation Plan */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Validation Checklist</h3>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="space-y-4">
              {validationChecklist.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    item.completed 
                      ? 'bg-accent border-accent' 
                      : 'border-muted-foreground/30'
                  }`}>
                    {item.completed && <CheckCircle2 className="w-3 h-3 text-accent-foreground" />}
                  </div>
                  <span className={`text-sm ${
                    item.completed ? 'text-muted-foreground line-through' : 'text-foreground'
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Time-to-Validation</h4>
              <p className="text-2xl font-semibold text-accent mb-2">~3 weeks</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You can test this idea in about three weeks with the right timing during recruiting season.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Validation Sprint Plan</h3>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">1</span>
                </div>
                <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm font-semibold text-foreground mb-1">Week 1: Research</p>
                <p className="text-xs text-muted-foreground">Interview 30 students, validate pain points and pricing</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">2</span>
                </div>
                <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm font-semibold text-foreground mb-1">Week 2: Landing Page + MVP</p>
                <p className="text-xs text-muted-foreground">Build simple page, create basic mock interview prototype</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">3</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground mb-1">Week 3: Beta Testing</p>
                <p className="text-xs text-muted-foreground">Run beta with 20 students, collect feedback and measure NPS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Success Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Beta signup rate</span>
              <span className="text-sm font-semibold text-foreground">&gt; 15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">User satisfaction (NPS)</span>
              <span className="text-sm font-semibold text-foreground">&gt; 40</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Willingness to pay $29/mo</span>
              <span className="text-sm font-semibold text-foreground">&gt; 50%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Repeat usage (2+ sessions)</span>
              <span className="text-sm font-semibold text-foreground">&gt; 70%</span>
            </div>
          </div>
        </div>

        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
          <Rocket className="w-5 h-5 mr-2" />
          Start Validation Sprint
        </Button>
      </div>
    </div>
  );
}
