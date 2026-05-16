export default function Testimonials() {
  const reviews = [
    {
      quote: "My daughter went from 'I don't like reading' to begging for one more chapter at bedtime. Ms. Amara and her team are pure magic.",
      name: "Lena Morales",
      role: "Parent · Storybook Adventurers",
      bg: "bg-coral",
      initials: "LM"
    },
    {
      quote: "We've tried four learning centers. Alloria is the only one where my son runs IN instead of dragging his feet. The small class sizes make a huge difference.",
      name: "David & Priya Patel",
      role: "Parents · Tiny Engineers",
      bg: "bg-amber",
      initials: "DP",
      featured: true
    },
    {
      quote: "The summer art studio gave my shy 6-year-old a voice. She came home with paintings, but also with confidence we hadn't seen before.",
      name: "Jenny Kim",
      role: "Parent · Little Picasso",
      bg: "bg-green",
      initials: "JK"
    }
  ];

  return (
    <section className="bg-sky relative overflow-hidden py-20 lg:py-28">
      <div className="absolute top-[60px] left-[8%] w-20 h-20 bg-amber/30 rounded-full"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 relative">
        <div className="max-w-[720px] mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2.5 font-bold text-[13px] uppercase tracking-widest text-purple mb-4">
            <span className="w-7 h-0.5 bg-current rounded-full"></span>
            Loved by families
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] mb-4">Real words from real parents</h2>
          <p className="text-lg text-ink-soft">Trusted by hundreds of Bay-Area families. Here's what they say after a season with us.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article 
              key={i} 
              className={`reveal p-7 rounded-lg shadow-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 ${
                r.featured ? "bg-navy text-white" : "bg-white text-ink"
              }`}
            >
              <div className={`font-display text-[64px] leading-[0.5] mb-[-20px] ${r.featured ? "text-amber" : "text-coral"}`}>
                "
              </div>
              <p className={`text-[16.5px] leading-relaxed flex-1 ${r.featured ? "text-white" : "text-ink"}`}>
                {r.quote}
              </p>
              <div className={`flex items-center gap-3.5 pt-4 border-t border-dashed ${r.featured ? "border-white/20" : "border-black/10"}`}>
                <div className={`w-12 h-12 rounded-full grid place-items-center text-white font-display font-semibold text-[18px] shrink-0 ${r.bg}`}>
                  {r.initials}
                </div>
                <div>
                  <div className={`font-display font-semibold text-[16px] ${r.featured ? "text-white" : "text-ink"}`}>{r.name}</div>
                  <div className={`text-[12.5px] font-bold tracking-tight ${r.featured ? "text-white/70" : "text-ink-mute"}`}>{r.role}</div>
                </div>
                <div className="ml-auto text-amber text-[16px]">★★★★★</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
