/**
 * Realistic "design desk" objects from the HeyBuds project. Every size inside
 * is in container-query units (cqw), so each object scales with its width.
 */

import { HEYBUDS } from './work'

const HB = { rust: '#a53e1b', plum: '#6b3466', indigo: '#173998', ink: '#111111' }
const PENCIL = '#3a4255'
const RED_PEN = '#d93f3f'
const BLUE_PEN = '#2f6fd6'
const SORA = { fontFamily: 'var(--font-sora), var(--font-display)' }
const MANROPE = { fontFamily: 'var(--font-manrope), var(--font-sans)' }

/** Translucent strip of masking tape. */
export function Tape({ className = '', rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <span
      aria-hidden
      className={`absolute h-[9cqw] w-[30cqw] bg-[#f3eedd]/75 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath: 'polygon(2% 8%, 0 30%, 3% 55%, 0 80%, 2% 100%, 98% 94%, 100% 70%, 97% 45%, 100% 20%, 98% 0)',
      }}
    />
  )
}

/** Black binder clip. */
function BinderClip({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 44" className={`absolute ${className}`} aria-hidden>
      <path d="M14 2 C 6 2, 6 18, 16 20 M46 2 C 54 2, 54 18, 44 20" fill="none" stroke="#9aa0a8" strokeWidth="2.4" />
      <path d="M8 18 H52 L48 42 H12 Z" fill="#1b1e24" />
      <path d="M10 20 H50" stroke="#3a3f48" strokeWidth="2" />
    </svg>
  )
}

/** Pencil wireframe of the HeyBuds homepage (16:10, same layout as the live page). */
export function WireframeSheet() {
  return (
    <div className="paper relative h-full w-full">
      <Tape className="-top-[3cqw] left-[8cqw]" rotate={-6} />
      <Tape className="-top-[3cqw] right-[8cqw]" rotate={5} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 h-full w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* floating nav bar */}
        <rect x="24" y="7" width="352" height="22" rx="11" stroke={PENCIL} strokeWidth="1.4" />
        <circle cx="40" cy="18" r="5.5" stroke={PENCIL} strokeWidth="1.3" />
        <path d="M50 18 q 18 -2 36 0" stroke={PENCIL} strokeWidth="3" />
        {[138, 164, 192, 220, 244].map((x) => (
          <path key={x} d={`M${x} 18 q 8 -1.5 16 0.5`} stroke={PENCIL} strokeWidth="1.3" />
        ))}
        <rect x="316" y="11" width="52" height="14" rx="7" stroke={PENCIL} strokeWidth="1.4" />
        {/* free-trial line */}
        <circle cx="24" cy="99" r="3.6" stroke={PENCIL} strokeWidth="1.2" />
        <path d="M32 99 q 20 -1.5 40 0" stroke={PENCIL} strokeOpacity=".6" strokeWidth="1.3" />
        {/* four-line headline, first words in the gradient */}
        <path d="M20 123 C 50 121, 80 125, 112 122" stroke={HB.rust} strokeWidth="12" strokeOpacity=".55" />
        <path d="M118 123 C 135 121, 150 124, 166 122" stroke={PENCIL} strokeWidth="12" strokeOpacity=".7" />
        <path d="M20 142 C 70 140, 140 144, 188 141" stroke={PENCIL} strokeWidth="12" strokeOpacity=".7" />
        <path d="M20 161 C 70 159, 130 163, 180 160" stroke={PENCIL} strokeWidth="12" strokeOpacity=".7" />
        <path d="M20 180 C 70 178, 150 182, 195 179" stroke={PENCIL} strokeWidth="12" strokeOpacity=".7" />
        {/* paragraph */}
        <path d="M20 202 C 70 200, 140 204, 183 201" stroke={PENCIL} strokeOpacity=".45" strokeWidth="1.3" />
        <path d="M20 211 C 60 209, 120 213, 155 210" stroke={PENCIL} strokeOpacity=".45" strokeWidth="1.3" />
        {/* hero photo */}
        <path d="M222 58 L376 56 L377 249 L221 250" stroke={PENCIL} strokeOpacity=".5" strokeWidth="1.2" strokeDasharray="4 4" />
        <ellipse cx="300" cy="104" rx="25" ry="30" stroke={PENCIL} strokeWidth="1.3" />
        <path d="M250 250 C 255 185, 345 185, 352 250" stroke={PENCIL} strokeWidth="1.3" />
        {/* chat bubble with bot avatar */}
        <circle cx="210" cy="177" r="10" stroke={HB.rust} strokeWidth="1.4" />
        <path d="M222 168 H325 a 9.5 9.5 0 0 1 0 19 H222 Z" stroke={PENCIL} strokeWidth="1.4" />
        <path d="M230 177 q 35 -1.5 70 0" stroke={PENCIL} strokeOpacity=".5" strokeWidth="1.2" />
        {/* annotations */}
        <text x="44" y="112" fontFamily="var(--font-hand)" fontSize="13" fill={BLUE_PEN}>gradient on "AI Employees"</text>
        <text x="300" y="206" fontFamily="var(--font-hand)" fontSize="13" fill={RED_PEN}>types itself!</text>
        <path d="M318 196 C 316 192, 314 190, 312 188" stroke={RED_PEN} strokeWidth="1.2" />
        <text x="306" y="74" fontFamily="var(--font-hand)" fontSize="12" fill={PENCIL} fillOpacity=".7">real person, warm</text>
      </svg>
      {/* coffee ring left on the sketch */}
      <span aria-hidden className="absolute bottom-[3cqw] left-[48cqw] h-[19cqw] w-[19cqw] rounded-full border-[1.5cqw] border-[#8a5a2b]/12" />
    </div>
  )
}

/** Three pencil logo concepts; "C" is circled and became the HeyBuds mark. */
export function LogoConcepts() {
  return (
    <div className="paper relative h-full w-full p-[7cqw]">
      <div className="font-hand text-[10cqw] leading-none text-[#1f2a44]">HeyBuds — logo ideas</div>
      <div className="mt-[5cqw] grid grid-cols-3 gap-[4cqw]">
        {/* A: plain speech bubble */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 40 40" className="w-full" fill="none" stroke={PENCIL} strokeWidth="1.4" strokeLinejoin="round">
            <path d="M6 8 H34 V27 H17 L10 34 V27 H6 Z" />
          </svg>
          <span className="mt-[2cqw] font-hand text-[9cqw] text-[#6b7280]">A</span>
        </div>
        {/* B: robot head */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 40 40" className="w-full" fill="none" stroke={PENCIL} strokeWidth="1.4">
            <rect x="8" y="12" width="24" height="20" rx="5" />
            <path d="M20 12 V6" />
            <circle cx="20" cy="5" r="1.8" />
            <circle cx="15" cy="21" r="2" />
            <circle cx="25" cy="21" r="2" />
            <path d="M15 27 q 5 3 10 0" />
          </svg>
          <span className="mt-[2cqw] font-hand text-[9cqw] text-[#6b7280]">B</span>
        </div>
        {/* C: bubble buddy with headset (chosen) */}
        <div className="relative flex flex-col items-center">
          <svg viewBox="0 0 40 40" className="w-full" fill="none" strokeWidth="1.4" strokeLinejoin="round">
            <path d="M9 10 H31 a 4 4 0 0 1 4 4 V25 a 4 4 0 0 1 -4 4 H19 L12 35 V29 H9 a 4 4 0 0 1 -4 -4 V14 a 4 4 0 0 1 4 -4 Z" stroke={HB.indigo} />
            <path d="M4 19 v4 M36 19 v4" stroke={HB.rust} strokeWidth="2.4" />
            <path d="M13 23 L16 15 L19 23 M22 15 L25 19 L28 15 M25 19 V23" stroke={HB.rust} />
          </svg>
          <span className="mt-[2cqw] font-hand text-[9cqw] text-[#6b7280]">C</span>
          <svg viewBox="0 0 50 60" className="absolute -inset-[3cqw] h-[calc(100%+6cqw)] w-[calc(100%+6cqw)]" fill="none">
            <ellipse cx="25" cy="27" rx="22" ry="25" stroke={RED_PEN} strokeWidth="1.4" transform="rotate(-8 25 27)" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[6cqw] right-[7cqw] -rotate-6 font-hand text-[10cqw] text-[#d93f3f]">this one ✓</div>
    </div>
  )
}

/** Clipped colour palette card with the brand gradient. */
export function PaletteCard() {
  const chips = [
    ['Rust', HB.rust],
    ['Plum', HB.plum],
    ['Indigo', HB.indigo],
    ['Ink', HB.ink],
  ]
  return (
    <div className="relative flex h-full w-full flex-col bg-[#fdfdfb] p-[7cqw] pt-[12cqw]">
      <BinderClip className="-top-[9cqw] left-1/2 w-[30cqw] -translate-x-1/2" />
      <div className="grid flex-1 grid-cols-2 gap-[5cqw]">
        {chips.map(([name, hex]) => (
          <div key={name} className="flex flex-col">
            <div className="flex-1 ring-1 ring-black/5" style={{ background: hex }} />
            <div className="pt-[2.4cqw] leading-tight text-[#1f2a44]">
              <div className="text-[7.5cqw] font-semibold">{name}</div>
              <div className="text-[6.5cqw] uppercase text-[#6b7280]">{hex}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[5cqw] h-[9cqw] rounded-full" style={{ background: `linear-gradient(90deg, ${HB.rust}, ${HB.indigo})` }} />
    </div>
  )
}

/** Type specimen card: Sora for headlines, Manrope for body. */
export function TypeCard() {
  return (
    <div className="paper flex h-full w-full flex-col justify-between overflow-hidden p-[9cqw] text-[#111]">
      <div className="flex items-baseline gap-[4cqw] whitespace-nowrap leading-[0.8]">
        <span className="text-[38cqw] font-semibold tracking-[-0.03em]" style={SORA}>Aa</span>
        <span className="text-[26cqw] text-[#6b7280]" style={MANROPE}>Aa</span>
      </div>
      <div>
        <div className="text-[10cqw] font-semibold" style={SORA}>Sora + Manrope</div>
        <div className="whitespace-nowrap text-[7cqw] text-[#6b7280]">Headlines 600 · Body 400</div>
        <div className="mt-[4cqw] truncate text-[8cqw] tracking-wide text-[#6b7280]" style={SORA}>
          ABCDEFGHIJKLMN
        </div>
      </div>
    </div>
  )
}

/** Polaroid from the photoshoot, cropped from the live hero. */
export function Polaroid() {
  return (
    <div className="relative h-full w-full bg-[#fdfdfb] px-[6cqw] pb-[20cqw] pt-[6cqw]">
      <Tape className="-top-[4cqw] left-1/2 -translate-x-1/2" rotate={-3} />
      <div
        className="h-full w-full bg-no-repeat shadow-[inset_0_0_6cqw_rgba(0,0,0,0.18)]"
        style={{ backgroundImage: `url(${HEYBUDS.shot})`, backgroundSize: '340% auto', backgroundPosition: '85% 30%' }}
      />
      <span className="absolute bottom-[5cqw] left-0 right-0 text-center font-hand text-[11cqw] text-[#1f2a44]">
        shoot — final pick ✓
      </span>
    </div>
  )
}

/** Printed draft of the chat bubble with red-pen notes. */
export function ChatDraft() {
  return (
    <div className="relative flex h-full w-full items-center gap-[3cqw] bg-white px-[5cqw]">
      <Tape className="-top-[4cqw] right-[10cqw] !w-[18cqw]" rotate={6} />
      <div className="grid h-[24cqw] w-[24cqw] shrink-0 place-items-center rounded-full bg-[#7a7a7a]">
        <svg viewBox="0 0 24 24" className="h-[13cqw] w-[13cqw]" fill="none" stroke="#fff" strokeWidth="1.6">
          <rect x="5" y="8" width="14" height="11" rx="3" />
          <path d="M12 8 V5" />
          <circle cx="9.5" cy="13" r="1" fill="#fff" />
          <circle cx="14.5" cy="13" r="1" fill="#fff" />
        </svg>
      </div>
      <div className="flex-1 rounded-full border border-[#cfcfcf] px-[4cqw] py-[4cqw] text-[4.6cqw] text-[#444]" style={MANROPE}>
        Hi, I can help answer customer questions instantly.
        <span className="ml-[1cqw] inline-block h-[4.6cqw] w-px translate-y-[0.6cqw] bg-[#444]" />
      </div>
      <span className="absolute -bottom-[10cqw] left-[24cqw] -rotate-3 whitespace-nowrap font-hand text-[7cqw] text-[#d93f3f]">
        bot in brand rust, type it out ↗
      </span>
    </div>
  )
}

/** Square sticky note with a design-review comment. */
export function StickyNote({ text, color }: { text: string; color: 'yellow' | 'blue' | 'pink' }) {
  const tones = {
    yellow: ['#f7dd62', '#fde98a'],
    blue: ['#9fd0f7', '#bfe0fb'],
    pink: ['#f7a8c4', '#fbc6d8'],
  }[color]
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-[10cqw] text-center"
      style={{ background: `linear-gradient(180deg, ${tones[0]} 0%, ${tones[1]} 16%, ${tones[1]} 70%, ${tones[0]} 100%)` }}
    >
      <span className="-rotate-2 font-hand text-[16cqw] font-semibold leading-[1.05] text-[#1f2a44]">{text}</span>
      <span
        aria-hidden
        className="absolute bottom-0 right-0 h-[22cqw] w-[22cqw]"
        style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.08) 50%, rgba(255,255,255,0.5) 100%)' }}
      />
    </div>
  )
}

/** Code editor snippet for the hero chat bubble. */
export function CodeCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.5cqw] bg-[#0f1420] font-mono text-[4.2cqw] leading-[1.6]">
      <div className="flex items-center gap-[1.6cqw] border-b border-white/5 px-[4cqw] py-[2.6cqw]">
        <span className="h-[2.4cqw] w-[2.4cqw] rounded-full bg-[#ff5f57]" />
        <span className="h-[2.4cqw] w-[2.4cqw] rounded-full bg-[#febc2e]" />
        <span className="h-[2.4cqw] w-[2.4cqw] rounded-full bg-[#28c840]" />
        <span className="ml-[3cqw] text-[3.6cqw] text-white/40">Hero.tsx</span>
      </div>
      <pre className="flex-1 px-[5cqw] py-[3.5cqw] text-[#c9d1d9]">
        <span className="text-[#ff7b72]">{'<'}</span>
        <span className="text-[#7ee787]">ChatBubble</span> <span className="text-[#79c0ff]">avatar</span>=
        <span className="text-[#a5d6ff]">"bot"</span> <span className="text-[#79c0ff]">typing</span>
        <span className="text-[#ff7b72]">{'>'}</span>
        {'\n  Hi, I can help answer\n  customer questions instantly.\n'}
        <span className="text-[#ff7b72]">{'</'}</span>
        <span className="text-[#7ee787]">ChatBubble</span>
        <span className="text-[#ff7b72]">{'>'}</span>
      </pre>
    </div>
  )
}

/** Yellow HB pencil. */
export function Pencil() {
  return (
    <svg viewBox="0 0 300 26" className="h-full w-full drop-shadow-[0_6px_6px_rgba(11,26,58,0.25)]">
      <defs>
        <linearGradient id="pencil-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd866" />
          <stop offset=".35" stopColor="#f7c33c" />
          <stop offset=".65" stopColor="#e8ab22" />
          <stop offset="1" stopColor="#c98d14" />
        </linearGradient>
        <linearGradient id="pencil-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1f1f1" />
          <stop offset=".5" stopColor="#a9a9a9" />
          <stop offset="1" stopColor="#7d7d7d" />
        </linearGradient>
      </defs>
      <rect x="0" y="3" width="22" height="20" rx="4" fill="#f08a9b" />
      <rect x="20" y="2" width="20" height="22" fill="url(#pencil-metal)" />
      <path d="M24 2v22M30 2v22M36 2v22" stroke="#8a8a8a" strokeWidth=".8" />
      <rect x="40" y="3" width="210" height="20" fill="url(#pencil-body)" />
      <path d="M40 10h210M40 16h210" stroke="#b47b0d" strokeOpacity=".35" strokeWidth=".8" />
      <text x="70" y="17" fontSize="7" fontFamily="var(--font-sans)" fill="#5b3d00" fillOpacity=".7" letterSpacing="1">INNOVATIX · HB</text>
      <path d="M250 3 L286 11 L286 15 L250 23 Z" fill="#e9c79c" />
      <path d="M278 9.2 L300 13 L278 16.8 Z" fill="#2d2d2d" />
    </svg>
  )
}

/** Pink eraser in a paper sleeve. */
export function Eraser() {
  return (
    <svg viewBox="0 0 120 46" className="h-full w-full drop-shadow-[0_6px_6px_rgba(11,26,58,0.22)]">
      <path d="M6 8 Q 4 23 6 38 L30 38 L30 8 Z" fill="#f4a6b4" />
      <rect x="28" y="6" width="88" height="34" rx="3" fill="#2f6fd6" />
      <rect x="28" y="6" width="88" height="12" fill="#ffffff" fillOpacity=".9" />
      <text x="40" y="33" fontSize="10" fontFamily="var(--font-sans)" fontWeight="700" fill="#fff" letterSpacing="1">ERASER</text>
    </svg>
  )
}
