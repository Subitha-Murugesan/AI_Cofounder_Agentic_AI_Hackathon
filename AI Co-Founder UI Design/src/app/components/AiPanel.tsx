import { Brain, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface AiMessage {
  heading: string;
  content: string;
}

interface AiPanelProps {
  messages: AiMessage[];
  showActions?: boolean;
}

export function AiPanel({ messages, showActions = true }: AiPanelProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-violet/10 flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-accent-violet" />
            </div>
            <h3 className="text-sm font-semibold text-foreground pt-1">{message.heading}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-11">
            {message.content}
          </p>
        </div>
      ))}

      {showActions && (
        <div className="flex gap-2 pl-11">
          <Button variant="outline" size="sm" className="text-xs">
            <MessageSquare className="w-3 h-3 mr-1" />
            Dig deeper
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Explain simply
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Refine this
          </Button>
        </div>
      )}
    </div>
  );
}
