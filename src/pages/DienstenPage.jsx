import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export function DienstenPage({ onNavigate, services }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Diensten"
        title="Alle belangrijke dakdiensten overzichtelijk bij elkaar"
        description="De dienstenpagina werkt als routekaart naar de losse specialistische pagina's en maakt meteen duidelijk waarvoor SHS-Dakwerken inzetbaar is."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="group rounded-[1.75rem] border border-sand-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sand-300 hover:shadow-md"
          >
            <div className="text-xs uppercase tracking-[0.32em] text-sand-400">Specialisme</div>
            <h3 className="mt-3 text-2xl font-black text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.intro}</p>
            <ul className="mt-5 space-y-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sand-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onNavigate(`/${service.slug}`)}
              className="mt-6 inline-flex rounded-full bg-sand-300 px-5 py-2.5 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
            >
              Lees meer
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
