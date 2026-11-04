import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto flex min-h-[80svh] max-w-[1400px] flex-col justify-center px-6 pt-32 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">404</p>
        <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          This page is <em className="text-brand-gradient pr-[0.06em] font-serif font-normal">missing.</em>
        </h1>
        <p className="mt-8 max-w-md text-[17px] leading-relaxed text-ink-soft">
          The link may be old, or the page has moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 text-[15px] font-medium">
          <Link href="/" className="border-b border-ink pb-1">Go to homepage</Link>
          <Link href="/work" className="border-b border-ink/25 pb-1 hover:border-ink">See our work</Link>
          <Link href="/contact" className="border-b border-ink/25 pb-1 hover:border-ink">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
