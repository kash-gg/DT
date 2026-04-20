import type { Metadata } from 'next';
import './globals.css';
import { ColorSchemeProvider } from '@/components/ColorSchemeContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageCurtain from '@/components/PageCurtain';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import GSAPScrollInit from '@/components/GSAPScrollInit';

export const metadata: Metadata = {
  title: {
    default: 'Bhavna Ambudkar — Design Thinking Professor',
    template: '%s | Bhavna Ambudkar',
  },
  description:
    'Prof. Bhavna Ambudkar is a Design Thinking educator, innovation catalyst, and research scholar at Symbiosis Institute of Technology, Pune.',
  openGraph: {
    title: 'Bhavna Ambudkar — Design Thinking Professor',
    description:
      'Design Thinking educator and innovation catalyst at SIT Pune. 15+ years shaping how engineers think, empathize, and build.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorSchemeProvider>
          <CustomCursor />
          <PageCurtain />
          <Nav />
          <GSAPScrollInit />
          <PageTransitionWrapper>
            <main>{children}</main>
          </PageTransitionWrapper>
          <Footer />
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
