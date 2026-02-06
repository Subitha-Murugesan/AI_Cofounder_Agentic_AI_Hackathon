import { Target, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const competitors = [
  { name: 'LeetCode', x: 75, y: 35, z: 350 },
  { name: 'Pramp', x: 65, y: 55, z: 250 },
  { name: 'InterviewCake', x: 70, y: 40, z: 280 },
  { name: 'Big Interview', x: 60, y: 50, z: 220 },
  { name: 'Exponent', x: 55, y: 60, z: 200 },
  { name: 'Career coaches', x: 40, y: 45, z: 180 },
  { name: 'Your AI Coach', x: 35, y: 80, z: 100, fill: 'hsl(var(--accent))' },
];

export function CompetitionStep() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - AI Analysis */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Competitive Landscape</h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Market Position</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The interview prep space has established players focusing on technical interviews (LeetCode) and peer practice (Pramp), but few offer personalized AI feedback for behavioral and soft-skill interviews—your key differentiator.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most solutions are either too expensive (career coaches at $100+/session) or lack personalization (generic video recording tools). This creates a clear gap for AI-powered, affordable, personalized coaching.
            </p>
          </div>
        </div>

        <div className="bg-warning/5 border border-warning/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Saturation Analysis</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                This market is <span className="font-semibold text-warning">moderately competitive</span>, but under-served for AI-powered behavioral interview prep with real-time feedback.
              </p>
              <p className="text-xs text-muted-foreground">
                Competition Intensity: <span className="font-semibold text-foreground">Medium</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Key Competitors</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">LeetCode</h4>
                  <p className="text-xs text-muted-foreground">Technical interview focus</p>
                </div>
                <span className="text-xs font-medium text-warning">Adjacent</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Strengths: Strong brand, coding practice, large community
              </p>
              <p className="text-xs text-muted-foreground">
                Weaknesses: Limited behavioral prep, no AI feedback
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Pramp</h4>
                  <p className="text-xs text-muted-foreground">Peer-to-peer practice</p>
                </div>
                <span className="text-xs font-medium text-destructive">Direct</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Strengths: Free, real human interaction
              </p>
              <p className="text-xs text-muted-foreground">
                Weaknesses: Inconsistent quality, scheduling friction
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Career Coaches</h4>
                  <p className="text-xs text-muted-foreground">Traditional 1-on-1 coaching</p>
                </div>
                <span className="text-xs font-medium text-accent">Indirect</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Strengths: Personalized, expert guidance
              </p>
              <p className="text-xs text-muted-foreground">
                Weaknesses: Expensive ($100+/hr), hard to scale
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Position yourself between free peer practice and expensive coaches. Your AI-powered personalization at an affordable price is a compelling middle ground that addresses both quality and cost concerns.
          </p>
        </div>
      </div>

      {/* Right Panel - Visual Map */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Competitive Positioning Map</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Competition Intensity"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    label={{ value: 'Competition Intensity →', position: 'insideBottom', offset: -10, fontSize: 11 }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Differentiation"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    label={{ value: 'Differentiation →', angle: -90, position: 'insideLeft', fontSize: 11 }}
                  />
                  <ZAxis type="number" dataKey="z" range={[100, 400]} />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                    formatter={(value: number, name: string) => {
                      if (name === 'Competition Intensity') return [value, 'Competition'];
                      if (name === 'Differentiation') return [value, 'Differentiation'];
                      return [value, name];
                    }}
                  />
                  <Scatter 
                    name="Competitors" 
                    data={competitors}
                    fill="hsl(var(--muted-foreground))"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span>Low Competition →</span>
              <span>← High Competition</span>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">White Space Opportunity</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your positioning in the lower-right quadrant shows a <span className="font-semibold text-accent">strong opportunity</span> for high differentiation with moderate competition—ideal for a new entrant.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Competitive Advantages</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">AI-powered personalization</p>
                <p className="text-xs text-muted-foreground">Tailored feedback based on individual performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">Real-time feedback</p>
                <p className="text-xs text-muted-foreground">Instant analysis during practice, not just post-interview</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">Progress tracking</p>
                <p className="text-xs text-muted-foreground">Data-driven skill improvement over time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Your Differentiation Score</p>
            <p className="text-2xl font-semibold text-accent">80/100</p>
            <p className="text-xs text-accent mt-1">Very Strong</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Competitive Pressure</p>
            <p className="text-2xl font-semibold text-warning">35/100</p>
            <p className="text-xs text-muted-foreground mt-1">Low-Medium</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Refine Position
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Add Competitor
          </Button>
        </div>
      </div>
    </div>
  );
}
