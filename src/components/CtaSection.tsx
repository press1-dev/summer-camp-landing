"use client";

import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="bg-navy rounded-xl p-12 lg:p-20 relative overflow-hidden text-center reveal">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-coral/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-[700px] mx-auto">
            <h2 className="text-[clamp(32px,5vw,56px)] text-white mb-6 font-display font-bold leading-tight">
              Ready to build <br />
              lasting <span className="text-coral italic">confidence?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Enroll in our 8-week Summer 2026 workshop. Small groups, live expert 
              guidance, and practical leadership skills for growing minds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white rounded-full font-display font-bold text-lg shadow-[0_6px_0_#c63b3b] hover:shadow-[0_2px_0_#c63b3b] hover:translate-y-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-200"
              >
                Inquiry Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-full font-display font-bold text-lg hover:bg-white hover:text-navy transition-all duration-200 backdrop-blur-sm"
              >
                Ask a Question
              </a>
            </div>
          </div>

          {/* Floating icons */}
          <div className="absolute top-10 right-10 w-12 h-12 bg-amber rounded-2xl rotate-12 animate-float hidden lg:grid place-items-center text-white">
            <span className="text-2xl">✦</span>
          </div>
          <div className="absolute bottom-10 left-10 w-10 h-10 bg-green rounded-lg -rotate-12 animate-float [animation-delay:1s] hidden lg:grid place-items-center text-white">
            <span className="text-xl">★</span>
          </div>
        </div>
      </div>
    </section>
  );
}
