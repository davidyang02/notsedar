import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">About NotSEDAR</h1>
      <p className="mt-4 text-slate-700 leading-relaxed">
        A faster, cleaner browser for Canadian public-company filings.{" "}
        <strong>SEDAR+ data, BamSEC-style UI.</strong>
      </p>

      <section className="mt-8 space-y-3 text-slate-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-900">
          The pitch
        </h2>
        <p>
          SEDAR+ — the Canadian Securities Administrators&apos; filings system
          — has every disclosure filed by every Canadian public company.
          Financial statements, MD&amp;A, prospectuses, material change reports,
          insider transactions, proxy circulars. It also has a 90s interface.
        </p>
        <p>
          NotSEDAR re-presents the same data in the layout pioneered by{" "}
          <a
            href="https://www.bamsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 underline hover:text-blue-700"
          >
            BamSEC
          </a>{" "}
          for US EDGAR: dense, list-driven, categorized by filing kind
          (Financials / Prospectuses / Ownership / News / Proxies / Other),
          with chronological + insider-transaction tabs to switch views.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-900">Demo scope</h2>
        <p>
          Early preview. We track 2,187 TSX/TSXV-listed issuers (live from the
          April 2026 TMX snapshot), with hand-curated filings for 8 featured
          issuers and 2 filings extracted in depth. The production version
          will ingest SEDAR+ filings via a Playwright-based crawler and
          extract key data points from structured filings (XBRL/iXBRL).
        </p>
        <p>
          <strong>SEDAR+ links:</strong> SEDAR+ doesn&apos;t expose static deep-
          link URLs to individual filings — every document URL requires
          session state. The &ldquo;Search on SEDAR+&rdquo; button lands you
          on their search form; the production crawler will provide real
          deep-links from the captured filing IDs.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-900">Sister product</h2>
        <p>
          Same data, different UI:{" "}
          <a
            href="https://openbsis-sedar.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 underline hover:text-blue-700"
          >
            OpenSEDAR
          </a>{" "}
          — a custom UI with extracted-content surface, watchlists, and live
          filings table. NotSEDAR mirrors BamSEC&apos;s aesthetic; OpenSEDAR
          experiments with a more product-design approach.
        </p>
      </section>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link
          href="/"
          className="text-sm text-slate-700 hover:text-slate-900 hover:underline"
        >
          ← Back to companies
        </Link>
      </div>
    </div>
  );
}
