"use client";

import { useState } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconSmile = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconMsg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  label,
  id,
  icon,
  error,
  children,
}: {
  label: string;
  id: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[11px] font-black text-navy uppercase tracking-[0.12em] pl-1"
      >
        <span className="text-navy/40">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <span className="flex items-center gap-1.5 pl-1 text-[11px] text-coral font-bold">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}

// ─── Shared style strings ─────────────────────────────────────────────────────
const inputCls =
  "w-full px-5 py-3.5 bg-cream border-2 border-line rounded-2xl text-ink font-semibold text-[15px] transition-all duration-200 focus:outline-none focus:border-coral focus:bg-white focus:shadow-md focus:shadow-coral/8 placeholder:text-ink-mute placeholder:font-normal";

const selectCls =
  "w-full px-5 py-3.5 bg-cream border-2 border-line rounded-2xl text-ink font-semibold text-[15px] transition-all duration-200 focus:outline-none focus:border-coral focus:bg-white focus:shadow-md focus:shadow-coral/8 appearance-none cursor-pointer pr-10";

// ─── Main component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const fname   = (fd.get("fname")   as string) ?? "";
    const email   = (fd.get("email")   as string) ?? "";
    const age     = (fd.get("age")     as string) ?? "";
    const errs: Record<string, string> = {};
    if (!fname.trim())                                   errs.fname   = "Please tell us your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))     errs.email   = "Add a valid email";
    if (!age)                                            errs.age     = "Pick an age range";
    // Message is optional for a seamless experience

    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setStatus("submitting");
    (async () => {
      try {
        const body = Object.fromEntries(new FormData(e.currentTarget) as any);
        const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const json = await res.json();
        if (json.ok) {
          setStatus('success');
          (e.target as HTMLFormElement).reset();
          setTimeout(() => setStatus('idle'), 6000);
        } else {
          setStatus('idle');
          setErrors({ message: 'Failed to send. Please try again later.' });
          console.error('Contact send failed', json);
        }
      } catch (err) {
        setStatus('idle');
        setErrors({ message: 'Network error. Please try again.' });
        console.error(err);
      }
    })();
  };

  return (
    <section id="contact" className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-lilac/35 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] w-80 h-80 bg-mint/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-40px] w-64 h-64 bg-peach/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full mb-5">
            <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
            <span className="text-[11px] font-black text-navy uppercase tracking-[0.15em]">Get in touch</span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,54px)] text-navy leading-[1.05] mb-4">
            Connect with us,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-coral">from anywhere.</span>
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 220 10" preserveAspectRatio="none">
                <path d="M0,7 Q55,0 110,7 T220,7" fill="none" stroke="#f2a93b" strokeWidth="4" strokeLinecap="round" opacity="0.65"/>
              </svg>
            </span>
          </h2>
          <p className="text-[17px] text-ink-soft leading-relaxed">
            Ask about the personal development workshop or tell us about the student you want to enroll — we reply within one school day.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-7 reveal items-start">

          {/* LEFT: Form card */}
          <div className="bg-white rounded-[32px] border border-line shadow-xl shadow-navy/5 overflow-hidden flex flex-col h-full">
            <div className="h-1.5 w-full bg-linear-to-r from-coral via-amber to-green" />

            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              {/* Card header */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h3 className="text-[26px] font-display font-bold text-navy leading-tight">Send us a note ✉️</h3>
                  <p className="text-[14px] text-ink-soft mt-1">We&apos;ll be in touch within 24 hours.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green/10 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-green uppercase tracking-wider">Online</span>
                </div>
              </div>

              {/* Success banner */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-mint rounded-2xl border-2 border-green/25 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green grid place-items-center text-white shrink-0 shadow-md shadow-green/25">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#2d6e12] text-[15px]">Message received! 🎉</div>
                    <div className="text-[13px] text-ink-soft">We&apos;ll reach out soon.</div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 flex-1">

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Student&apos;s name" id="fname" icon={<IconUser />} error={errors.fname}>
                    <input
                      id="fname" name="fname" type="text"
                      placeholder="Student name"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Email address" id="email" icon={<IconMail />} error={errors.email}>
                    <input
                      id="email" name="email" type="email"
                      placeholder="jane@email.com"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone number" id="phone" icon={<IconPhone />}>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+1 (720) 242-6452"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Age / grade level" id="age" icon={<IconSmile />} error={errors.age}>
                    <div className="relative">
                      <select id="age" name="age" defaultValue="" className={selectCls}>
                        <option value="" disabled>Select level</option>
                        <option value="school">School student</option>
                        <option value="high-school">High school student</option>
                        <option value="college">College student</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-mute">
                        <IconChevron />
                      </span>
                    </div>
                  </Field>
                </div>

                <Field label="Program of interest" id="interest" icon={<IconStar />}>
                  <div className="relative">
                    <select id="interest" name="interest" className={selectCls}>
                      <option value="personal-development">Personal Development & Leadership</option>
                      <option value="communication">Communication & Public Speaking</option>
                      <option value="confidence">Confidence Building</option>
                      <option value="general">General inquiry</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-mute">
                      <IconChevron />
                    </span>
                  </div>
                </Field>

                <Field label="Student details (Optional)" id="message" icon={<IconMsg />} error={errors.message}>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Anything we should know about the student or your preferred timing?"
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative mt-1 w-full overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-coral text-white rounded-2xl font-display font-bold text-[17px] shadow-[0_6px_0_#c63b3b] hover:shadow-[0_2px_0_#c63b3b] hover:translate-y-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Brand panel + contact cards */}
          <div className="flex flex-col gap-4">

            {/* Brand panel */}
            <div className="relative rounded-[32px] overflow-hidden bg-navy px-8 py-8">
              <div className="absolute top-0 right-0 w-44 h-44 bg-coral/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-5 right-5 grid grid-cols-4 gap-1.5 opacity-15 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber/20 rounded-full mb-5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f2a93b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                  </svg>
                  <span className="text-amber text-[11px] font-black uppercase tracking-widest">Summer 2026</span>
                </div>
                <h4 className="font-display font-bold text-white text-[22px] leading-snug mb-3">
                  Small groups.<br />Big confidence.<br />Real growth.
                </h4>
                <p className="text-white/55 text-[13px] leading-relaxed">
                  Every seat is limited. Fill out the form and we&apos;ll reserve your spot right away.
                </p>
                <div className="my-5 h-px bg-white/10" />
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {([
                    {
                      svg: <><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></>,
                      label: "Ages",
                      value: "3 – 12",
                    },
                    {
                      svg: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
                      label: "Format",
                      value: "100% online",
                    },
                    {
                      svg: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
                      label: "Dates",
                      value: "1st week of June",
                    },
                    {
                      svg: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
                      label: "Class size",
                      value: "Max 8 students",
                    },
                  ] as { svg: React.ReactNode; label: string; value: string }[]).map((f) => (
                    <div key={f.label} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 grid place-items-center shrink-0 mt-0.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {f.svg}
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none mb-0.5">{f.label}</div>
                        <div className="text-white/85 text-[12.5px] font-bold leading-tight">{f.value}</div>
                      </div>
                    </div>
                  ))}
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
