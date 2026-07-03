import React from 'react';

const defaultSteps = [
  {
    number: '1',
    title: 'Adviesgesprek',
    text: 'We luisteren naar je situatie, bekijken de beelden en geven direct een eerste inschatting.',
  },
  {
    number: '2',
    title: 'Offerte op maat',
    text: 'Je ontvangt een heldere offerte met duidelijke uitleg en geen onnodige verrassingen.',
  },
  {
    number: '3',
    title: 'Uitvoering',
    text: 'Onze vakmensen voeren het werk strak uit en zorgen voor een nette, veilige afwerking.',
  },
  {
    number: '4',
    title: 'Zorgeloos genieten',
    text: 'Je dak is weer in orde en je weet precies waar je aan toe bent, van start tot oplevering.',
  },
];

export function ProcessTimelineSection({
  eyebrow = 'Zo eenvoudig werkt het',
  title = 'Hoe werkt het?',
  description = 'Van eerste contact tot zorgeloos resultaat - we regelen alles voor je, stap voor stap.',
  steps = defaultSteps,
  ctaLabel = 'Start met gratis advies',
  onCtaClick,
  backgroundUrl,
  backgroundPosition = 'center 40%',
}) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div
          aria-hidden="true"
          className="h-full w-full bg-cover bg-center bg-fixed opacity-90"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundPosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/72 to-slate-900/48" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_26%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_82%,rgba(250,204,21,0.12),transparent_34%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300 backdrop-blur-sm">
              {eyebrow}
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[0.96] sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
              {description}
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onCtaClick}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.16)] transition hover:bg-sand-200"
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/14 bg-white/10 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-md sm:p-6 lg:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-sm uppercase tracking-[0.28em] text-sand-300">Proces</div>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="flex items-start gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4"
                >
                  <div className="flex h-12 min-w-16 shrink-0 items-center justify-center rounded-full bg-sand-300 px-5 text-sm font-black text-slate-900 shadow-[0_10px_22px_rgba(250,204,21,0.14)]">
                    {step.number}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/76">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
