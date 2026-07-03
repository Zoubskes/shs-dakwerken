import React from 'react';
import { InfoBlock } from '../components/InfoBlock';
import { SectionHeading } from '../components/SectionHeading';

const heroImageUrl = new URL('../assets/bitumen/bitumen-hero.png', import.meta.url).href;
const detailImageOneUrl = new URL('../assets/bitumen/bitumen-detail-1.png', import.meta.url).href;
const detailImageTwoUrl = new URL('../assets/bitumen/bitumen-detail-2.png', import.meta.url).href;
const detailImageThreeUrl = new URL('../assets/bitumen/bitumen-detail-3.png', import.meta.url).href;
const detailImageFourUrl = new URL('../assets/bitumen/bitumen-detail-4.png', import.meta.url).href;

const warningPoints = [
  {
    title: 'Scheuren of naden die open komen',
    text: 'Als de laag uitdroogt of de naden loslaten, kan vocht sneller binnendringen en ontstaat er lekkagerisico.',
  },
  {
    title: 'Blazen of bobbels in de toplaag',
    text: 'Opbollingen wijzen vaak op vocht, spanning of ouderdom. Dat is een goed moment om het dak te laten beoordelen.',
  },
  {
    title: 'Terugkerende lekkageplekken',
    text: 'Komt een plek steeds terug, dan is er vaak meer aan de hand dan alleen een snelle noodreparatie.',
  },
  {
    title: 'Verouderde of slijtende dakbedekking',
    text: 'Na jaren blootstelling aan zon, regen en vorst raakt bitumen langzaam op. Tijdig ingrijpen voorkomt grotere schade.',
  },
];

const approachSteps = [
  {
    title: '1. Inspectie',
    text: 'We bekijken de staat van de bitumenlaag, aansluitingen, opstanden en afwatering zodat we de oorzaak goed kunnen inschatten.',
  },
  {
    title: '2. Advies',
    text: 'Je krijgt een helder voorstel voor herstel, renovatie of vernieuwing, altijd afgestemd op de situatie van het platte dak.',
  },
  {
    title: '3. Uitvoering',
    text: 'We werken strak en veilig, met aandacht voor afwerking en waterdicht resultaat zodat het dak weer lang mee kan.',
  },
];

const serviceHighlights = ['Plat dak renovatie', 'Eerlijk advies', 'Ook isolatie mogelijk'];

export function BitumenPage({ onNavigate, brand, service }) {
  return (
    <div className="-mt-28 bg-[#fffdf5] text-slate-900 sm:-mt-32 lg:-mt-36">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-scroll opacity-54 saturate-100 md:bg-fixed md:opacity-50"
            style={{
              backgroundImage: `url(${heroImageUrl})`,
              backgroundPosition: 'center 52%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/76 to-slate-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.06)_0%,rgba(250,204,21,0.02)_20%,transparent_58%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/45 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-28">
          <div className="flex max-w-2xl flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300 backdrop-blur-sm">
              Bitumen
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Bitumenwerk voor een plat dak
              <br />
              dat weer jaren mee kan
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Een plat dak vraagt om een strakke en waterdichte afwerking. We herstellen, vernieuwen of
              verbeteren bitumen daken met een aanpak die past bij de staat van jouw dak en jouw situatie.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                Vraag bitumenadvies aan
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
                  <img src={detailImageOneUrl} alt="Bitumen branden op een plat dak" className="h-48 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img src={detailImageTwoUrl} alt="Rol bitumen op dakbedekking" className="h-48 w-full object-cover" />
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-[1.5rem]">
                <img src={detailImageFourUrl} alt="Plat dak met bitumen dakbedekking" className="h-52 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <img src={detailImageThreeUrl} alt="Bitumen aanbrengen op een plat dak" className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Waarom bitumenwerk belangrijk is</div>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Een goed bitumen dak houdt water buiten en geeft rust
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Bitumen is een sterke en beproefde oplossing voor platte daken, maar ook een dakbedekking die
              door ouderdom, zon en temperatuurschommelingen kan slijten. Door op tijd te inspecteren en slim
              te herstellen voorkom je vaak grotere schade en extra kosten.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoBlock
                title="Herstel"
                text="Gerichte reparaties voor scheuren, naden of zwakke plekken wanneer volledige vervanging nog niet nodig is."
              />
              <InfoBlock
                title="Vernieuwing"
                text="Nieuwe bitumen dakbedekking wanneer de bestaande laag te ver is verouderd of te veel schade heeft."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Wanneer laten controleren?"
            title="Deze signalen wijzen op bitumen dat aandacht nodig heeft"
            description="Zie je een of meer van deze punten terug? Dan is een inspectie meestal verstandig, zeker bij oudere platte daken of na hevige regen."
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
            <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">Zo pakken we bitumenwerk aan</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
              We houden de route helder. Eerst beoordelen we het dak, daarna ontvang je een duidelijk voorstel
              en vervolgens voeren we het werk netjes en veilig uit.
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
                Twijfel je over je platte dak? We kijken graag met je mee.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                We denken mee over herstel, vernieuwing of isolatie en geven altijd een eerlijk beeld van wat
                nodig is. Zo weet je snel waar je aan toe bent.
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
