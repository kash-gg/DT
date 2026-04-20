'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Ticker from '@/components/Ticker';
import { projects } from '@/lib/data';

const FILTERS = ['All', 'Innovation', 'Research', 'Mentorship'] as const;
type Filter = typeof FILTERS[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24 }}>
            Selected Work
          </p>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 1 }}>
            Projects &amp; <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Initiatives</em>
          </h1>
        </div>
      </section>

      <Ticker />

      {/* ─── FILTER TABS ─── */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-tab${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 0,
            }}
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
