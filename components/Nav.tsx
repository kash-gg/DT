'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEditMode } from './EditModeContext';

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Expertise',  href: '/expertise' },
  { label: 'Research',   href: '/research' },
  { label: 'Workshops',  href: '/workshops' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const { isEditMode, setIsEditMode } = useEditMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6] border-b border-[#e0ddd6] transition-all duration-400">
        <div className="container h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display font-semibold text-lg tracking-tight text-[#1c1c1c]">
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

          {/* Right: edit toggle + hamburger */}
          <div className="flex items-center gap-4">
            {/* Edit Mode Toggle */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border ${isEditMode ? 'bg-[#8c2d3a] text-white border-[#8c2d3a]' : 'bg-transparent border-[#e0ddd6] text-[#1c1c1c] hover:border-[#1c1c1c]'}`}
              title="Toggle Inline Editor (Cmd/Ctrl + E)"
            >
              {isEditMode ? 'Editing' : 'Edit'}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className="block w-6 h-px bg-[#1c1c1c] transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : '' }}
              />
              <span
                className="block w-6 h-px bg-[#1c1c1c] transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-px bg-[#1c1c1c] transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="absolute top-6 right-6 text-[#1c1c1c] text-4xl"
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
      </div>
    </>
  );
}
