'use client';

import { useEffect, useRef } from 'react';

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>('.hero-word');
    words.forEach((w, i) => {
      w.style.transitionDelay = `${0.9 + i * 0.08}s`;
      w.style.opacity = '1';
      w.style.transform = 'translateY(0)';
    });
  }, []);

  const wordStyle: React.CSSProperties = {
    display: 'inline-block',
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  return (
    <div ref={ref}>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(72px, 10vw, 140px)',
          lineHeight: 1.0,
          fontWeight: 800,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="hero-word text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500" style={wordStyle}>Bhavna</span>
      </h1>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(72px, 10vw, 140px)',
          lineHeight: 1.0,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          marginLeft: '8%',
        }}
      >
        <span className="hero-word text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400" style={{ ...wordStyle, transitionDelay: '0.98s' }}>Ambudkar</span>
      </h1>
    </div>
  );
}
