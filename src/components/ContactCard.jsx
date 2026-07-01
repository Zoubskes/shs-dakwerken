import React from 'react';

export function ContactCard({ label, value, href, external }) {
  const classes =
    'rounded-[1.5rem] border border-sand-200 bg-white p-5 transition hover:border-sand-300 hover:shadow-sm';

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={classes}>
        <div className="text-xs uppercase tracking-[0.32em] text-sand-400">{label}</div>
        <div className="mt-3 text-sm font-medium text-slate-800">{value}</div>
      </a>
    );
  }

  return (
    <div className={classes}>
      <div className="text-xs uppercase tracking-[0.32em] text-sand-400">{label}</div>
      <div className="mt-3 text-sm font-medium text-slate-800">{value}</div>
    </div>
  );
}
