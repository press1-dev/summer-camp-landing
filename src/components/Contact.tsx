"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { 
  User, 
  Mail, 
  Phone, 
  Smile, 
  Star, 
  MessageSquare, 
  ChevronDown, 
  Monitor, 
  Users, 
  Calendar, 
  Briefcase, 
  BookOpen, 
  Zap, 
  Award, 
  Clock,
  Target,
  Layout,
  MousePointer2
} from "lucide-react";
import DynamicForm from "./DynamicForm";

// ─── Icons ───────────────────────────────────────────────────────────────────
const IconUser = () => <User size={16} strokeWidth={2.2} />;
const IconMail = () => <Mail size={16} strokeWidth={2.2} />;
const IconPhone = () => <Phone size={16} strokeWidth={2.2} />;
const IconSmile = () => <Smile size={16} strokeWidth={2.2} />;
const IconStar = () => <Star size={16} strokeWidth={2.2} />;
const IconMsg = () => <MessageSquare size={16} strokeWidth={2.2} />;
const IconChevron = () => <ChevronDown size={14} strokeWidth={2.5} />;

// ─── Constants ────────────────────────────────────────────────────────────────

type ProgramId = "computer" | "academics" | "personal";

interface ProgramConfig {
  id: ProgramId;
  label: string;
  badge: string;
  title: string;
  desc: string;
  accent: string;
  sessions: string[];
  features: { label: string; value: string; icon: React.ReactNode }[];
}

const PROGRAMS: Record<ProgramId, ProgramConfig> = {
  computer: {
    id: "computer",
    label: "Computer Class",
    badge: "Tech & Coding",
    title: "Master the digital world.",
    desc: "Hands-on training in coding, web design, and digital literacy designed for the next generation of innovators.",
    accent: "coral",
    sessions: ["Morning Batch (9:00 AM - 11:00 AM)", "Afternoon Batch (2:00 PM - 4:00 PM)", "Weekend Intensive"],
    features: [
      { label: "Focus", value: "Coding & Design", icon: <Monitor size={16} /> },
      { label: "Ages", value: "8 – 18", icon: <Users size={16} /> },
      { label: "Format", value: "Lab Based", icon: <Layout size={16} /> },
      { label: "Outcome", value: "Project Portfolio", icon: <Briefcase size={16} /> }
    ]
  },
  academics: {
    id: "academics",
    label: "Academics",
    badge: "School Success",
    title: "Reach your full potential.",
    desc: "Specialized tutoring in Math, Science, and Language Arts to boost grades and build academic confidence.",
    accent: "navy",
    sessions: ["Weekly Tutoring", "Exam Prep Intensive", "Home Assignment Support"],
    features: [
      { label: "Subjects", value: "Math, Sci, English", icon: <BookOpen size={16} /> },
      { label: "Method", value: "1-on-1 focus", icon: <Target size={16} /> },
      { label: "Frequency", value: "2-3 days/week", icon: <Calendar size={16} /> },
      { label: "Goal", value: "Grade Improvement", icon: <Star size={16} /> }
    ]
  },
  personal: {
    id: "personal",
    label: "Personal Development",
    badge: "Leadership",
    title: "Build lasting confidence.",
    desc: "Workshops focused on public speaking, emotional intelligence, and leadership skills for young achievers.",
    accent: "green",
    sessions: ["Foundation Course (4 Weeks)", "Advanced Leadership (8 Weeks)", "Public Speaking Workshop"],
    features: [
      { label: "Skills", value: "Soft Skills & EQ", icon: <Zap size={16} /> },
      { label: "Approach", value: "Activity based", icon: <MousePointer2 size={16} /> },
      { label: "Schedule", value: "Weekend Workshops", icon: <Clock size={16} /> },
      { label: "Certification", value: "Global Standard", icon: <Award size={16} /> }
    ]
  }
};

// ─── Field wrapper ────────────────────────────────────────────────────────────
// ─── Main component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [activeTab, setActiveTab] = useState<ProgramId>("computer");
  const activeConfig = useMemo(() => PROGRAMS[activeTab], [activeTab]);

  return (
    <section id="contact" className="relative bg-background py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-lilac/35 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] w-80 h-80 bg-mint/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-40px] w-64 h-64 bg-peach/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-[650px] mx-auto text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full mb-5">
            <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
            <span className="text-[11px] font-black text-navy uppercase tracking-[0.15em]">Inquiry Form</span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,54px)] text-navy leading-[1.05] mb-4">
            Start your student&apos;s <span className="text-coral italic">journey here.</span>
          </h2>
          <p className="text-[17px] text-ink-soft leading-relaxed">
            Select a program below to see available sessions and pricing details. 
            We usually respond to all inquiries within one school day.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-navy/5 backdrop-blur-sm rounded-[24px] border border-navy/5 shadow-inner">
            {(Object.values(PROGRAMS)).map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-6 py-3 rounded-[20px] text-[14px] font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === p.id 
                    ? "bg-white text-navy shadow-sm scale-105" 
                    : "text-navy/50 hover:text-navy/80 hover:bg-white/50"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${activeTab === p.id ? `bg-${p.accent}` : "bg-transparent"}`} />
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-7 reveal items-start">
          <div className="bg-white rounded-[32px] border border-line shadow-xl shadow-navy/5 overflow-hidden flex flex-col h-full transition-all duration-500">
            <div className={`h-1.5 w-full bg-${activeConfig.accent} transition-colors duration-500`} />

            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-[26px] font-display font-bold text-navy leading-tight">
                    Program Inquiry ✉️
                  </h3>
                  <p className="text-[14px] text-ink-soft mt-1">
                    Sharing details for <span className={`text-${activeConfig.accent} font-bold`}>{activeConfig.label}</span>
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green/10 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-green uppercase tracking-wider">Fast Reply</span>
                </div>
              </div>

              <DynamicForm programId={activeTab} accent={activeConfig.accent} />
            </div>
          </div>

          {/* RIGHT: Static info panel */}
          <div className="flex flex-col gap-6">
            {/* Summer camp banner */}
            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1E114D] to-[#3B1977] px-8 py-10 shadow-lg shadow-navy/10 group">
              <div className="absolute top-8 right-8 opacity-20">
                <div className="grid grid-cols-4 gap-1.5">
                  {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />)}
                </div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f2a93b]">
                    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                  </svg>
                  <span className="text-[#f2a93b] text-[11px] font-black uppercase tracking-widest">Summer 2026</span>
                </div>

                <h4 className="font-display font-bold text-white text-[28px] leading-[1.1] mb-4">
                  Small groups.<br/>Big confidence.<br/>Real growth.
                </h4>
                <p className="text-white/70 text-[14px] leading-relaxed mb-8 pr-4">
                  Every seat is limited. Fill out the form and we&apos;ll reserve your spot right away.
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center text-white/70 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Ages</div>
                      <div className="text-white text-[14px] font-bold leading-tight">3 &ndash; 12</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center text-white/70 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Format</div>
                      <div className="text-white text-[14px] font-bold leading-tight">100% online</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center text-white/70 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Dates</div>
                      <div className="text-white text-[14px] font-bold leading-tight">1st week of June</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center text-white/70 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Class Size</div>
                      <div className="text-white text-[14px] font-bold leading-tight">Max 8 students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact directory card */}
            <div className="bg-white rounded-[28px] border border-line shadow-sm overflow-hidden">
              <div className="px-5 pt-5 pb-3 border-b border-line">
                <p className="text-[10px] font-black text-ink-mute uppercase tracking-[0.15em]">Our team</p>
              </div>
              <div className="divide-y divide-line">
                {([
                  {
                    role: "Founder",
                    name: "Sandip Poudel",
                    phone: "+1 (720) 243-6452",
                    phoneTel: "+17202436452",
                    email: "poudel@magical-edu.com",
                    accent: "#f25a5a",
                    initials: "SP",
                  },
                  {
                    role: "Support",
                    name: "Sajan Poudel",
                    phone: "+1 (646) 436-6275",
                    phoneTel: "+16464366275",
                    email: null,
                    accent: "#f2a93b",
                    initials: "SP",
                  },
                  {
                    role: "General",
                    name: "Support Line",
                    phone: "+1 (720) 242-6452",
                    phoneTel: "+17202426452",
                    email: "info@alloria.com",
                    accent: "#7ab840",
                    initials: "AL",
                  },
                ] as { role: string; name: string; phone: string; phoneTel: string; email: string | null; accent: string; initials: string }[]).map((c, i) => (
                  <div key={i} className="px-5 py-4 flex items-center gap-4 hover:bg-background/60 transition-colors duration-150">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full shrink-0 grid place-items-center text-white text-[11px] font-black"
                      style={{ background: `linear-gradient(135deg, ${c.accent}cc, ${c.accent})` }}
                    >
                      {c.initials}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-[14px] text-navy leading-tight">{c.name}</span>
                        <span
                          className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md"
                          style={{ color: c.accent, background: `${c.accent}18` }}
                        >
                          {c.role}
                        </span>
                      </div>
                      <a
                        href={`tel:${c.phoneTel}`}
                        className="text-[12px] text-ink-soft font-semibold hover:text-coral transition-colors duration-150 truncate block mt-0.5"
                      >
                        {c.phone}
                      </a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${c.phoneTel}`}
                        className="w-8 h-8 rounded-xl grid place-items-center transition-all duration-200 hover:scale-110"
                        style={{ background: `${c.accent}18`, color: c.accent }}
                        aria-label={`Call ${c.name}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </a>
                      {c.email && (
                        <a
                          href={`mailto:${c.email}`}
                          className="w-8 h-8 rounded-xl grid place-items-center transition-all duration-200 hover:scale-110"
                          style={{ background: `${c.accent}18`, color: c.accent }}
                          aria-label={`Email ${c.name}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
