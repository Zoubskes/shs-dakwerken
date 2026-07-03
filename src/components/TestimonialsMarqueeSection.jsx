import React from 'react';

const defaultTestimonials = [
  {
    name: 'Marit van de Wiel',
    location: 'Den Haag',
    initials: 'M',
    quote:
      'Na mijn contactaanvraag voor dakwerk werd er meteen snel geschakeld. Duidelijk advies en een nette uitvoering.',
  },
  {
    name: 'Max Kuepers',
    location: 'Gouda',
    initials: 'M',
    quote:
      'Een oud dak met verouderde bitumen werd strak aangepakt. Fijn dat alles helder werd uitgelegd en netjes is afgerond.',
  },
  {
    name: 'Ernst Hellemans',
    location: 'Ridderkerk',
    initials: 'E',
    quote:
      'Door de drukte hebben andere bedrijven afgezegd, maar SHS-Dakwerken pakte het professioneel en snel op.',
  },
  {
    name: 'Helmi van Hees',
    location: 'Schiedam',
    initials: 'H',
    quote:
      'Vakkundig werk en aardige mensen die weten wat ze doen. De communicatie was vanaf het begin heel prettig.',
  },
  {
    name: 'Hector Stokmans',
    location: 'Pijnacker',
    initials: 'H',
    quote:
      'Goede uitleg, duidelijke afspraken en geen gedoe. Precies wat je wilt als je dakwerk laat uitvoeren.',
  },
  {
    name: 'Piet Hendriks',
    location: 'Delft',
    initials: 'P',
    quote:
      'Tijdens het adviesgesprek was meteen duidelijk wat er moest gebeuren. Heel prettig en professioneel geregeld.',
  },
];

export function TestimonialsMarqueeSection({ testimonials = defaultTestimonials }) {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-x-hidden bg-[#1F2933] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl text-center text-white">
        <div className="text-sm uppercase tracking-[0.35em] text-sand-200">Klantervaringen</div>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">Wat onze klanten zeggen</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Eerlijke verhalen van mensen die hun woning met ons hebben verbeterd.
        </p>
      </div>

      <div className="mt-10 -mx-4 overflow-hidden sm:mx-auto sm:max-w-[140rem]">
        <div className="marquee-track flex min-w-full items-stretch gap-4" style={{ animationDuration: '34s' }}>
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="flex min-h-[14rem] min-w-[18rem] max-w-[18rem] flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-[0_16px_40px_rgba(4,35,49,0.18)] sm:min-w-[20rem] sm:max-w-[20rem]"
            >
              <div className="text-sand-300 text-3xl leading-none">“</div>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand-300 text-sm font-black text-slate-900">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
