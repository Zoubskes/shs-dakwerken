import React from 'react';

export function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-sand-300/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-white/75 blur-3xl" />
      <div className="absolute bottom-[-12%] left-[20%] h-72 w-72 rounded-full bg-sand-100/80 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand-300/35 to-transparent" />
    </div>
  );
}
