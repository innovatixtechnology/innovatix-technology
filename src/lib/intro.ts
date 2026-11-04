/** Seconds until the curtain has lifted; page entrances start from here. */
export const INTRO_DURATION = 1.7

export const INTRO_KEY = 'innovatix-intro-seen'

/**
 * Runs in <head> before first paint (see app/layout.tsx). Marks the intro as
 * seen when it should not play: already shown this session, reduced motion,
 * or the visit did not start on the homepage. CSS then hides the curtain.
 */
export const introBootScript = `try{if(location.pathname!=='/'||sessionStorage.getItem('${INTRO_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.introSeen='1'}}catch(e){}`

/** True when the curtain will play on this page view (client only). */
export function introWillPlay() {
  if (typeof document === 'undefined') return false
  return location.pathname === '/' && !document.documentElement.dataset.introSeen
}

/** Delay for entrance animations so they start as the curtain lifts. */
export function introDelay() {
  return introWillPlay() ? INTRO_DURATION : 0
}

export function markIntroSeen() {
  document.documentElement.dataset.introSeen = '1'
  try {
    sessionStorage.setItem(INTRO_KEY, '1')
  } catch {
    // storage unavailable: the curtain may replay on a full reload
  }
}
