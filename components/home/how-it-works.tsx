import { Layers, Cpu, Radar, FileCheck } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const STEPS = [
  {
    step: "01",
    icon: Layers,
    title: "Multimodal Input",
    body: "Image, audio, or social post URL ingested as raw signal — no OCR or ASR preprocessing.",
    color: "bg-white dark:bg-slate-900"
  },
  {
    step: "02",
    icon: Cpu,
    title: "Gemma 4 Edge Inference",
    body: "Native pixel + waveform reasoning extracts claims, entities, and metadata locally.",
    color: "bg-slate-50 dark:bg-slate-800"
  },
  {
    step: "03",
    icon: Radar,
    title: "Real-Time Web RAG",
    body: "Extracted claims cross-referenced live against journalistic and government sources.",
    color: "bg-slate-100 dark:bg-slate-900"
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Forensic Audit Report",
    body: "Confidence score, claim breakdown, and citation trail returned in seconds.",
    color: "bg-white dark:bg-slate-800"
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-500">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            From raw upload to cited verdict
          </h2>
        </div>

        <div className="h-[800px] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative">
          <ScrollStack 
            useWindowScroll={false} 
            itemDistance={40} 
            itemScale={0.05} 
            stackPosition="15%" 
            scaleEndPosition="5%"
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <ScrollStackItem key={step.step}>
                  <div className={`w-full h-full rounded-[2rem] border border-slate-200 dark:border-slate-700 ${step.color} p-8 flex flex-col justify-center items-center text-center shadow-lg`}>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 mb-6">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                      STEP {step.step}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-slate-100 mb-4">
                      {step.title}
                    </h3>
                    <p className="max-w-md text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
