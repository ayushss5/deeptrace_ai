"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-900 animate-splash-fade">
      <div className="flex flex-col items-center animate-fade-up">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-soft-lg mb-6">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          DeepTrace AI
        </h1>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">
          AI-powered misinformation verification
        </p>
      </div>
    </div>
  );
}
