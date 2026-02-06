import { DollarSign, CreditCard, Repeat, Users, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const revenueModels = [
  {
    id: 1,
    name: 'Freemium',
    icon: Users,
    description: 'Free basic mock interviews, paid premium features',
    pros: ['Lower barrier to entry', 'Viral growth potential', 'Large user base'],
    cons: ['Low conversion rate (2-5%)', 'Free tier support costs', 'Slower revenue growth'],
    difficulty: 'Medium',
    isRecommended: true,
  },
  {
    id: 2,
    name: 'Subscription',
    icon: Repeat,
    description: 'Monthly or annual subscription for full access',
    pros: ['Predictable revenue', 'Higher ARPU', 'Strong retention'],
    cons: ['Higher signup friction', 'Harder to acquire users', 'Need constant value'],
    difficulty: 'Medium',
    isRecommended: false,
  },
  {
    id: 3,
    name: 'Corporate/University',
    icon: DollarSign,
    description: 'B2B licensing to schools and companies',
    pros: ['Large contract values', 'Lower churn', 'Scalable'],
    cons: ['Long sales cycles', 'Complex onboarding', 'Later-stage focus'],
    difficulty: 'Hard',
    isRecommended: false,
  },
];

export function RevenueStep() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - AI Analysis */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Business Model</h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Revenue Strategy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A freemium model works best for early-stage user acquisition in the student market. Offer free basic mock interviews to build trust, then convert power users to premium for advanced feedback, unlimited practice, and progress tracking.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Students are price-sensitive but willing to pay for tools that directly impact their job prospects. Focus on proving value first, then converting during critical recruiting seasons.
            </p>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Most Realistic for Early-Stage</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                <span className="font-semibold text-foreground">Freemium Model</span> with upgrade prompts during recruiting season offers the best path to user growth and revenue for first-time founders targeting students.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  See Pricing Examples
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Unit Economics</h3>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Monthly ARPU (Premium)</span>
              <span className="text-lg font-semibold text-foreground">$29</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">AI Processing Cost/User</span>
              <span className="text-lg font-semibold text-foreground">$4</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Gross Margin</span>
              <span className="text-lg font-semibold text-accent">$25 (86%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Target CAC</span>
              <span className="text-lg font-semibold text-foreground">$15</span>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your margins are excellent (86%) due to low AI costs. Focus on organic growth through university channels and word-of-mouth to keep CAC below $15. Conversion from free to paid is key.
          </p>
        </div>
      </div>

      {/* Right Panel - Revenue Models */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Revenue Model Options</h3>
        
        <div className="space-y-4">
          {revenueModels.map((model) => {
            const Icon = model.icon;
            const difficultyColor = 
              model.difficulty === 'Easy' ? 'text-accent' : 
              model.difficulty === 'Medium' ? 'text-warning' : 
              'text-destructive';
            
            return (
              <div 
                key={model.id}
                className={`bg-card border rounded-lg p-6 relative ${
                  model.isRecommended ? 'ring-2 ring-accent' : 'border-border'
                }`}
              >
                {model.isRecommended && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-foreground">{model.name}</h4>
                      <span className={`text-xs font-medium ${difficultyColor}`}>
                        {model.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Pros</p>
                        <ul className="space-y-1">
                          {model.pros.map((pro, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-accent">✓</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Cons</p>
                        <ul className="space-y-1">
                          {model.cons.map((con, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-destructive">×</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Monetization Timeline</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-accent"></div>
              
              <div className="flex-1 text-center relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-3 border-4 border-background">
                  <span className="text-lg font-semibold text-accent-foreground">1</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Free Tier</p>
                <p className="text-xs text-muted-foreground">5 mock interviews</p>
              </div>

              <div className="flex-1 text-center relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-3 border-4 border-background">
                  <span className="text-lg font-semibold text-accent-foreground">2</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Premium</p>
                <p className="text-xs text-muted-foreground">$29/month</p>
              </div>

              <div className="flex-1 text-center relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-3 border-4 border-background">
                  <span className="text-lg font-semibold text-muted-foreground">3</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Enterprise</p>
                <p className="text-xs text-muted-foreground">Year 2+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Growth Projections</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">Month 3</span>
              </div>
              <span className="text-sm font-semibold text-foreground">500 free, 25 paid</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">Month 6</span>
              </div>
              <span className="text-sm font-semibold text-foreground">2,000 free, 100 paid</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">Month 12</span>
              </div>
              <span className="text-sm font-semibold text-accent">5,000 free, 300 paid</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Calculate Revenue
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Compare Models
          </Button>
        </div>
      </div>
    </div>
  );
}
