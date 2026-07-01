import React, { useState } from 'react';
import { ContactCard } from '../components/ContactCard';
import { InfoBlock } from '../components/InfoBlock';
import { Input, Select, Textarea } from '../components/FormFields';
import { SectionHeading } from '../components/SectionHeading';

export function ContactPage({ onSuccess, brand, formspreeEndpoint }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    housingType: 'Rijtjeswoning',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const payload = {
        ...formState,
        _replyto: formState.email,
        subject: `Nieuwe aanvraag van ${formState.name || 'website'}`,
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

      setFormState({
        name: '',
        phone: '',
        email: '',
        address: '',
        housingType: 'Rijtjeswoning',
        message: '',
      });
      onSuccess();
    } catch (submitError) {
      setError(submitError.message || 'Er ging iets mis bij het verzenden.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Neem direct contact op met SHS-Dakwerken"
        description="De contactpagina combineert het formulier, de directe telefoonroute en de WhatsApp-koppeling in één duidelijke flow."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <InfoBlock
            title="Direct bereikbaar"
            text="Bel ons of stuur een WhatsApp-bericht voor snelle hulp, of vul het formulier in als je liever alles rustig uitlegt."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard label="Telefoon" value={brand.phoneDisplay} href={brand.phoneHref} />
            <ContactCard label="WhatsApp" value={brand.whatsappDisplay} href={brand.whatsappHref} external />
            <ContactCard label="E-mail" value={brand.email} href={`mailto:${brand.email}`} />
            <ContactCard label="KVK" value={brand.kvk} />
          </div>
          <div className="rounded-[1.75rem] border border-sand-200 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.32em] text-sand-400">Let op</div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Als `VITE_FORMSPREE_ENDPOINT` nog niet is ingevuld, simuleert de demo een succesvolle verzending.
              Zodra het echte Formspree-endpoint bekend is, wordt de aanvraag direct doorgestuurd.
            </p>
          </div>
        </div>

        <form
          onSubmit={submitForm}
          className="rounded-[2rem] border border-sand-200 bg-white p-6 shadow-sm backdrop-blur"
        >
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
              label="Postcode / huisnummer"
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
            label="Bericht"
            value={formState.message}
            onChange={(value) => setFormState((current) => ({ ...current, message: value }))}
          />
          {error && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Versturen...' : 'Verstuur aanvraag'}
            </button>
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
            >
              WhatsApp openen
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
