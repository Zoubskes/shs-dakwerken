import React from 'react';

export function Footer({ logoUrl, brand, footerNetnumbers }) {
  return (
    <footer className="relative z-10 border-t border-sand-200/70 bg-white/85">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_0.9fr_1.3fr] lg:px-8">
        <div className="space-y-4">
          <img src={logoUrl} alt="SHS-Dakwerken" className="h-24 w-auto object-contain" />
          <p className="max-w-sm text-sm leading-7 text-slate-600">
            Moderne dakwerken website met een sterke focus op contact, vertrouwen en regionale zichtbaarheid.
          </p>
          <div className="text-sm text-slate-700">
            <p>{brand.copyright}</p>
            <p>KVK: {brand.kvk}</p>
            <p>IBAN: {brand.iban}</p>
          </div>
        </div>

        <div className="space-y-3">
          <FooterTitle>Contact</FooterTitle>
          <p className="text-sm text-slate-700">Telefoon: {brand.phoneDisplay}</p>
          <p className="text-sm text-slate-700">WhatsApp: {brand.whatsappDisplay}</p>
          <p className="text-sm text-slate-700">E-mail: {brand.email}</p>
          <div className="pt-2 text-sm text-slate-700">
            {brand.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <FooterTitle>Netnummers</FooterTitle>
          <div className="grid gap-2 sm:grid-cols-2">
            {footerNetnumbers.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-sand-100 bg-sand-50 px-3 py-2 text-xs leading-5 text-slate-700"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return <div className="text-sm uppercase tracking-[0.35em] text-sand-300">{children}</div>;
}
