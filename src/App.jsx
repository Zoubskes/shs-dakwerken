import React, { useEffect, useMemo, useState } from 'react';
import {
  brand,
  footerNetnumbers,
  navigation,
  pageByPath,
  routeTitles,
  services,
} from './data';
import { Decorations } from './components/Decorations';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Header } from './components/Header';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { DienstenPage } from './pages/DienstenPage';
import { ContactPage } from './pages/ContactPage';
import { NokvorstenPage } from './pages/NokvorstenPage';
import { SchoorsteenPage } from './pages/SchoorsteenPage';

const logoUrl = new URL('../cropped-SHS-logo-kopie.pdf.png', import.meta.url).href;
const scrolledLogoUrl = new URL('../cropped-SHS-logo-kopie.pdf2.png', import.meta.url).href;
const heroBackgroundUrl = new URL('./assets/hero-roof.png', import.meta.url).href;
const bitumenSectionBackgroundUrl = new URL('./assets/bitumen-torch.png', import.meta.url).href;
const processTimelineBackgroundUrl = new URL('./assets/process-roof-inspection.png', import.meta.url).href;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '';

function App() {
  const [pathname, setPathname] = useState(() => sanitizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);

  useEffect(() => {
    const onPopState = () => {
      setPathname(sanitizePath(window.location.pathname));
      setMenuOpen(false);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const pageKey = pageByPath[pathname] ?? 'home';
    document.title = routeTitles[pageKey];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        pageKey === 'home'
          ? 'SHS-Dakwerken bouwt een moderne dakwerken website met contact, WhatsApp en telefoon.'
          : `${routeTitles[pageKey]} - hoogwaardige dakoplossingen van SHS-Dakwerken.`,
      );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentPage = useMemo(() => pageByPath[pathname] ?? 'home', [pathname]);

  const navigate = (to) => {
    const next = sanitizePath(to);
    if (next === pathname) {
      setMenuOpen(false);
      return;
    }
    window.history.pushState({}, '', next);
    setPathname(next);
    setMenuOpen(false);
  };

  const handleContactSuccess = () => {
    setToast({
      title: 'Bericht verzonden',
      text: 'Je aanvraag is ontvangen. SHS-Dakwerken neemt zo snel mogelijk contact op.',
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-slate-900 selection:bg-sand-300 selection:text-slate-900">
      <Decorations />
      <Header
        logoUrl={logoUrl}
        scrolledLogoUrl={scrolledLogoUrl}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onNavigate={navigate}
        pathname={pathname}
        isHome={currentPage === 'home'}
        scrolled={scrolled}
        navigation={navigation}
        brand={brand}
      />
      <main className={`relative z-10 ${currentPage === 'home' ? 'pt-0' : 'pt-28 sm:pt-32 lg:pt-36'}`}>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            heroBackgroundUrl={heroBackgroundUrl}
            bitumenSectionBackgroundUrl={bitumenSectionBackgroundUrl}
            processTimelineBackgroundUrl={processTimelineBackgroundUrl}
            formspreeEndpoint={FORMSPREE_ENDPOINT}
            brand={brand}
          />
        )}
        {currentPage === 'diensten' && <DienstenPage onNavigate={navigate} services={services} brand={brand} />}
        {currentPage === 'nokvorsten' && (
          <NokvorstenPage onNavigate={navigate} brand={brand} service={services[0]} />
        )}
        {currentPage === 'schoorsteen' && (
          <SchoorsteenPage onNavigate={navigate} brand={brand} service={services[1]} />
        )}
        {currentPage === 'bitumen' && <ServicePage data={services[2]} onNavigate={navigate} brand={brand} />}
        {currentPage === 'dakgoten' && <ServicePage data={services[3]} onNavigate={navigate} brand={brand} />}
        {currentPage === 'daklekkage' && <ServicePage data={services[4]} onNavigate={navigate} brand={brand} />}
        {currentPage === 'stormschade' && <ServicePage data={services[5]} onNavigate={navigate} brand={brand} />}
        {currentPage === 'contact' && (
          <ContactPage
            onSuccess={handleContactSuccess}
            brand={brand}
            formspreeEndpoint={FORMSPREE_ENDPOINT}
          />
        )}
      </main>
      <Footer logoUrl={logoUrl} brand={brand} footerNetnumbers={footerNetnumbers} />
      <FloatingActions brand={brand} />
      {toast && <Toast toast={toast} />}
    </div>
  );
}

function sanitizePath(path) {
  const normalized = path && path !== '' ? path : '/';
  if (normalized === '/') return '/';
  return normalized.replace(/\/+$/, '').toLowerCase();
}

export default App;
