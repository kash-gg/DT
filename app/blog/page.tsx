import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thought leadership on Design Thinking, AI in education, and innovation culture by Prof. Bhavna Ambudkar.',
};

export default function BlogPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24 }}>
              Ideas &amp; Perspectives
            </p>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 1 }}>
              Thought <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Leadership</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>


      {/* ─── FEATURED POST ─── */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>
              Latest
            </p>
            <div className="two-col-grid">
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 24 }}>
                  {blogPosts[0].title}
                </h2>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                  <span className="pill-tag">{blogPosts[0].category}</span>
                  <span style={{ fontSize: 12, fontWeight: 300 }}>{blogPosts[0].readTime}</span>
                  <span style={{ fontSize: 12, fontWeight: 300 }}>{blogPosts[0].date}</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.7 }}>
                  {blogPosts[0].excerpt}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 0,
            }}
          >
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
