import React from 'react';
import { InfoBlock } from '../components/InfoBlock';
import { SectionHeading } from '../components/SectionHeading';

export function ServicePage({ data, onNavigate, brand }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm font-medium text-sand-400">
            Specialistische service
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">{data.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">{data.intro}</p>
          <div className="flex flex-wrap gap-3">
            {data.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sand-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('/contact')}
              className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
            >
              {data.cta}
            </button>
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
            >
              WhatsApp direct
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sand-200 bg-white p-6 shadow-sm">
          <div className="text-sm uppercase tracking-[0.32em] text-sand-400">Waarom dit telt</div>
          <ul className="mt-4 space-y-4">
            {data.reasons.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-sand-100 bg-sand-50 p-4 text-sm leading-7 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {data.slug === 'schoorsteen' ? (
        <section className="mt-14 grid gap-4 lg:grid-cols-2">
          <InfoBlock
            title="Schoorsteen renovatie"
            text="We herstellen voegen, metselwerk en aansluitingen zodat de schoorsteen weer veilig en vochtbestendig is."
          />
          <InfoBlock
            title="Schoorsteen vegen"
            text="Periodiek vegen helpt brandgevaar en verstoppingen beperken. We leggen duidelijk uit wanneer onderhoud nodig is."
          />
        </section>
      ) : (
        <section className="mt-14">
          <SectionHeading
            eyebrow="Aanpak"
            title="Zo pakken we dit type werk aan"
            description="Elke dienst start met inspectie, daarna volgt een helder advies en een nette uitvoering."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { title: '1. Aanvraag', text: 'Bel, WhatsApp of vul het formulier in. We reageren snel en denken direct mee.' },
              { title: '2. Inspectie', text: 'We bekijken de situatie zorgvuldig en leggen helder uit wat er nodig is.' },
              { title: '3. Uitvoering', text: 'We plannen de werkzaamheden strak in en leveren alles netjes en duurzaam op.' },
            ].map((step) => (
              <div key={step.title} className="rounded-[1.75rem] border border-sand-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.32em] text-sand-400">
                  {step.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 rounded-[2rem] border border-sand-200 bg-gradient-to-r from-white to-sand-50 p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Volgende stap</div>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Kies contact via formulier, telefoon of WhatsApp.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('/contact')}
              className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
            >
              Naar contact
            </button>
            <a
              href={brand.phoneHref}
              className="rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
            >
              Bellen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
