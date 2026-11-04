import type { ReactNode } from 'react'
import {
  ChatDraft,
  CodeCard,
  Eraser,
  LogoConcepts,
  PaletteCard,
  Pencil,
  Polaroid,
  StickyNote,
  TypeCard,
  WireframeSheet,
} from './Props'

type Spot = { x: number; y: number; r: number }

export type ChaosItemConfig = {
  id: string
  node: ReactNode
  /** Width in px at desktop scale. */
  base: number
  /** width / height */
  aspect: number
  /** Scatter position (center, % of stage) and rotation, per layout. */
  desk: Spot
  mobile: Spot
  /** Where it lands on the live HeyBuds hero (center + width, % of the browser content). */
  target?: { x: number; y: number; w: number }
  /** Items without a target are cleared off the desk in this direction (stage fractions). */
  exit?: { x: number; y: number; r: number }
  /** Mouse-parallax strength. */
  depth: number
  /** Box shadow (off for objects that draw their own). */
  card?: boolean
  /** Left off small screens to keep the desk readable. */
  mobileHidden?: boolean
}

// Order = scroll order: review notes are resolved and peel away first,
// then the design pieces assemble, then the tools get swept aside.
export const chaosItems: ChaosItemConfig[] = [
  {
    id: 'note-gradient',
    node: <StickyNote text="Gradient on “AI Employees”" color="yellow" />,
    base: 124,
    aspect: 1,
    desk: { x: 9, y: 44, r: -9 },
    mobile: { x: 88, y: 76, r: -7 },
    exit: { x: -0.35, y: -0.25, r: -35 },
    depth: 1.3,
    card: true,
  },
  {
    id: 'note-trial',
    node: <StickyNote text="Add the free-trial badge" color="pink" />,
    base: 114,
    aspect: 1,
    desk: { x: 10, y: 19, r: 6 },
    mobile: { x: 62, y: 26, r: 9 },
    exit: { x: -0.3, y: -0.45, r: -30 },
    depth: 1.2,
    card: true,
    mobileHidden: true,
  },
  {
    id: 'note-launch',
    node: <StickyNote text="Launch Friday!" color="blue" />,
    base: 124,
    aspect: 1,
    desk: { x: 89, y: 50, r: -6 },
    mobile: { x: 13, y: 77, r: 8 },
    exit: { x: 0.35, y: -0.2, r: 35 },
    depth: 1,
    card: true,
  },
  {
    id: 'wireframe',
    node: <WireframeSheet />,
    base: 420,
    aspect: 1.6,
    desk: { x: 20, y: 80, r: -5 },
    mobile: { x: 46, y: 93, r: -3 },
    target: { x: 50, y: 50, w: 100 },
    depth: 0.5,
    card: true,
  },
  {
    id: 'logo',
    node: <LogoConcepts />,
    base: 190,
    aspect: 1.3,
    desk: { x: 35, y: 16, r: -6 },
    mobile: { x: 22, y: 20, r: -6 },
    target: { x: 13.8, y: 7.3, w: 12.4 },
    depth: 1.1,
    card: true,
  },
  {
    id: 'palette',
    node: <PaletteCard />,
    base: 150,
    aspect: 0.82,
    desk: { x: 84, y: 23, r: 7 },
    mobile: { x: 83, y: 20, r: 8 },
    target: { x: 85.6, y: 7.2, w: 13.3 },
    depth: 1.3,
    card: true,
  },
  {
    id: 'type',
    node: <TypeCard />,
    base: 170,
    aspect: 0.82,
    desk: { x: 90, y: 80, r: 5 },
    mobile: { x: 88, y: 95, r: 6 },
    target: { x: 26.3, y: 60.5, w: 22 },
    depth: 0.9,
    card: true,
  },
  {
    id: 'photo',
    node: <Polaroid />,
    base: 190,
    aspect: 0.84,
    desk: { x: 68, y: 79, r: 7 },
    mobile: { x: 53, y: 20.5, r: -4 },
    target: { x: 74, y: 58, w: 30 },
    depth: 0.8,
    card: true,
  },
  {
    id: 'chat',
    node: <ChatDraft />,
    base: 250,
    aspect: 2.7,
    desk: { x: 63, y: 15, r: -4 },
    mobile: { x: 50, y: 77, r: -4 },
    target: { x: 66, y: 71, w: 32 },
    depth: 1,
    card: true,
  },
  {
    id: 'code',
    node: <CodeCard />,
    base: 290,
    aspect: 1.75,
    desk: { x: 48, y: 89, r: -3 },
    mobile: { x: 66, y: 100, r: -3 },
    target: { x: 12, y: 39.5, w: 14 },
    depth: 0.7,
    mobileHidden: true,
  },
  {
    id: 'pencil',
    node: <Pencil />,
    base: 300,
    aspect: 300 / 26,
    desk: { x: 7, y: 84, r: 68 },
    mobile: { x: 8, y: 91, r: 75 },
    exit: { x: -0.6, y: 0.5, r: 40 },
    depth: 1.5,
  },
  {
    id: 'eraser',
    node: <Eraser />,
    base: 110,
    aspect: 120 / 46,
    desk: { x: 58, y: 71, r: 14 },
    mobile: { x: 40, y: 97, r: 10 },
    exit: { x: 0.4, y: 0.6, r: 60 },
    depth: 1.4,
    mobileHidden: true,
  },
]
