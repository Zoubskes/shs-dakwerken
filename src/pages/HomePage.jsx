import React from 'react';
import { trustStats } from '../data';

export function HomePage({ onNavigate, heroBackgroundUrl, brand }) {
  return (
    <section className="relative overflow-hidden bg-[#fffdf5]">
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundUrl}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-54 saturate-100"
            style={{ objectPosition: 'center 42%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 88% 92%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.05) 16%, rgba(255,248,219,0.02) 30%, transparent 58%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/14 via-white/6 to-transparent" />
          <div className="absolute right-0 bottom-0 h-[18rem] w-[18rem] rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute right-8 bottom-8 h-[10rem] w-[10rem] rounded-full bg-sand-100/[0.04] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-7xl items-center px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Jouw dak, klaar voor <span className="text-sand-400">de toekomst</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white sm:text-xl">
                Van reparatie tot complete dakrenovatie - SHS-Dakwerken staat voor vakmanschap, kwaliteit en een duurzaam dak.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('/contact')}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                Vraag gratis advies aan
              </button>
              <a
                href={brand.phoneHref}
                className="rounded-full border border-sand-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
              >
                Bel: {brand.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-white">
              <span className="text-xl leading-none">↓</span>
              Scroll om meer te ontdekken
            </div>
          </div>
        </div>
      </div>

      <section className="border-y border-white/10 bg-[#0d1d2f] text-white shadow-[0_-1px_0_rgba(255,255,255,0.04)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-stretch justify-between gap-3 py-4 md:flex-row md:items-center md:gap-0">
            {trustStats.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-1 items-center justify-center gap-3 px-2 text-sm font-semibold ${
                  index !== trustStats.length - 1 ? 'md:border-r md:border-white/10' : ''
                }`}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                  ✓
                </span>
                <span className="whitespace-nowrap text-white/90">{item.label}</span>
              </div>
            ))}
            <div className="flex flex-1 items-center justify-center gap-3 px-2 text-sm font-semibold md:border-l md:border-white/10">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                ✓
              </span>
              <span className="whitespace-nowrap text-white/90">Van inspectie tot oplevering</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
