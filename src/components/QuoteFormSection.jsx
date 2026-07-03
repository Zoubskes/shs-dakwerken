import React, { useState } from 'react';
import { Input, Select, Textarea } from './FormFields';

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  housingType: 'Rijtjeswoning',
  message: '',
};

export function QuoteFormSection({ formspreeEndpoint }) {
  const [formState, setFormState] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...formState,
        _replyto: formState.email,
        subject: `Nieuwe offerteaanvraag van ${formState.name || 'website'}`,
      };

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Formulier kon niet worden verzonden.');
        }
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 700));
      }

      setFormState(initialState);
      setSuccess('Bedankt! We hebben je aanvraag ontvangen en nemen snel contact met je op.');
    } catch (submitError) {
      setError(submitError.message || 'Er ging iets mis bij het verzenden.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Gratis offerte</div>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Vraag een gratis offerte aan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Laat je gegevens achter en we nemen snel contact met je op. We denken mee, geven helder advies
            en sturen een passende offerte zonder gedoe.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-between bg-gradient-to-br from-white to-sand-50/60 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="text-sm uppercase tracking-[0.32em] text-sand-400">Waarom aanvragen?</div>
                <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Snel duidelijkheid over jouw dak</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Van een kleine reparatie tot een complete renovatie, we kijken wat er nodig is en maken een
                  voorstel dat past bij jouw situatie.
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                {[
                  'Persoonlijk contact via telefoon of WhatsApp',
                  'Heldere uitleg over de beste oplossing',
                  'Offerte op maat voor jouw dak',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-300 text-[11px] font-black text-slate-900">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={submitForm} className="bg-white p-6 sm:p-8 lg:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Naam"
                  value={formState.name}
                  onChange={(value) => setFormState((current) => ({ ...current, name: value }))}
                  required
                />
                <Input
                  label="Telefoon"
                  value={formState.phone}
                  onChange={(value) => setFormState((current) => ({ ...current, phone: value }))}
                  required
                />
                <Input
                  label="E-mail"
                  type="email"
                  value={formState.email}
                  onChange={(value) => setFormState((current) => ({ ...current, email: value }))}
                  required
                />
                <Input
                  label="Postcode"
                  value={formState.address}
                  onChange={(value) => setFormState((current) => ({ ...current, address: value }))}
                  required
                />
                <Select
                  label="Type woning"
                  value={formState.housingType}
                  onChange={(value) => setFormState((current) => ({ ...current, housingType: value }))}
                  options={['Rijtjeswoning', 'Vrijstaand', 'Appartement', 'Overig']}
                />
              </div>

              <Textarea
                label="Waar kunnen we je mee helpen?"
                value={formState.message}
                onChange={(value) => setFormState((current) => ({ ...current, message: value }))}
              />

              {error && (
                <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {success}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Versturen...' : 'Vraag gratis offerte aan'}
                </button>
                <div className="text-sm text-slate-500">We reageren meestal binnen 1 werkdag.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
