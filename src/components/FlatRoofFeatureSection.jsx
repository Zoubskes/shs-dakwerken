import React from 'react';

export function FlatRoofFeatureSection({ brand, onNavigate }) {
  const flatRoofImageUrl = new URL('../assets/flat-roof-feature.png', import.meta.url).href;

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div
          aria-hidden="true"
          className="h-full w-full bg-cover bg-center bg-fixed opacity-95"
          style={{
            backgroundImage: `url(${flatRoofImageUrl})`,
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-[#0f3f5f]/78 to-[#0a5b87]/42" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_88%,rgba(250,204,21,0.10),transparent_34%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mt-5 text-4xl font-black leading-[0.96] sm:text-5xl lg:text-6xl">
            Klaar voor een dak dat jaren meegaat?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            Vraag vandaag nog een gratis adviesgesprek aan. We bekijken de situatie zorgvuldig en geven
            een eerlijk advies over de beste oplossing voor jouw plat dak.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={brand.phoneHref}
              className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.18)] transition hover:bg-sand-200"
            >
              Bel direct
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="rounded-full border border-white/35 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
            >
              Gratis advies aanvragen
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/78">
            {['Gratis en vrijblijvend', 'Geen verborgen kosten', 'Snelle reactie'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
