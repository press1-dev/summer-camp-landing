import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-6 pb-[clamp(40px,6vw,80px)] overflow-hidden bg-[radial-gradient(ellipse_60%_50%_at_85%_15%,rgba(242,169,59,0.18),transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_90%,rgba(122,184,64,0.16),transparent_60%),var(--background)] relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-[5%] w-32 h-32 bg-coral/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10 animate-pulse [animation-delay:2s]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="reveal">
            {/* Badge Container */}
            {/* <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 bg-white/80 backdrop-blur-sm border border-line rounded-full font-bold text-[13px] text-navy shadow-sm mb-5 transition-transform hover:scale-[1.02] cursor-default">
              <span className="w-7 h-7 uppercase rounded-full bg-amber grid place-items-center text-white shadow-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </span>
              <span className="font-bold uppercase">
                June 2026 workshop enrollment is now open
              </span>
            </div> */}

            <h1 className="text-[clamp(38px,5vw,68px)] font-display font-bold leading-[1.05] mb-4 text-navy">
              Summer Workshop for{" "}
              <span className="relative inline-block text-coral">
                Confident
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-4 text-amber/60 -z-10 translate-y-1"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q25,0 50,10 T100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Growing Minds
            </h1>

            <p className="text-[clamp(16px,1.1vw,19px)] text-ink-soft mb-8 max-w-[500px] leading-relaxed">
              Build stronger communication, confidence, and leadership skills in
              a small group setting. Practical sessions designed for school,
              high school, and college students ready for real growth this
              summer.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#courses"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-coral text-white rounded-full font-display font-bold text-base shadow-[0_5px_0_#c63b3b] hover:shadow-[0_2px_0_#c63b3b] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all duration-200"
              >
                See Workshop Details
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-navy border-2 border-navy rounded-full font-display font-bold text-base hover:bg-navy hover:text-white transition-all duration-200 shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
                Our Story
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-5 pt-8 border-t border-dashed border-line">
              <div className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral grid place-items-center transition-colors group-hover:bg-coral group-hover:text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute font-bold uppercase tracking-widest leading-none mb-1">
                    Call us today
                  </div>
                  <div className="font-display font-bold text-base text-ink">
                    +1 (720) 242-6452
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-xl bg-green/10 text-green grid place-items-center transition-colors group-hover:bg-green group-hover:text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute font-bold uppercase tracking-widest leading-none mb-1">
                    Founder & Director
                  </div>
                  <div className="font-display font-bold text-base text-ink">
                    Sandip Poudel
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple grid place-items-center transition-colors group-hover:bg-purple group-hover:text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute font-bold uppercase tracking-widest leading-none mb-1">
                    Course Duration
                  </div>
                  <div className="font-display font-bold text-base text-ink">
                    8 Weeks
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative w-full aspect-square max-w-[520px] lg:justify-self-end reveal"
            aria-hidden="true"
          >
            {/* Background Blob */}
            <div className="absolute inset-[-5%] bg-amber/20 animate-blob blur-2xl"></div>
            <div className="absolute inset-0 bg-amber/30 animate-blob [animation-delay:2s]"></div>

            {/* Image Container */}
            <div className="absolute inset-[5%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-linear-to-br from-coral to-orange shadow-[0_20px_50px_rgba(242,90,90,0.3)] border-6 border-white group transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/SapanaSharma.png"
                alt="SapanaSharma Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </div>

            {/* Floating Stickers */}
            <div className="absolute top-[2%] left-[-5%] bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-float border border-line">
              <div className="w-9 h-9 rounded-lg bg-green grid place-items-center text-white shadow-md shadow-green/20 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[14px] text-navy leading-none">
                  1 Hour Sessions
                </div>
                <div className="text-[11px] text-ink-mute hidden sm:block mt-0.5">
                  Interactive online workshops
                </div>
              </div>
            </div>

            <div className="absolute bottom-[18%] right-[-5%] bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-float [animation-delay:1.5s] border border-line">
              <div className="w-9 h-9 rounded-lg bg-purple grid place-items-center text-white shadow-md shadow-purple/20 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[14px] text-navy leading-none">
                  Maximum 8 Students
                </div>
                <div className="text-[11px] text-ink-mute hidden sm:block mt-0.5">
                  Focused group learning
                </div>
              </div>
            </div>

            <div className="absolute bottom-[-2%] left-[10%] bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-float [animation-delay:3s] border border-line">
              <div className="w-9 h-9 rounded-lg bg-pink grid place-items-center text-white shadow-md shadow-pink/20 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[14px] text-navy leading-none">
                  Starts in June
                </div>
                <div className="text-[11px] text-ink-mute hidden sm:block mt-0.5">
                  First week of June 2026
                </div>
              </div>
            </div>

            {/* Confetti / Decorative Shapes */}
            <div className="absolute top-[8%] right-[42%] w-5 h-5 bg-pink rounded-full animate-spin-slow pointer-events-none opacity-40 blur-sm"></div>
            <div className="absolute top-[60%] left-[46%] w-4 h-4 bg-navy rounded-sm rotate-20 animate-spin-slow [animation-direction:reverse] pointer-events-none opacity-20"></div>
            <div className="absolute top-[22%] right-[2%] w-3 h-3 bg-purple rotate-45 pointer-events-none opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
