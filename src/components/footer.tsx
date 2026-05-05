import { LogoMark } from "./logo-mark";

const links = [
  { label: "GitHub", href: "https://github.com/swaritsawarkar/minemarker" },
  {
    label: "Beta download",
    href: "https://github.com/swaritsawarkar/minemarker/releases/download/v4.3.0/MineMarker-Timeline-Viewer-4.3.0-Portable-x64.exe",
  },
  { label: "Release notes", href: "https://github.com/swaritsawarkar/minemarker/releases/tag/v4.3.0" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050806] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="size-9" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">MineMarker</p>
            <p className="text-xs text-stone-500">Pre-release Minecraft creator editing assistant.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-stone-400">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-emerald-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
