import React from 'react';

export function TeamFeatureSection({ onNavigate }) {
  const teamImageUrl = new URL('../assets/team-on-roof.png', import.meta.url).href;

  return (
    <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <img
              src={teamImageUrl}
              alt="Twee vakmensen op een dak"
              className="h-[22rem] w-full object-cover object-center sm:h-[26rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 via-transparent to-white/6" />
          </div>

          <div className="absolute -bottom-6 right-6 rounded-[1.5rem] bg-sand-300 px-5 py-4 text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.2)]">
            <div className="text-3xl font-black leading-none">7+</div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-700">
              jaar ervaring
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Waarom SHS-Dakwerken?</div>
          <h2 className="mt-3 text-3xl font-black leading-[1.02] text-slate-900 sm:text-4xl lg:text-5xl">
            Vakmanschap op het dak, met korte lijnen en duidelijke afspraken
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-2xl font-black text-sand-400">Betrouwbaar</div>
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                Altijd duidelijk
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-sand-400">Snel</div>
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                Kort schakelen
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            We werken met aandacht voor veiligheid, nette afwerking en heldere communicatie. Zo weet je
            vooraf waar je aan toe bent en krijgt je dak de zorg die het verdient.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                ✓
              </span>
              <span>Persoonlijk advies zonder gedoe</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                ✓
              </span>
              <span>Netjes gewerkt, strak opgeleverd</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                ✓
              </span>
              <span>Snel contact via telefoon of WhatsApp</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.16)] transition hover:bg-sand-200"
            >
              Plan gratis advies
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/diensten')}
              className="rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
            >
              Bekijk diensten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
