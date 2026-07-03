import React from 'react';

const fieldClassName =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sand-300 focus:ring-2 focus:ring-sand-200/60';

export function Input({ label, type = 'text', value, onChange, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
      />
    </label>
  );
}

export function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-white">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Textarea({ label, value, onChange }) {
  return (
    <label className="mt-4 block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <textarea
        rows={6}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
      />
    </label>
  );
}
