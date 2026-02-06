import { useState } from 'react';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Sparkles } from 'lucide-react';

interface IdeaInputProps {
  onSubmit: (idea: string) => void;
}

export function IdeaInput({ onSubmit }: IdeaInputProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = () => {
    if (idea.trim()) {
      onSubmit(idea);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="w-full max-w-2xl">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
          Describe the startup idea you want to validate
        </h2>
        
        {/* Supporting hint */}
        <p className="text-sm text-muted-foreground mb-6 text-center">
          One paragraph is enough
        </p>

        {/* Input Area */}
        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Example: An AI-powered platform that helps students and early-career professionals prepare for interviews through personalized mock interviews, instant feedback, and skill improvement tracking..."
          className="min-h-[200px] text-base mb-6 resize-none bg-card border-border"
        />

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          disabled={!idea.trim()}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
        >
          Start Validation
        </Button>
      </div>
    </div>
  );
}