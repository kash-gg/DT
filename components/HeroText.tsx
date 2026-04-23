'use client';

import { useEffect, useRef } from 'react';
import EditableText from './EditableText';

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
          fontSize: 'clamp(56px, 8vw, 110px)',
          lineHeight: 1.0,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          textAlign: 'left',
          marginBottom: '20px',
        }}
      >
        <EditableText 
          id="hero-name" 
          defaultText="Bhavna Ambudkar" 
          className="hero-word text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500" 
          style={wordStyle} 
        />
      </h1>
    </div>
  );
}
