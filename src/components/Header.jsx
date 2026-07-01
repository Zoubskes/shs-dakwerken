import React from 'react';

export function Header({ logoUrl, scrolledLogoUrl, menuOpen, onMenuToggle, onNavigate, pathname, isHome, scrolled, navigation, brand }) {
  const elevated = !isHome || scrolled;
  const activeLogoUrl = elevated ? scrolledLogoUrl : logoUrl;
  return (
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
          aria-label="Open menu"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-sand-200/70 bg-white/95 px-4 py-4 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavigate(item.href)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                  pathname === item.href
                    ? 'border-sand-300 bg-sand-100 text-slate-900'
                    : 'border-sand-100 bg-white text-slate-700 hover:bg-sand-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-sand-200 bg-sand-100 px-4 py-3 text-left text-sm font-medium text-slate-900"
            >
              WhatsApp direct
            </a>
          </div>
        </div>
      )}
    </header>
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
