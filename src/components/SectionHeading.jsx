import React from 'react';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="text-sm uppercase tracking-[0.35em] text-sand-400">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-8 text-slate-700">{description}</p>}
    </div>
  );
}
