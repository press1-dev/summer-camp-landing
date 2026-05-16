import { Facebook, Instagram, Youtube } from "@thesvg/react";
import { Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2B1B7A] text-white/70 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blob - Top Right */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 bg-[#2B1B7A]/10 rounded-sm"></div>
            </div>
            <p className="text-[15px] leading-relaxed max-w-[280px]">
              A focused summer workshop for students building communication,
              confidence, and leadership through small online groups.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "Youtube" },
                { icon: Music, label: "TikTok" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-white font-display text-lg font-bold mb-8">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Home",
                "All Courses",
                "About Us",
                "Contact",
                "Blog & News",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-white font-display text-lg font-bold mb-8">
              Programs
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Reading & Writing",
                "Public Speaking",
                "Leadership Skills",
                "Confidence Building",
                "Personality Development",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display text-lg font-bold mb-8">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-[15px]">
              <li>+1 (720) 242-6452</li>
              <li>info@alloria.com</li>
              <li>Online · Always Open</li>
            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[13px]">
            © 2026 Alloria Learning Center · Personal Development Workshop.

          </div>
          <div className="flex gap-8 text-[13px]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
