import { ArrowRight } from "lucide-react";
import { LogoMark } from "./logo-mark";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050806]/70 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="group flex items-center gap-3">
          <LogoMark className="size-9 transition-transform duration-300 group-hover:scale-105" />
          <div>
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">
              MineMarker
            </span>
            <span className="block text-[0.64rem] uppercase tracking-[0.24em] text-emerald-200/65">
              Creator editing assistant
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-stone-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#early-access"
          className="group inline-flex items-center gap-2 border border-emerald-300/40 bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-[#071008] shadow-[0_0_28px_rgba(64,255,150,0.18)] transition hover:bg-emerald-200"
        >
          Early access
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}
