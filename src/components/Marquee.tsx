export default function Marquee() {
  const items = [
    "Public Speaking", "Confidence", "Leadership", "Critical Thinking", 
    "Teamwork", "Self-Management", "Presentation Skills", "Personality Development"
  ];

  return (
    <div className="bg-navy text-white py-4.5 overflow-hidden border-t-4 border-b-4 border-amber" aria-hidden="true">
      <div className="flex gap-14 w-max animate-marquee font-display font-medium text-[22px] whitespace-nowrap items-center">
        {[1, 2].map((i) => (
          <span key={i} className="inline-flex items-center gap-14">
            {items.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-14">
                {item} <span className="text-amber text-[22px]">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
