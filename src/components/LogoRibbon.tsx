import { clientLogos, PARTNER } from '../lib/clients'
import { Eyebrow } from './ui/Reveal'

/** Same visual weight for wide and square logos: height shrinks as the logo gets wider. */
const displayHeight = (w: number, h: number) => Math.round(Math.min(68, Math.max(34, Math.sqrt(4200 / (w / h)))))

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20">
      {clientLogos.map((l) => {
        const h = displayHeight(l.width, l.height)
        return (
          <li key={l.src} className="shrink-0">
            <img
              src={l.src}
              alt={hidden ? '' : l.name}
              width={Math.round((l.width / l.height) * h)}
              height={h}
              loading="lazy"
              style={{ height: h }}
              className="w-auto mix-blend-multiply"
            />
          </li>
        )
      })}
    </ul>
  )
}

/** Client logos drifting left to right, with the partnership credit in the corner. */
export default function LogoRibbon() {
  return (
    <section aria-label={`Our clients, in partnership with ${PARTNER}`} className="marquee-pause relative mb-16 overflow-hidden border-y border-ink/10 bg-paper pb-12 pt-10 md:mb-20 md:pb-14 md:pt-12">
      <div className="mx-auto mb-10 max-w-[1400px] px-6 md:mb-12 md:px-10">
        <Eyebrow>Our clients</Eyebrow>
      </div>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-right flex w-max bg-paper">
          <Row />
          <Row hidden />
        </div>
      </div>
      <p className="absolute bottom-2.5 right-6 text-[9px] tracking-[0.04em] text-ink-soft md:bottom-4 md:right-10 md:text-[11px]">
        In partnership with <span className="font-medium text-ink">{PARTNER}</span>
      </p>
    </section>
  )
}
