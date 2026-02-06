import { TrendingUp, ArrowUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/app/components/ui/button';

const marketData = [
  { year: '2020', value: 2.8 },
  { year: '2021', value: 3.2 },
  { year: '2022', value: 3.7 },
  { year: '2023', value: 4.3 },
  { year: '2024', value: 5.0 },
  { year: '2025', value: 5.8 },
  { year: '2026', value: 6.7 },
  { year: '2027', value: 7.8 },
];

export function MarketStep() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full overflow-auto p-6">
      {/* Left Panel - AI Analysis */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Market Analysis</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">What the market says</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The interview preparation and career development market is experiencing strong growth, driven by increasing competition for jobs, remote hiring practices, and the need for continuous skill development in a rapidly changing job market.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Key growth drivers include the rise of AI in education, growing acceptance of online learning, increasing number of job seekers globally, and the shift toward competency-based hiring.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-accent/10">
                <ArrowUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Market Momentum</h4>
                <p className="text-2xl font-semibold text-foreground mb-1">Upward</p>
                <p className="text-xs text-muted-foreground">15.2% projected annual growth</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Market Size Breakdown</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">TAM (Total Addressable Market)</span>
                <span className="text-xs font-medium text-foreground">$7.8B</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent rounded-full h-2" style={{ width: '100%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                All interview prep & career coaching globally
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">SAM (Serviceable Addressable Market)</span>
                <span className="text-xs font-medium text-foreground">$3.1B</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent-violet rounded-full h-2" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                English-speaking markets with AI adoption
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">SOM (Serviceable Obtainable Market)</span>
                <span className="text-xs font-medium text-foreground">$155M</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-warning rounded-full h-2" style={{ width: '28%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Students & early professionals segment
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What this means for you</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The market is substantial and growing. Target the student and early professional segment first—they're most price-sensitive but also most open to AI-powered solutions.
          </p>
        </div>
      </div>

      {/* Right Panel - Visual Dashboard */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Market Growth Trend</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}B`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`$${value}B`, 'Market Size']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--accent))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Interview prep & career coaching market (billions USD)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-semibold text-foreground">15.2%</div>
            <p className="text-xs text-muted-foreground mt-1">CAGR</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">$29</div>
            <p className="text-xs text-muted-foreground mt-1">Avg. subscription</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">4.2</div>
            <p className="text-xs text-muted-foreground mt-1">Months retained</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Market Opportunities</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">AI-powered personalization</p>
                <p className="text-xs text-muted-foreground">Most competitors offer generic content</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">Real-time feedback loop</p>
                <p className="text-xs text-muted-foreground">Students want immediate improvement insights</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-foreground font-medium">University partnerships</p>
                <p className="text-xs text-muted-foreground">B2B channel largely untapped</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Export Data
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Compare Markets
          </Button>
        </div>
      </div>
    </div>
  );
}
