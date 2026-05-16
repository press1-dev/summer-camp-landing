import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

// --- Types & Constants ---

const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "Workshop", href: "#courses" },
    { label: "Our Story", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  programs: [
    "Reading & Writing",
    "Public Speaking",
    "Leadership Skills",
    "Confidence Building",
    "Personality Development",
  ],
  socials: [
    // {
    //   label: "Instagram",
    //   href: "#",
    //   icon: (props: any) => (
    //     <svg
    //       {...props}
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    //       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    //       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Youtube",
    //   href: "#",
    //   icon: (props: any) => (
    //     <svg
    //       {...props}
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M2.5 7.1C2.6 5.9 3.5 5 4.7 4.9 7.3 4.6 12 4.6 12 4.6s4.7 0 7.3.3c1.2.1 2.1 1 2.2 2.2.3 2.7.3 5.5.3 5.5s0 2.8-.3 5.5c-.1 1.2-1 2.1-2.2 2.2-2.6.3-7.3.3-7.3.3s-4.7 0-7.3-.3c-1.2-.1-2.1-1-2.2-2.2C2.2 15.4 2.2 12.6 2.2 12.6s0-2.8.3-5.5Z" />
    //       <path d="m10 15 5-3-5-3z" />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "TikTok",
    //   href: "#",
    //   icon: (props: any) => (
    //     <svg
    //       {...props}
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    //     </svg>
    //   ),
    // },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61567503912462",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ],
};

// --- Sub-components ---

const FooterColumn = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <h4 className="text-white font-display text-[13px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2 opacity-80">
      {title}
      <span className="w-1 h-1 bg-coral rounded-full"></span>
    </h4>
    {children}
  </div>
);

const SocialIcon = ({
  icon: Icon,
  label,
  href,
}: {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  label: string;
  href: string;
}) => (
  <Link
    href={href}
    className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-coral hover:text-white transition-all duration-300 border border-white/10 hover:border-coral group"
    aria-label={label}
  >
    <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-white" />
  </Link>
);

const ContactItem = ({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}) => (
  <li className="flex items-center gap-3 group">
    <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/10 group-hover:border-coral/20 transition-colors">
      <Icon className="w-3.5 h-3.5 text-coral group-hover:text-white transition-colors" />
    </div>
    <div>
      <p className="text-white text-[9px] uppercase tracking-wider font-bold mb-0">
        {title}
      </p>
      {href ? (
        <Link
          href={href}
          className="text-[13px] text-white hover:text-coral transition-colors font-medium"
        >
          {value}
        </Link>
      ) : (
        <p className="text-[13px] text-white font-medium">{value}</p>
      )}
    </div>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-[#050212] text-white pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Dynamic Background Effects - Optimized Positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-coral/5 rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-navy/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              href="#home"
              className="inline-block group w-fit transition-opacity hover:opacity-80"
            >
              <div className="relative h-9 w-24">
                <Image
                  src="/alloria.png"
                  alt="Alloria Learning Center"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="96px"
                  priority
                />
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed max-w-[280px] text-white font-medium opacity-90">
              Developing character, communication, and confidence in young
              learners through expertly guided online workshops.
            </p>
            <div className="flex gap-2 mt-1">
              {FOOTER_LINKS.socials.map((social, i) => (
                <SocialIcon key={i} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Explore" className="lg:col-span-2">
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white hover:text-coral transition-all flex items-center group font-medium"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-2.5 h-2.5 mr-1.5 text-coral" />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Programs */}
          <FooterColumn title="Programs" className="lg:col-span-3">
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link}>
                  <a
                    href="#courses"
                    className="text-[13px] text-white hover:text-coral transition-colors font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact Information */}
          <FooterColumn title="Contact" className="lg:col-span-3">
            <ul className="flex flex-col gap-4">
              <ContactItem
                icon={Phone}
                title="Direct Line"
                value="+1 (720) 242-6452"
                href="tel:+17202426452"
              />
              <ContactItem
                icon={Mail}
                title="Support Email"
                value="allorialearning@gmail.com"
                href="mailto:allorialearning@gmail.com"
              />
              <ContactItem
                icon={MapPin}
                title="Headquarters"
                value="Online · Global Presence"
              />
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white font-semibold tracking-wide">
            © {new Date().getFullYear()} Alloria Learning Center. Crafted with
            Precision.
          </p>
          <div className="flex gap-6 text-[11px]">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-coral transition-colors font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
