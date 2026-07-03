import React from 'react';
import { InfoBlock } from '../components/InfoBlock';
import { SectionHeading } from '../components/SectionHeading';

const heroImageUrl = new URL('../assets/schoorsteen/schoorsteen-hero.png', import.meta.url).href;
const detailImageOneUrl = new URL('../assets/schoorsteen/schoorsteen-detail-1.png', import.meta.url).href;
const detailImageTwoUrl = new URL('../assets/schoorsteen/schoorsteen-detail-2.png', import.meta.url).href;
const detailImageThreeUrl = new URL('../assets/schoorsteen/schoorsteen-detail-3.png', import.meta.url).href;

const warningPoints = [
  {
    title: 'Poreus metselwerk',
    text: 'Als de stenen of voegen verweren, kan vocht makkelijker binnendringen en raakt de schoorsteen sneller beschadigd.',
  },
  {
    title: 'Losse of gescheurde voegen',
    text: 'Een open voeg of scheur geeft wind en regen vrij spel. Tijdig herstellen voorkomt grotere schade.',
  },
  {
    title: 'Roet en verstopping',
    text: 'Bij een schoorsteen die gebruikt wordt, is vegen belangrijk om verstopping en brandgevaar te beperken.',
  },
  {
    title: 'Aansluitingen rond het dak',
    text: 'De waterdichte overgang tussen schoorsteen en dak is vaak de plek waar problemen ontstaan.',
  },
];

const approachSteps = [
  {
    title: '1. Inspectie',
    text: 'We bekijken de schoorsteen, de voegen, de bovenplaat en de dak-aansluiting om de staat goed in te schatten.',
  },
  {
    title: '2. Advies',
    text: 'Je krijgt een eerlijk voorstel: renoveren, herstellen, vegen of combineren, afhankelijk van de situatie.',
  },
  {
    title: '3. Uitvoering',
    text: 'We werken strak en veilig, zodat de schoorsteen weer netjes, stevig en functioneel is afgewerkt.',
  },
];

const serviceHighlights = [
  'Renovatie en vegen',
  'Veilige rookafvoer',
  'Aandacht voor lekkage en voegen',
];

export function SchoorsteenPage({ onNavigate, brand, service }) {
  return (
    <div className="-mt-28 bg-[#fffdf5] text-slate-900 sm:-mt-32 lg:-mt-36">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-scroll opacity-52 saturate-100 md:bg-fixed md:opacity-48"
            style={{
              backgroundImage: `url(${heroImageUrl})`,
              backgroundPosition: 'center 42%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/72 to-slate-900/36" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.05)_0%,rgba(250,204,21,0.02)_18%,transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/45 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-28">
          <div className="flex max-w-2xl flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300 backdrop-blur-sm">
              Schoorsteen
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Schoorsteen renovatie
              <br />
              en vegen in één duidelijke aanpak
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Een schoorsteen krijgt veel te verduren door weer, wind en gebruik. We renoveren, herstellen en
              vegen waar nodig, zodat de schoorsteen weer veilig, netjes en waterdicht is.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                Vraag schoorsteenadvies aan
              </button>
              <a
                href={brand.phoneHref}
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                Bel: {brand.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
              {(service?.highlights ?? serviceHighlights).map((item) => (
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img src={detailImageOneUrl} alt="Schoorsteen op een dak" className="h-48 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img src={detailImageThreeUrl} alt="Bakstenen schoorsteen op dak" className="h-48 w-full object-cover" />
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-[1.5rem]">
                <img src={detailImageTwoUrl} alt="Schoorsteenrenovatie op een rieten dak" className="h-52 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <img src={detailImageTwoUrl} alt="Schoorsteen en dak aansluiting" className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Waarom schoorsteenwerk belangrijk is</div>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Een goed onderhouden schoorsteen voorkomt schade en gedoe
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Een schoorsteen moet niet alleen netjes ogen, maar ook technisch in orde zijn. Slechte voegen,
              poreus metselwerk of een verstopte schoorsteen kunnen zorgen voor lekkage, slijtage of onveilige
              situaties. Met een tijdige controle voorkom je vaak grotere ingrepen.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoBlock
                title="Renovatie"
                text="Herstel van voegen, metselwerk en de aansluiting op het dak zodat de schoorsteen weer stevig en netjes is."
              />
              <InfoBlock
                title="Vegen"
                text="Periodiek vegen helpt brandgevaar en verstoppingen te beperken en houdt het kanaal goed bruikbaar."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Wanneer laten controleren?"
            title="Deze signalen wijzen op een schoorsteen die aandacht nodig heeft"
            description="Zie je een van deze punten terug? Dan is een inspectie meestal verstandig, zeker bij oudere woningen of na storm."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {warningPoints.map((item) => (
              <InfoBlock key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F2933] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-white">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-sand-300">Onze aanpak</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">Zo pakken we schoorsteenwerk aan</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
              We houden de aanpak helder. Eerst beoordelen we de schoorsteen, daarna ontvang je een duidelijk
              plan en vervolgens voeren we het werk netjes uit.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {approachSteps.map((step) => (
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
                Vraag gerust advies als je twijfelt over de staat van de schoorsteen.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                We denken mee over renovatie, onderhoud of vegen en geven je altijd een eerlijk beeld van wat er
                nodig is. Zo kun je snel en zeker verder.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                Plan inspectie
              </button>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
              >
                WhatsApp
              </a>
              <a
                href={brand.phoneHref}
                className="rounded-full border border-sand-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {brand.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
