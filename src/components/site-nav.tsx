import { ArrowRight } from "lucide-react";
import { LogoMark } from "./logo-mark";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Product", href: "#showcase" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <LogoMark className="size-9 transition-transform duration-300 group-hover:scale-105" />
          <div className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm sm:tracking-[0.28em]">
              MineMarker
            </span>
            <span className="hidden text-[0.64rem] uppercase tracking-[0.24em] text-emerald-200/65 sm:block">
              Creator editing assistant
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-10 text-sm text-stone-300 lg:flex">
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

        <div className="flex items-center gap-3">
          <span className="hidden border border-emerald-300/35 bg-emerald-300/5 px-3 py-2 text-xs font-semibold text-emerald-200 sm:inline-flex">
            Pre-release beta
          </span>
          <a
            href="#early-access"
            className="group inline-flex shrink-0 items-center gap-2 bg-emerald-300 px-3 py-2.5 text-xs font-bold text-[#071008] shadow-[0_0_28px_rgba(64,255,150,0.18)] transition hover:bg-emerald-200 sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Join</span>
            <span className="hidden sm:inline">Join the waitlist</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
