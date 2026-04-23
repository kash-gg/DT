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
      <h1 className="font-display text-[#1c1c1c] font-semibold text-5xl md:text-7xl lg:text-[80px] leading-tight tracking-tight mb-2">
        <EditableText 
          id="hero-name" 
          defaultText="Bhavna Ambudkar" 
          className="hero-word" 
          style={wordStyle} 
        />
      </h1>
    </div>
  );
}
