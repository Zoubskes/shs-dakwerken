import React from 'react';

export function InfoBlock({ title, text }) {
  return (
    <div className="rounded-[1.75rem] border border-sand-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
    </div>
  );
}
