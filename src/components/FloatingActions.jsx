import React from 'react';

export function FloatingActions({ brand }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={brand.phoneHref}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-sand-200 bg-white text-slate-900 shadow-glow transition hover:scale-105"
        aria-label="Bel SHS-Dakwerken"
      >
        <PhoneIcon />
      </a>
      <a
        href={brand.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-sand-300 text-slate-900 shadow-glow transition hover:scale-105"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6.6 10.8c1.1 2.2 2.9 4 5.1 5.1l1.7-1.7c.2-.2.5-.3.8-.2 1 .3 2.1.5 3.2.5.5 0 .9.4.9.9V19c0 .5-.4 1-1 1C9.2 20 4 14.8 4 8c0-.6.4-1 1-1h3.6c.5 0 .9.4.9.9 0 1.1.2 2.2.5 3.2.1.3 0 .6-.2.8L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 16.4c-1.1 0-2.1-.2-3-.6l-.2-.1-2.7.7.7-2.6-.1-.2A6.4 6.4 0 1 1 12 19.4Zm3.7-4.8c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.2.1-.4 0-.1 0-.6-.2-1.1-.7-.4-.4-.7-.8-.8-1-.1-.1 0-.3.1-.4l.3-.4c.1-.1.1-.3.1-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.5.3-.2.2-.6.7-.6 1.7 0 1 .7 2 1 2.4.1.2 1.4 2.1 3.4 2.9.5.2.8.2 1.1.1.3 0 1-.4 1.1-.8.1-.4.1-.7 0-.8-.1-.1-.2-.1-.4-.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
