import React from 'react';

export function Toast({ toast }) {
  return (
    <div className="fixed left-1/2 top-5 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl border border-sand-200 bg-white/95 px-5 py-4 text-sm text-slate-800 shadow-glow backdrop-blur">
      <div className="font-semibold">{toast.title}</div>
      <div className="mt-1 text-slate-600">{toast.text}</div>
    </div>
  );
}
