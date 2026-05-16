import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "Kind by design",
      desc: "Every classroom rule starts with empathy first.",
      icon: (
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      ),
      bg: "bg-coral/10 text-coral",
    },
    {
      title: "Small & mighty",
      desc: "6 kids per class so every voice is heard.",
      icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
      bg: "bg-green/10 text-green",
    },
    {
      title: "Play-led",
      desc: "Real curriculum delivered through real fun.",
      icon: (
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      ),
      bg: "bg-purple/10 text-purple",
    },
    {
      title: "Globally minded",
      desc: "Languages, cultures & ideas from everywhere.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      bg: "bg-amber/10 text-amber",
    },
  ];

  return (
    <section
      id="about"
      className="bg-cream relative overflow-hidden py-20 lg:py-28"
    >
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-30 -left-20 w-90 h-90 bg-green/8 rounded-full blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Centered Heading Block */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2.5 font-bold text-[12px] uppercase tracking-widest text-green mb-3">
            <span className="w-6 h-0.5 bg-current rounded-full"></span>
            Our story
            <span className="w-6 h-0.5 bg-current rounded-full"></span>
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-navy leading-tight max-w-[800px] mx-auto">
            A focused workshop built around communication, confidence, and
            leadership.
          </h2>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[650px] mx-auto mt-4">
            This summer program is designed for students who want practical
            skills for presentations, interviews, teamwork, and day-to-day
            self-management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Montage */}
          <div
            className="relative w-full aspect-[1/1.1] max-w-[520px] mx-auto reveal"
            aria-hidden="true"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-green/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob blur-2xl -z-10"></div>

            <div className="absolute top-0 left-0 w-[65%] aspect-square bg-purple rounded-[24px] rotate-[-6deg] overflow-hidden shadow-2xl border-6 border-white transition-transform hover:rotate-0 duration-500">
              <Image
                src="/std-image.jpeg"
                alt="Workshop Learning Environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 65vw, 340px"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] aspect-square bg-pink rounded-full overflow-hidden shadow-2xl border-6 border-white transition-transform hover:scale-105 duration-500">
              <Image
                src="/assets/sandip.png"
                alt="Sandip Poudel - Founder of Alloria Learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 310px"
              />
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute top-[40%] left-[38%] bg-white p-5 pr-7 rounded-2xl shadow-xl flex items-center gap-4 border border-line animate-float z-20">
              <div className="w-12 h-12 rounded-xl bg-coral/10 grid place-items-center text-coral">
                <span className="text-2xl font-display font-black leading-none">
                  8
                </span>
              </div>
              <div>
                <div className="text-[14px] text-navy font-black leading-none">
                  Weeks
                </div>
                <div className="text-[11px] text-ink-mute font-bold uppercase tracking-wider mt-0.5">
                  Focused Growth
                </div>
              </div>
            </div>
          </div>

          {/* Right: Values & Founder */}
          <div className="flex flex-col gap-10">
            <div className="grid sm:grid-cols-2 gap-5 reveal">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-sm border border-line transition-all hover:shadow-md hover:border-green/20 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl grid place-items-center shrink-0 transition-transform group-hover:scale-110 ${v.bg}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {v.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-display font-bold text-navy mb-2">
                      {v.title}
                    </h4>
                    <p className="text-[15px] text-ink-soft leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Quote Card */}
            <div className="reveal">
              <div className="bg-navy rounded-[32px] p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10 group">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-coral/20 transition-colors duration-700"></div>

                <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                  <div className="shrink-0 relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 relative">
                      <Image
                        src="/assets/sandip.png"
                        alt="Sandip Poudel"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, 112px"
                      />
                    </div>
                    {/* Tiny badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-coral grid place-items-center shadow-lg">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex-1">
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-coral mb-2">
                      Founder & Director
                    </div>
                    <h4 className="text-2xl font-display font-bold mb-3">
                      Sandip Poudel
                    </h4>
                    <div className="relative">
                      <svg
                        className="absolute -left-2 -top-2 w-8 h-8 text-white/5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L19 16C19.11 16 19.222 16.011 19.332 16.031C19.458 15.176 19.5 14.301 19.5 13.402C19.5 12.015 19.245 10.742 18.735 9.584C18.225 8.426 17.514 7.426 16.602 6.584C15.69 5.742 14.633 5.12 13.43 4.72C12.227 4.32 10.957 4.12 9.62 4.12C8.283 4.12 7.013 4.32 5.81 4.72C4.607 5.12 3.55 5.742 2.638 6.584C1.726 7.426 1.015 8.426 0.505 9.584C-0.005 10.742 -0.26 12.015 -0.26 13.402C-0.26 14.789 -0.005 16.062 0.505 17.22C1.015 18.378 1.726 19.378 2.638 20.22C3.55 21.062 4.607 21.684 5.81 22.084C7.013 22.484 8.283 22.684 9.62 22.684L9.62 21L14.017 21ZM24 21L24 18C24 16.899 24.882 16 26 16L29 16C29.11 16 29.222 16.011 29.332 16.031C29.458 15.176 29.5 14.301 29.5 13.402C29.5 12.015 29.245 10.742 28.735 9.584C28.225 8.426 27.514 7.426 26.602 6.584C25.69 5.742 24.633 5.12 23.43 4.72C22.227 4.32 20.957 4.12 19.62 4.12C18.283 4.12 17.013 4.32 15.81 4.72C14.607 5.12 13.55 5.742 12.638 6.584C11.726 7.426 11.015 8.426 10.505 9.584C9.995 10.742 9.74 12.015 9.74 13.402C9.74 14.789 9.995 16.062 10.505 17.22C11.015 18.378 11.726 19.378 12.638 20.22C13.55 21.062 14.607 21.684 15.81 22.084C17.013 22.484 18.283 22.684 19.62 22.684L19.62 21L24 21Z" />
                      </svg>
                      <blockquote className="text-[16px] text-white/90 leading-relaxed italic border-l-2 border-coral/40 pl-6 py-1">
                        &ldquo;Building a workshop community where students grow
                        with confidence and leadership skills is our lifelong
                        passion.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
