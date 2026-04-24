'use client';

import { useState } from 'react';

const SUBJECTS = [
  'Collaboration',
  'Speaking Engagement',
  'Consulting',
  'Research',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject) e.subject = 'Please select a subject';
    if (form.message.length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-4 leading-tight">
              Let&apos;s build something <span className="font-light italic">meaningful</span> together.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-2">
                  Email
                </p>
                <a
                  href="mailto:bhavna.ambudkar@sitpune.edu.in"
                  className="text-xl font-medium text-[#1c1c1c] hover:text-[var(--scheme-accent)] transition-colors"
                >
                  bhavna.ambudkar@sitpune.edu.in
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-2">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/bhavna-ambudkar-2683a919/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-[#1c1c1c] hover:text-[var(--scheme-accent)] transition-colors"
                >
                  linkedin.com/in/bhavna-ambudkar ↗
                </a>
              </div>

              <div className="divider" />

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-3">
                  Institution
                </p>
                <p className="text-base text-[#1c1c1c] leading-relaxed">
                  Symbiosis Institute of Technology<br />
                  Lavale, Pune 412115<br />
                  Maharashtra, India
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-3">
                  Office Hours
                </p>
                <p className="text-base text-[#1c1c1c]">
                  Mon–Fri, 10AM–5PM IST
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="border border-[#e0ddd6] bg-white p-12 text-center rounded-sm">
                  <p className="text-[var(--scheme-accent)] text-4xl font-serif mb-6">✦</p>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-[#1c1c1c]">Message Received</h3>
                  <p className="text-[#666]">
                    Thank you for reaching out. I&apos;ll get back to you within 2 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 bg-white p-8 border border-[#e0ddd6] rounded-sm">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#faf9f6] border border-[#e0ddd6] px-4 py-3 rounded-sm focus:outline-none focus:border-[#1c1c1c] transition-colors"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-xs text-[var(--scheme-accent)] mt-2">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[#faf9f6] border border-[#e0ddd6] px-4 py-3 rounded-sm focus:outline-none focus:border-[#1c1c1c] transition-colors"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-xs text-[var(--scheme-accent)] mt-2">{errors.email}</p>}
                  </div>

                  <div>
                    <select
                      className="w-full bg-[#faf9f6] border border-[#e0ddd6] px-4 py-3 rounded-sm focus:outline-none focus:border-[#1c1c1c] transition-colors appearance-none"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="">Select Subject</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p className="text-xs text-[var(--scheme-accent)] mt-2">{errors.subject}</p>}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="w-full bg-[#faf9f6] border border-[#e0ddd6] px-4 py-3 rounded-sm focus:outline-none focus:border-[#1c1c1c] transition-colors resize-y"
                      rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                    {errors.message && <p className="text-xs text-[var(--scheme-accent)] mt-2">{errors.message}</p>}
                  </div>

                  <button type="submit" className="academic-btn w-full mt-2">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
