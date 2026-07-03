import React from 'react';

export function ImageFeatureSection({
  eyebrow,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  backgroundUrl,
  backgroundPosition = 'center 45%',
  fixedBackground = false,
}) {
  const backgroundClasses = fixedBackground ? 'bg-scroll md:bg-fixed' : '';

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div
          aria-hidden="true"
          className={`h-full w-full bg-cover bg-center opacity-88 ${backgroundClasses}`}
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundPosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/72 to-slate-950/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,208,90,0.08),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[18rem] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-sand-300 backdrop-blur-sm">
            {eyebrow}
          </div>

          <h2 className="mt-4 max-w-xl text-2xl font-black leading-[1.02] text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/84 sm:text-base sm:leading-7">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={onPrimaryClick}
              className="rounded-full bg-sand-300 px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(255,208,90,0.18)] transition hover:bg-sand-200"
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              onClick={onSecondaryClick}
              className="rounded-full border border-white/40 bg-white/6 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/65 hover:bg-white/12"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
