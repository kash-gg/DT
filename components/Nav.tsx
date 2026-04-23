'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useColorScheme, SCHEMES } from './ColorSchemeContext';
import { useEditMode } from './EditModeContext';

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Expertise',  href: '/expertise' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Research',   href: '/research' },
  { label: 'Workshops',  href: '/workshops' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const { scheme, setScheme } = useColorScheme();
  const { isEditMode, setIsEditMode } = useEditMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-400">
        <div 
          style={{ backgroundColor: 'var(--glass-bg)' }}
          className="border border-white/60 backdrop-blur-2xl shadow-lg rounded-full px-8 flex items-center justify-between h-16"
        >
          {/* Logo */}
          <Link href="/" className="font-medium text-base tracking-tight" style={{ fontWeight: 500 }}>
            Bhavna Ambudkar
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: edit toggle + scheme switcher + hamburger */}
          <div className="flex items-center gap-4">
            {/* Edit Mode Toggle */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border ${isEditMode ? 'bg-blue-500 text-white border-blue-600' : 'bg-black/5 border-black/10 text-gray-600 hover:bg-black/10'}`}
              title="Toggle Inline Editor (Cmd/Ctrl + E)"
            >
              {isEditMode ? 'Editing' : 'Edit'}
            </button>

            {/* Scheme switcher */}
            <div className="flex items-center gap-2">
              {SCHEMES.map(s => (
                <button
                  key={s.value}
                  aria-label={`Switch to ${s.name} scheme`}
                  className={`scheme-swatch${scheme === s.value ? ' active' : ''}`}
                  style={{ backgroundColor: s.value }}
                  onClick={() => setScheme(s.value)}
                />
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className="block w-6 h-px bg-[#0a0a0a] transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : '' }}
              />
              <span
                className="block w-6 h-px bg-[#0a0a0a] transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-px bg-[#0a0a0a] transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="absolute top-6 right-6 text-[#f4f4f4] text-4xl"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <div className="flex gap-3 mt-8">
          {SCHEMES.map(s => (
            <button
              key={s.value}
              className={`scheme-swatch${scheme === s.value ? ' active' : ''}`}
              style={{ backgroundColor: s.value }}
              onClick={() => setScheme(s.value)}
              aria-label={s.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
