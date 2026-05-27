import Link from "next/link";

/**
 * NotSEDAR's dark sticky header. BamSEC-style: dark navy bar, white
 * logo, horizontal nav. Site is a single-product BamSEC clone for
 * Canadian SEDAR+ filings — no UI switcher.
 */
export function NotSedarHeader() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-30 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center gap-6">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-bold text-base tracking-tight">NotSEDAR</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-400">
            demo
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">
            Companies
          </Link>
          <Link href="/filings" className="hover:text-white">
            Filings
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </nav>
        <div className="ml-auto text-xs text-slate-400">
          Canadian public filings · BamSEC-style
        </div>
      </div>
    </header>
  );
}
