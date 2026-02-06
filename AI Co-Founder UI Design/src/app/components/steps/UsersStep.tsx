import { Users, GraduationCap, Briefcase, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const personas = [
  {
    id: 1,
    name: 'College Student',
    icon: GraduationCap,
    description: 'Undergraduate students aged 20-23 preparing for internships',
    pain: 'First-time interviewing with no prior experience',
    frequency: 'Seasonal (recruiting cycles)',
    percentage: 50,
    color: 'accent',
    isTarget: true,
  },
  {
    id: 2,
    name: 'Recent Graduate',
    icon: Briefcase,
    description: 'New grads aged 22-25 seeking first full-time role',
    pain: 'Need to stand out in competitive entry-level market',
    frequency: 'Ongoing until hired',
    percentage: 35,
    color: 'accent-violet',
    isTarget: false,
  },
  {
    id: 3,
    name: 'Career Switcher',
    icon: Users,
    description: 'Early professionals (1-3 years exp) changing industries',
    pain: 'Lack confidence explaining career transition',
    frequency: 'During job search',
    percentage: 15,
    color: 'warning',
    isTarget: false,
  },
];

export function UsersStep() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - AI Insights */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Target Users</h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Who needs this most</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Your core users are college students preparing for internships and full-time roles. They're tech-savvy, motivated to improve, and have limited budgets—making them ideal early adopters for an AI-powered, affordable solution.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These users typically feel anxious about interviews, lack structured practice opportunities, and want immediate feedback to improve quickly. They're comfortable with AI tools and value convenience.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Audience Split</h3>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">College Students</span>
                <span className="text-sm font-semibold text-foreground">50%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-accent rounded-full h-3" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Recent Graduates</span>
                <span className="text-sm font-semibold text-foreground">35%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-accent-violet rounded-full h-3" style={{ width: '35%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Career Switchers</span>
                <span className="text-sm font-semibold text-foreground">15%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-warning rounded-full h-3" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Best Initial Target User</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">College Students</span> are your strongest early adopters. They have clear interview deadlines, are comfortable with AI tools, and actively seek affordable solutions. University partnerships can accelerate growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Build for college students first. Offer a student discount or university partnerships to gain traction. Once you prove value, expand to recent grads who have higher willingness to pay.
          </p>
        </div>
      </div>

      {/* Right Panel - Persona Cards */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">User Personas</h3>
        
        <div className="space-y-4">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const bgColor = persona.color === 'accent' ? 'bg-accent/10' : persona.color === 'accent-violet' ? 'bg-accent-violet/10' : 'bg-warning/10';
            const borderColor = persona.color === 'accent' ? 'border-accent/20' : persona.color === 'accent-violet' ? 'border-accent-violet/20' : 'border-warning/20';
            const iconColor = persona.color === 'accent' ? 'text-accent' : persona.color === 'accent-violet' ? 'text-accent-violet' : 'text-warning';
            
            return (
              <div 
                key={persona.id}
                className={`bg-card border rounded-lg p-6 relative ${persona.isTarget ? 'ring-2 ring-accent' : 'border-border'}`}
              >
                {persona.isTarget && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    PRIMARY TARGET
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${bgColor} border ${borderColor}`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-foreground">{persona.name}</h4>
                      <span className="text-sm font-semibold text-muted-foreground">{persona.percentage}%</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{persona.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Core Pain Point</p>
                        <p className="text-sm text-foreground">{persona.pain}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Frequency</p>
                        <p className="text-sm text-foreground">{persona.frequency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Common Characteristics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Average Age</p>
              <p className="text-lg font-semibold text-foreground">22 years</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Budget</p>
              <p className="text-lg font-semibold text-foreground">$15-50/mo</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <p className="text-lg font-semibold text-foreground">Urban/College</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Tech Comfort</p>
              <p className="text-lg font-semibold text-foreground">Very High</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Interview Guide
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Survey Template
          </Button>
        </div>
      </div>
    </div>
  );
}
