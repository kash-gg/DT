import Link from 'next/link';


const QUICK_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Research',  href: '/research' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Contact',   href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn',         href: 'https://www.linkedin.com/in/bhavna-ambudkar-2683a919/' },
  { label: 'ResearchGate',     href: 'https://researchgate.net' },
  { label: 'ORCID',            href: 'https://orcid.org' },
  { label: 'Institutional',    href: 'https://sitpune.edu.in' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[rgba(255,255,255,0.5)] backdrop-blur-xl">

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <p className="font-bold text-2xl mb-3">Bhavna Ambudkar</p>
            <p className="font-light text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Design Thinking Professor &amp; Innovation Catalyst at Symbiosis Institute of Technology, Pune.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 300, letterSpacing: '0.15em' }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="slide-link text-sm uppercase tracking-wider" style={{ fontWeight: 400 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 300, letterSpacing: '0.15em' }}>
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slide-link text-sm uppercase tracking-wider"
                    style={{ fontWeight: 400 }}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 gap-2">
        <span
          className="text-xs uppercase tracking-wider"
          style={{ fontWeight: 300, letterSpacing: '0.1em' }}
        >
          © 2025 Bhavna Ambudkar
        </span>
        <span
          className="text-xs uppercase tracking-wider"
          style={{ fontWeight: 300, letterSpacing: '0.1em' }}
        >
          Design inspired by Miranda Biondi
        </span>
      </div>
    </footer>
  );
}
