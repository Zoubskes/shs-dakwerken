import React, { useState } from 'react';
import { ContactCard } from '../components/ContactCard';
import { InfoBlock } from '../components/InfoBlock';
import { Input, Select, Textarea } from '../components/FormFields';
import { SectionHeading } from '../components/SectionHeading';

const contactSteps = [
  {
    title: '1. Neem contact op',
    text: 'Bel, WhatsApp of vul het formulier in. We zien direct wat je nodig hebt.',
  },
  {
    title: '2. Snelle terugkoppeling',
    text: 'We reageren zo snel mogelijk en denken meteen mee over de juiste oplossing.',
  },
  {
    title: '3. Duidelijk voorstel',
    text: 'Je krijgt helder advies over inspectie, herstel of vervolgafspraak zonder gedoe.',
  },
];

const reasons = [
  {
    title: 'Heldere communicatie',
    text: 'Je weet snel waar je aan toe bent en krijgt een eerlijk beeld van de situatie.',
  },
  {
    title: 'Snel schakelen',
    text: 'Bij urgente zaken proberen we direct te helpen en waar nodig snel langs te komen.',
  },
  {
    title: 'Direct contact',
    text: 'Via telefoon of WhatsApp kun je meteen contact opnemen voor een snelle reactie.',
  },
  {
    title: 'Geschikt voor elke dienst',
    text: 'Van nokvorsten tot stormschade: we kijken mee naar de juiste vervolgstap.',
  },
];

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
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint ontbreekt. Zet VITE_FORMSPREE_ENDPOINT in je omgeving.');
      }

      const payload = {
        ...formState,
        _replyto: formState.email,
        subject: `Nieuwe aanvraag van ${formState.name || 'website'}`,
      };

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
    <div className="-mt-28 bg-[#fffdf5] text-slate-900 sm:-mt-32 lg:-mt-36">
      <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mt-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Hoe het werkt</div>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Zo verloopt een aanvraag bij SHS-Dakwerken
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                We houden het graag duidelijk. Je neemt contact op, wij reageren snel en daarna bespreken we de
                beste vervolgstap voor jouw situatie.
              </p>

              <div className="mt-8 grid gap-4">
                {contactSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-[1.5rem] border border-sand-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.06)]"
                  >
                    <div className="text-sm font-bold uppercase tracking-[0.32em] text-sand-400">{step.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={submitForm}
              className="rounded-[2rem] border border-sand-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8"
            >
              <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Vraag een gratis offerte aan</div>
              <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                Laat je gegevens achter, dan nemen we snel contact met je op
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                label="Waar kunnen we je mee helpen?"
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

              <p className="mt-4 text-sm leading-7 text-slate-500">
                We reageren meestal binnen 1 werkdag. Bij spoed kun je ons het best direct bellen.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-sand-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-sand-400">Contactgegevens</div>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Direct contact opnemen kan op meerdere manieren
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Kies wat voor jou het handigst is. Bellen of WhatsAppen is het snelst, maar via het formulier
                kunnen we ook direct met je aanvraag aan de slag.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={brand.phoneHref}
                className="rounded-full bg-sand-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-sand-200"
              >
                {brand.phoneDisplay}
              </a>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sand-50"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="rounded-full border border-sand-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
