'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import MarqueeButton from '@/components/MarqueeButton';

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
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <h1
              style={{
                fontSize: 'clamp(40px, 8vw, 120px)',
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              Let&apos;s build something{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>meaningful</em>
            </h1>
            <p style={{ fontSize: 'clamp(40px, 8vw, 120px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1 }}>
              together.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ─── CONTACT LAYOUT ─── */}
      <section className="section-pad">
        <div className="container">
          <div
            className="two-col-grid"
            style={{ alignItems: 'start' }}
          >
            {/* Left: Info */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
                    Email
                  </p>
                  <a
                    href="mailto:bhavna.ambudkar@sitpune.edu.in"
                    className="slide-link"
                    style={{ fontSize: 18, fontWeight: 700 }}
                  >
                    bhavna.ambudkar@sitpune.edu.in
                  </a>
                </div>

                <div>
                  <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/bhavna-ambudkar-2683a919/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slide-link"
                    style={{ fontSize: 18, fontWeight: 700 }}
                  >
                    linkedin.com/in/bhavna-ambudkar ↗
                  </a>
                </div>

                <div className="divider" />

                <div>
                  <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>
                    Institution
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}>
                    Symbiosis Institute of Technology<br />
                    Lavale, Pune 412115<br />
                    Maharashtra, India
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>
                    Office Hours
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 300 }}>
                    Mon–Fri, 10AM–5PM IST
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal>
              {submitted ? (
                <div style={{ border: '2px solid #0a0a0a', padding: 64, textAlign: 'center' }}>
                  <p style={{ fontSize: 48, marginBottom: 16 }}>✦</p>
                  <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Message Received</h3>
                  <p style={{ fontSize: 16, fontWeight: 300 }}>
                    Thank you for reaching out. I&apos;ll get back to you within 2 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-field"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p style={{ fontSize: 12, color: 'var(--cinnabar)', marginTop: 4 }}>{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-field"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p style={{ fontSize: 12, color: 'var(--cinnabar)', marginTop: 4 }}>{errors.email}</p>}
                  </div>

                  <div>
                    <select
                      className="form-field"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="">Select Subject</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p style={{ fontSize: 12, color: 'var(--cinnabar)', marginTop: 4 }}>{errors.subject}</p>}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="form-field"
                      rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    />
                    {errors.message && <p style={{ fontSize: 12, color: 'var(--cinnabar)', marginTop: 4 }}>{errors.message}</p>}
                  </div>

                  <MarqueeButton label="Send Message →" type="submit" className="w-full justify-center" />
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
