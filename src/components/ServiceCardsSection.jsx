import React from 'react';

export function ServiceCardsSection({
  eyebrow = 'Wat we doen',
  title = 'Onze diensten',
  description,
  services,
  onNavigate,
  ctaLabel = 'Bekijk alle diensten',
}) {
  return (
    <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-[0.35em] text-sand-300">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
          {description && <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">{description}</p>}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => onNavigate(`/${service.slug}`)}
              className="group relative isolate overflow-hidden rounded-[1.6rem] bg-slate-900 text-left shadow-[0_12px_30px_rgba(15,23,42,0.12)] transform-gpu transition duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
            >
              <div
                className="absolute inset-0 rounded-[inherit] bg-cover bg-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.cardImageUrl})`,
                  backgroundPosition: 'center center',
                }}
              />
              <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-950/86 via-slate-950/38 to-slate-950/10" />
              <div className="relative flex min-h-[16rem] items-end p-5 sm:min-h-[17.5rem] sm:p-6">
                <div className="max-w-[80%]">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-sand-200 backdrop-blur-sm">
                    {service.slug}
                  </div>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate('/diensten')}
            className="rounded-full bg-sand-300 px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(255,208,90,0.18)] transition hover:bg-sand-200"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
