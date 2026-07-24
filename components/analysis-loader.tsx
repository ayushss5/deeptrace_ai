"use client";

import { useEffect, useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STATES = [
  "Extracting claims from media...",
  "Searching trusted sources...",
  "Evaluating evidence...",
  "Generating verification report..."
];

export function AnalysisLoader({ className }: { className?: string }) {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev < STATES.length - 1 ? prev + 1 : prev));
    }, 2000); // cycle every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex flex-col items-center justify-center p-8 space-y-6", className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl animate-pulse" />
        <Loader2 className="h-10 w-10 text-blue-600 dark:text-blue-400 animate-spin relative z-10" />
      </div>
      
      <div className="flex flex-col items-start space-y-3 w-64">
        {STATES.map((state, index) => {
          const isCompleted = index < currentState;
          const isActive = index === currentState;
          const isPending = index > currentState;

          return (
            <div 
              key={state} 
              className={cn(
                "flex items-center space-x-3 transition-all duration-300",
                isCompleted ? "text-slate-600 dark:text-slate-400" :
                isActive ? "text-slate-900 dark:text-slate-100 font-medium" : 
                "text-slate-300 dark:text-slate-700 opacity-50"
              )}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
              ) : isActive ? (
                <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400 flex-shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-slate-200 dark:border-slate-700 flex-shrink-0" />
              )}
              <span className="text-sm">{state}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
