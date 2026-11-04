'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL, CONTACT_PHONE, ENQUIRY_CC, serviceOptions } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, FadeUp, MaskHeading } from './ui/Reveal'
import DarkSection from './ui/DarkSection'

const field =
  'w-full border-b border-paper/20 bg-transparent py-3 text-base text-paper placeholder:text-paper/35 outline-none transition-colors duration-300 focus:border-sky'

const details: { label: string; value: string; href?: string }[] = [
  { label: 'Response time', value: 'Within 24 business hours' },
  { label: 'Consultation', value: 'Free, by call or email' },
  { label: 'Phone', value: CONTACT_PHONE.display, href: CONTACT_PHONE.href },
]

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
const WEB3FORMS_PRO = process.env.NEXT_PUBLIC_WEB3FORMS_PRO === 'true'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const statusText: Record<Status, string> = {
  idle: 'We reply within 24 business hours.',
  sending: 'Sending…',
  sent: 'Thank you! Your enquiry has been sent. We will be in touch soon.',
  error: 'Something went wrong. Please try again, or email us directly.',
}

/** `page` swaps the big heading for contact details (the page header carries the title). */
export default function Contact({ variant = 'section' }: { variant?: 'section' | 'page' }) {
  const isPage = variant === 'page'
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return // filled in by a bot

    // Without a Web3Forms key, hand the enquiry to the visitor's email app instead.
    if (!WEB3FORMS_KEY) {
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Company: ${data.get('company') || '-'}`,
        `Service: ${data.get('service')}`,
        '',
        String(data.get('message')),
      ].join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project enquiry: ${data.get('service')}`)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry: ${data.get('service')} (${data.get('name')})`,
          from_name: 'Innovatix website',
          ...(WEB3FORMS_PRO && { ccemail: ENQUIRY_CC.join('; ') }),
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company') || '-',
          service: data.get('service'),
          message: data.get('message'),
        }),
      })
      const json = (await res.json()) as { success?: boolean }
      if (!json.success) throw new Error('Web3Forms rejected the submission')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <DarkSection id="contact" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 md:px-10 md:py-36 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <Eyebrow tone="dark">{isPage ? 'Send an enquiry' : 'Start a project'}</Eyebrow>
          {isPage ? (
            <dl id="contact-title" className="mt-10 space-y-8">
              {details.map((d) => (
                <div key={d.label} className="border-t border-paper/10 pt-5">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">{d.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-medium tracking-[-0.02em]">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-sky">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <>
              <MaskHeading
                id="contact-title"
                className="mt-6 text-[clamp(2.8rem,6vw,6rem)]"
                lines={["Let's build", <>something <Accent>useful.</Accent></>]}
              />
              <FadeUp delay={0.2} className="mt-8 max-w-md text-[17px] leading-relaxed text-paper/60">
                Tell us what you want to build, improve or automate. Our team typically replies within 24 business hours.
              </FadeUp>
            </>
          )}
          <FadeUp delay={0.3} className="mt-12">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-4 border-b border-paper/20 pb-2 text-[clamp(1rem,2vw,1.35rem)] transition-colors duration-300 hover:border-paper"
            >
              <Mail aria-hidden className="h-5 w-5 text-sky" />
              {CONTACT_EMAIL}
              <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </a>
          </FadeUp>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="space-y-8 self-end"
        >
          {/* spam trap: hidden from people, bots tend to tick it */}
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">Full name</span>
              <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">Email</span>
              <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
            </label>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">Company</span>
              <input name="company" autoComplete="organization" className={field} placeholder="Optional" />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">Interested in</span>
              <select name="service" className={`${field} cursor-pointer [&>option]:text-ink`} defaultValue={serviceOptions[1]}>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">Project details</span>
            <textarea name="message" required rows={4} className={`${field} resize-none`} placeholder="A few lines about your goals and timeline" />
          </label>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative isolate inline-flex cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-paper py-2 pl-6 pr-2 text-[15px] font-medium text-ink disabled:cursor-wait disabled:opacity-70"
            >
              <span aria-hidden className="absolute inset-0 -z-10 translate-y-full rounded-full bg-sky transition-transform duration-500 ease-expo group-hover:translate-y-0" />
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
              </span>
            </button>
            <p role="status" className={`text-sm ${status === 'sent' ? 'text-sky' : status === 'error' ? 'text-[#ff8a80]' : 'text-paper/60'}`}>
              {WEB3FORMS_KEY ? statusText[status] : 'Opens in your email app, ready to send.'}
            </p>
          </div>
        </motion.form>
      </div>
    </DarkSection>
  )
}
