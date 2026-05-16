"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  CheckCircle2,
  Users,
  Clock,
  Globe,
  Calendar,
  Star,
  Zap,
  Sprout,
} from "lucide-react";

export default function Courses() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      const reveals = containerRef.current.querySelectorAll(".reveal");
      reveals.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const learnItems = [
    "Public speaking & communication",
    "Leadership mindset building",
    "Critical thinking techniques",
    "Teamwork & collaboration",
    "Decision-making skills",
    "Personality development",
  ];

  const audienceTags = [
    { label: "School students", color: "bg-mint text-green border-green/20" },
    { label: "High school", color: "bg-sky text-navy border-navy/20" },
    { label: "College students", color: "bg-lilac text-purple border-purple/20" },
    { label: "Interview prep", color: "bg-peach text-orange border-orange/20" },
    { label: "Presentation prep", color: "bg-blush text-pink border-pink/20" },
  ];

  const features = [
    { t: "Small Groups", d: "Max 8 students", Icon: Users, color: "text-navy bg-sky" },
    { t: "Live Lessons", d: "Interactive activities", Icon: Zap, color: "text-amber bg-cream" },
    { t: "Expert Mentor", d: "Sapana Sharma", Icon: Star, color: "text-coral bg-blush" },
    { t: "Supportive Space", d: "Safe to grow in", Icon: Sprout, color: "text-green bg-mint" },
  ];

  const quickStats = [
    { icon: Clock,    label: "Duration",   val: "8 Weeks",    accent: "bg-blush text-coral" },
    { icon: Users,    label: "Batch Size", val: "Max 8",      accent: "bg-sky text-navy" },
    { icon: Globe,    label: "Mode",       val: "Online",     accent: "bg-mint text-green" },
    { icon: Calendar, label: "Starts",     val: "June 2026",  accent: "bg-lilac text-purple" },
  ];

  return (
    <section
      id="courses"
      className="bg-background py-10 lg:py-14 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center gap-2.5 font-bold text-[11px] uppercase tracking-widest text-coral mb-3">
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
            Summer 2026 Workshop
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
          </div>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-display font-bold text-navy leading-tight">
            Personal Development &amp; Leadership
          </h2>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-[560px] mx-auto mt-2">
            An 8-week online workshop that builds confidence, communication, and
            leadership through live, practical sessions.
          </p>
        </div>

        {/* Main Grid: 3 columns on large screens */}
        <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-5 items-stretch">

          {/* ── LEFT: Instructor Card ── */}
          <div className="reveal self-stretch">
            <div className="bg-white rounded-[24px] p-2.5 shadow-lg border border-line h-full flex flex-col">
              {/* Image — grows to fill available space */}
              <div className="rounded-[18px] flex-1 min-h-[220px] relative overflow-hidden bg-gradient-to-br from-[#70a4ff] to-navy">
                <Image
                  src="/SapanaSharma.png"
                  alt="Sapana Sharma – Workshop Instructor"
                  fill
                  className="object-cover mix-blend-overlay opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                {/* Top badge */}
                <div className="absolute top-4 left-4 right-4 flex gap-1.5">
                  <span className="bg-coral text-white px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                    Limited Seats
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[9px] font-bold">
                    Online
                  </span>
                </div>
                {/* Bottom name + bio */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display font-bold text-lg leading-tight">
                    Sapana Sharma
                  </p>
                  <span className="block text-[10px] font-normal opacity-60 mt-0.5 uppercase tracking-wider">
                    Workshop Instructor
                  </span>
                  <p className="text-[12px] text-white/70 mt-2 leading-snug">
                    Experienced educator helping students build confidence, communication, and real-world leadership skills.
                  </p>
                </div>
              </div>

              {/* Quick stats — 2×2 grid */}
              <div className="grid grid-cols-2 gap-2 mt-2.5 px-0.5 shrink-0">
                {quickStats.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-3 bg-background rounded-xl border border-line"
                  >
                    <div className={`w-8 h-8 rounded-lg grid place-items-center shrink-0 ${item.accent}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-ink-mute font-bold uppercase tracking-wider leading-none">
                        {item.label}
                      </p>
                      <p className="text-[13px] text-navy font-bold leading-snug mt-0.5">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MIDDLE: What You'll Learn + Target Audience ── */}
          <div className="flex flex-col gap-4 reveal">
            {/* What You'll Learn */}
            <div className="bg-white rounded-[20px] p-5 border border-line shadow-sm flex-1">
              <h4 className="text-base font-display font-bold text-navy mb-3.5 flex items-center gap-2">
                <Star className="text-amber fill-amber w-4 h-4 shrink-0" />
                What You&apos;ll Learn
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {learnItems.map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green shrink-0" />
                    <p className="text-[13px] text-ink-soft font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-[20px] p-5 border border-line shadow-sm">
              <h4 className="text-base font-display font-bold text-navy mb-3">
                Who&apos;s It For?
              </h4>
              <div className="flex flex-wrap gap-2">
                {audienceTags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 font-bold text-[11.5px] rounded-full border ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[12px] text-ink-soft italic leading-snug border-t border-dashed border-line pt-3">
                &ldquo;Perfect for students preparing for presentations,
                interviews, and leadership roles.&rdquo;
              </p>
            </div>
          </div>

          {/* ── RIGHT: Features + CTA ── */}
          <div className="flex flex-col gap-4 reveal">
            {/* Workshop Features */}
            <div className="bg-white rounded-[20px] p-5 border border-line shadow-sm flex-1">
              <h4 className="text-base font-display font-bold text-navy mb-3.5 flex items-center gap-2">
                <Zap className="text-amber fill-amber/20 w-4 h-4 shrink-0" />
                Workshop Features
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 bg-background rounded-xl border border-line hover:border-coral/30 hover:shadow-sm transition-all text-center group"
                  >
                    <div className={`w-8 h-8 rounded-lg ${feature.color} grid place-items-center mx-auto mb-1.5`}>
                      <feature.Icon className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-navy text-[12px] leading-tight mb-0.5">
                      {feature.t}
                    </h5>
                    <p className="text-[11px] text-ink-mute leading-tight">
                      {feature.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="bg-navy rounded-[20px] p-5 text-white border border-white/10 shadow-xl relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-coral/20 rounded-full blur-xl pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-coral mb-1">
                  Seats are filling fast
                </div>
                <h4 className="text-[18px] font-display font-bold leading-tight mb-4">
                  Ready to lead with confidence?
                </h4>
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full px-5 py-3 bg-coral text-white rounded-xl font-display font-black text-[14px] shadow-[0_5px_0_#c63b3b] hover:translate-y-[2px] hover:shadow-[0_3px_0_#c63b3b] active:translate-y-[5px] active:shadow-none transition-all"
                >
                  Book Your Seat Now
                </a>
                <p className="text-[11px] text-white/50 text-center mt-2.5">
                  Free consultation available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
