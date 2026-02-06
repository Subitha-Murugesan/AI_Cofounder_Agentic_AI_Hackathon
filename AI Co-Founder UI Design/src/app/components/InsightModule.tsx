import { TrendingUp, AlertTriangle, Zap, Activity } from 'lucide-react';

type InsightType = 'opportunity' | 'risk' | 'differentiation' | 'difficulty';
type Confidence = 'low' | 'medium' | 'high';

interface InsightModuleProps {
  type: InsightType;
  title: string;
  confidence: Confidence;
}

const insightConfig = {
  opportunity: {
    icon: TrendingUp,
    bgColor: 'bg-accent/10',
    iconColor: 'text-accent',
    borderColor: 'border-accent/20',
  },
  risk: {
    icon: AlertTriangle,
    bgColor: 'bg-warning/10',
    iconColor: 'text-warning',
    borderColor: 'border-warning/20',
  },
  differentiation: {
    icon: Zap,
    bgColor: 'bg-accent-violet/10',
    iconColor: 'text-accent-violet',
    borderColor: 'border-accent-violet/20',
  },
  difficulty: {
    icon: Activity,
    bgColor: 'bg-destructive/10',
    iconColor: 'text-destructive',
    borderColor: 'border-destructive/20',
  },
};

const confidenceLabels = {
  low: 'Low Confidence',
  medium: 'Medium Confidence',
  high: 'High Confidence',
};

export function InsightModule({ type, title, confidence }: InsightModuleProps) {
  const config = insightConfig[type];
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-lg border ${config.borderColor} ${config.bgColor}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded ${config.iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-foreground leading-relaxed">{title}</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-1.5 h-1.5 rounded-full ${
                    (confidence === 'high' && level <= 3) ||
                    (confidence === 'medium' && level <= 2) ||
                    (confidence === 'low' && level <= 1)
                      ? config.iconColor.replace('text-', 'bg-')
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{confidenceLabels[confidence]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
