import React from 'react';

export function Header({ logoUrl, scrolledLogoUrl, menuOpen, onMenuToggle, onNavigate, pathname, isHome, scrolled, navigation, brand }) {
  const elevated = !isHome || scrolled;
  const activeLogoUrl = elevated ? scrolledLogoUrl : logoUrl;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-20 backdrop-blur-xl sm:h-24 ${
          elevated ? 'border-b border-sand-200/70 bg-white/90 shadow-sm' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto grid h-full max-w-7xl grid-cols-[auto,1fr,auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex h-16 w-40 items-center bg-transparent p-0 text-left shadow-none sm:h-20 sm:w-48"
          >
            <img src={activeLogoUrl} alt="SHS-Dakwerken" className="h-full w-full object-contain" />
          </button>

          <nav
            className={`hidden items-center justify-self-center gap-1 xl:flex ${
              elevated
                ? 'rounded-full border border-sand-200/80 bg-white p-1'
                : 'rounded-full bg-white/10 px-2 py-1 backdrop-blur-sm'
            }`}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                active={pathname === item.href}
                href={item.href}
                onNavigate={onNavigate}
                elevated={elevated}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.phoneHref}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                elevated
                  ? 'border border-sand-200 bg-white text-slate-800 hover:bg-sand-50'
                  : 'border border-white/35 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {brand.phoneDisplay}
            </a>
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sand-300 px-4 py-2 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={onMenuToggle}
            className={`inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full xl:hidden ${
              elevated ? 'border border-sand-200 bg-white/90 text-slate-900' : 'border border-white/35 bg-white/10 text-white'
            }`}
            aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Sluit menu"
          onClick={onMenuToggle}
          className={`absolute inset-0 bg-slate-950/35 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute inset-y-0 right-0 flex h-full w-full max-w-none flex-col bg-gradient-to-b from-[#f4d76d] via-[#efcb56] to-[#e3b92f] text-slate-900 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 pb-8 pt-5">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex h-10 w-32 items-center justify-start bg-transparent p-0 shadow-none"
            >
              <img
                src={logoUrl}
                alt="SHS-Dakwerken"
                className="h-full w-full object-contain [filter:brightness(0)_invert(1)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
              />
            </button>

            <button
              type="button"
              onClick={onMenuToggle}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/15 bg-white/45 text-2xl font-light text-slate-900 backdrop-blur-sm"
              aria-label="Sluit menu"
            >
              ×
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pb-8">
            <div className="mx-auto flex max-w-md flex-col gap-4 pt-2">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => onNavigate(item.href)}
                  className={`rounded-2xl px-4 py-4 text-center text-xl font-bold transition ${
                    pathname === item.href
                      ? 'bg-white/35 text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
                      : 'text-slate-900 hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="border-t border-slate-900/10 px-5 py-6">
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href={brand.phoneHref}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-900/15 bg-white/55 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-white/75"
              >
                Telefoon
              </a>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#1fb954]"
              >
                WhatsApp
              </a>
              <a
                href={brand.freeQuoteHref}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(brand.freeQuoteHref);
                }}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
              >
                Gratis Advies
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function NavLink({ active, elevated, href, onNavigate, children }) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(href);
      }}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? 'bg-sand-300 text-slate-900 shadow-glow'
          : elevated
            ? 'text-slate-700 hover:bg-sand-50 hover:text-slate-900'
            : 'text-white/85 hover:bg-white/12 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
}
