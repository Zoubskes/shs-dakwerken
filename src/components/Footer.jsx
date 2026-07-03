import React from 'react';

const serviceLinks = [
  { label: 'Nokvorsten', href: '/nokvorsten' },
  { label: 'Schoorsteen', href: '/schoorsteen' },
  { label: 'Bitumen', href: '/bitumen' },
  { label: 'Dakgoten', href: '/dakgoten' },
  { label: 'Daklekkage', href: '/daklekkage' },
  { label: 'Stormschade', href: '/stormschade' },
];

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gratis offerte', href: '/contact' },
];

export function Footer({ logoUrl, brand, footerNetnumbers }) {
  return (
    <footer className="relative z-10 bg-[#1F2933] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.8fr_1fr]">
          <div className="space-y-5">
            <img src={logoUrl} alt="SHS-Dakwerken" className="h-14 w-auto object-contain" />
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Dakwerk met rust, snelheid en een nette afwerking. We helpen je met reparatie, renovatie en
              duidelijke communicatie van begin tot eind.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'Facebook', href: '#' },
                { label: 'E-mail', href: `mailto:${brand.email}` },
                { label: 'WhatsApp', href: brand.whatsappHref },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-slate-200 transition hover:border-sand-300 hover:bg-sand-300 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Onze diensten">
            <FooterLinks links={serviceLinks} />
          </FooterColumn>

          <FooterColumn title="Bedrijf">
            <FooterLinks links={companyLinks} />
          </FooterColumn>

          <FooterColumn title="Contact">
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>
                <span className="block text-slate-400">Telefoon</span>
                <a href={brand.phoneHref} className="font-medium text-slate-100 transition hover:text-sand-300">
                  {brand.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-slate-400">WhatsApp</span>
                <a href={brand.whatsappHref} className="font-medium text-slate-100 transition hover:text-sand-300">
                  {brand.whatsappDisplay}
                </a>
              </p>
              <p>
                <span className="block text-slate-400">E-mail</span>
                <a href={`mailto:${brand.email}`} className="font-medium text-slate-100 transition hover:text-sand-300">
                  {brand.email}
                </a>
              </p>
              <p>
                <span className="block text-slate-400">KVK</span>
                <span className="font-medium text-slate-100">{brand.kvk}</span>
              </p>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
            >
              Gratis advies aanvragen →
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-sand-300">Netnummers</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {footerNetnumbers.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>{brand.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="space-y-5">
      <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">{title}</div>
      {children}
    </div>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-3 text-sm text-slate-300">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="transition hover:text-sand-300">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
