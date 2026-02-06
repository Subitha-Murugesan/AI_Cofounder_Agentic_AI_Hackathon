import { Brain, HelpCircle, Bell, User, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeaderProps {
  showHomeButton?: boolean;
  onHomeClick?: () => void;
}

export function Header({ showHomeButton = false, onHomeClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      {/* Logo and App Name */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Brain className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground">AI Co-Founder</h1>
            <p className="text-xs text-muted-foreground">Idea Evaluation Mode</p>
          </div>
        </div>

        {/* Home Button */}
        {showHomeButton && (
          <>
            <div className="w-px h-8 bg-border"></div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onHomeClick}
              className="text-muted-foreground hover:text-foreground"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </>
        )}
      </div>

      {/* Utility Icons */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}