import React from 'react';
import { processSteps } from '../data';
import { InfoBlock } from '../components/InfoBlock';
import { ServiceCardsSection } from '../components/ServiceCardsSection';
import { SectionHeading } from '../components/SectionHeading';

const heroBackgroundUrl = new URL('../assets/hero-roof.png', import.meta.url).href;

const servicePromises = [
  {
    title: 'Heldere diagnose',
    text: 'We kijken eerst goed naar de oorzaak, zodat je niet betaalt voor een oplossing die het probleem niet echt oplost.',
  },
  {
    title: 'Strakke uitvoering',
    text: 'We werken netjes, veilig en met oog voor afwerking, zodat het resultaat technisch en visueel klopt.',
  },
  {
    title: 'Snelle communicatie',
    text: 'Je weet snel waar je aan toe bent. Bel, WhatsApp of vraag direct een offerte aan.',
  },
  {
    title: 'Door heel Nederland',
    text: 'We werken regionaal en landelijk en kunnen dus helpen bij woningen, renovaties en acute schades.',
  },
];

export function DienstenPage({ onNavigate, services, brand }) {
  return (
    <div className="bg-[#fffdf5] text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-scroll opacity-52 saturate-100 md:bg-fixed md:opacity-46"
            style={{
              backgroundImage: `url(${heroBackgroundUrl})`,
              backgroundPosition: 'center 40%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/70 to-slate-900/34" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.05)_0%,rgba(250,204,21,0.02)_18%,transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/45 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-20 lg:pt-36">
          <div className="flex max-w-2xl flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300 backdrop-blur-sm">
              Diensten
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Complete dakdiensten,
              <br />
              overzichtelijk op één plek
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Van nokvorsten tot stormschade: SHS-Dakwerken helpt met inspectie, herstel, renovatie en een
              nette afwerking. Op deze pagina vind je direct de juiste richting voor jouw situatie.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                Vraag gratis advies aan
              </button>
              <a
                href={brand.phoneHref}
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                Bel: {brand.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
              {['Inspectie eerst', 'Heldere offerte', 'Netjes en veilig'].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/14 bg-white/10 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.25)] backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.28em] text-sand-300">Populaire diensten</div>
                <div className="h-px flex-1 bg-white/12" />
              </div>

              <div className="mt-5 space-y-3">
                {services.slice(0, 4).map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => onNavigate(`/${service.slug}`)}
                    className="group flex w-full items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/7 px-4 py-4 text-left transition hover:border-sand-300/40 hover:bg-white/12"
                  >
                    <div className="min-w-0">
                      <div className="text-base font-black text-white">{service.title}</div>
                      <div className="mt-1 line-clamp-2 text-sm leading-6 text-white/72">
                        {service.highlights[0]}
                      </div>
                    </div>
                    <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/10 text-sand-300 transition group-hover:bg-sand-300 group-hover:text-slate-900">
                      →
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-sm leading-7 text-white/76">
                Geen idee welke dienst je nodig hebt? We kijken graag met je mee en geven eerlijk advies over de
                beste route, van klein herstel tot complete renovatie.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Wat je mag verwachten"
            title="Waarom deze dienstenpagina logisch werkt"
            description="We houden het overzichtelijk: eerst duidelijkheid over de aanpak, daarna de diensten zelf en vervolgens de route naar contact."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {servicePromises.map((item) => (
              <InfoBlock key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <ServiceCardsSection
        eyebrow="Onze diensten"
        title="Waar we dagelijks mee helpen"
        description="Elke dienst heeft zijn eigen aandachtspunten, maar de aanpak blijft hetzelfde: inspecteren, adviseren en netjes uitvoeren."
        services={services}
        onNavigate={onNavigate}
        ctaLabel="Plan gratis advies"
        ctaHref="/contact"
      />

      <section className="bg-[#1F2933] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-white">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-sand-300">Zo werken we</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">Van eerste contact tot nette oplevering</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
              Onze werkwijze blijft bewust eenvoudig. Zo weet je precies wat je kunt verwachten en wanneer.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-[0_16px_40px_rgba(4,35,49,0.14)] backdrop-blur-sm"
              >
                <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-sand-300">
                  {step.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-sand-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Volgende stap</div>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Kom je er niet helemaal uit? We helpen je direct verder.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Bel, stuur een WhatsApp-bericht of vraag direct advies aan. We denken mee over de juiste
                dienst, de urgentie en de beste vervolgstap voor jouw dak.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={brand.phoneHref}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                {brand.phoneDisplay}
              </a>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
              >
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-full border border-sand-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Naar contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
