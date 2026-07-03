import React from 'react';
import { brandMarqueeItems, services, trustStats } from '../data';
import { ImageFeatureSection } from '../components/ImageFeatureSection';
import { FlatRoofFeatureSection } from '../components/FlatRoofFeatureSection';
import { ProcessTimelineSection } from '../components/ProcessTimelineSection';
import { ServiceCardsSection } from '../components/ServiceCardsSection';
import { QuoteFormSection } from '../components/QuoteFormSection';
import { TestimonialsMarqueeSection } from '../components/TestimonialsMarqueeSection';
import { TeamFeatureSection } from '../components/TeamFeatureSection';

export function HomePage({
  onNavigate,
  heroBackgroundUrl,
  bitumenSectionBackgroundUrl,
  processTimelineBackgroundUrl,
  formspreeEndpoint,
  brand,
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffdf5]">
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-scroll opacity-44 saturate-100 md:bg-fixed md:opacity-36"
            style={{
              backgroundImage: `url(${heroBackgroundUrl})`,
              backgroundPosition: 'center 42%',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 88% 92%, rgba(255,255,255,0.016) 0%, rgba(255,255,255,0.01) 16%, rgba(255,248,219,0.004) 30%, transparent 64%)',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.042)_0%,rgba(250,204,21,0.02)_16%,rgba(250,204,21,0.008)_30%,transparent_66%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-100/[0.03] via-white/[0.015] to-transparent" />
          <div className="absolute right-0 bottom-0 h-[12rem] w-[12rem] rounded-full bg-sand-300/[0.008] blur-3xl" />
          <div className="absolute right-12 bottom-12 h-[7rem] w-[7rem] rounded-full bg-yellow-200/[0.006] blur-3xl" />
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

      <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="text-sm uppercase tracking-[0.35em] text-sand-300">Onze topmerken</div>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Wij werken met A-merken</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We kiezen voor betrouwbare materialen en bekende merken, zodat elk dak stevig, duurzaam en netjes afgewerkt blijft.
          </p>
        </div>

        <div className="mt-12 -mx-4 overflow-hidden sm:mx-auto sm:max-w-7xl sm:px-0">
          <div className="marquee-track flex min-w-full items-center gap-4">
            {[...brandMarqueeItems, ...brandMarqueeItems].map((item, index) => (
              <div key={`${item.name}-${index}`} className="flex h-24 min-w-[8.5rem] items-center justify-center px-3">
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="h-20 w-auto max-w-[10rem] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageFeatureSection
        eyebrow="Bitumen & renovatie"
        title="Sterk herstel voor een dak dat weer lang mee kan"
        description="We pakken bitumenwerk strak en duurzaam aan, met aandacht voor veiligheid, afwerking en een resultaat dat er verzorgd uitziet."
        primaryLabel="Bekijk onze diensten"
        secondaryLabel="Plan gratis advies"
        backgroundUrl={bitumenSectionBackgroundUrl}
        backgroundPosition="center 58%"
        fixedBackground
        onPrimaryClick={() => onNavigate('/diensten')}
        onSecondaryClick={() => onNavigate('/contact')}
      />

      <ServiceCardsSection
        eyebrow="Wat we doen"
        title="Onze diensten"
        description="Van nokvorsten tot stormschade: elke dienst krijgt een eigen aanpak, eigen beeld en een duidelijke route naar contact."
        services={services}
        onNavigate={onNavigate}
      />

      <ProcessTimelineSection
        backgroundUrl={processTimelineBackgroundUrl}
        onCtaClick={() => onNavigate('/contact')}
      />

      <TeamFeatureSection onNavigate={onNavigate} />

      <TestimonialsMarqueeSection />

      <FlatRoofFeatureSection brand={brand} onNavigate={onNavigate} />

      <QuoteFormSection formspreeEndpoint={formspreeEndpoint} />
    </section>
  );
}
