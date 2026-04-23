import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thought leadership on Design Thinking, AI in education, and innovation culture by Prof. Bhavna Ambudkar.',
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--scheme-accent)] mb-4">
              Ideas & Perspectives
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
              Thought <span className="font-light italic">Leadership</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Reflections on pedagogy, design thinking frameworks, and cultivating innovation within engineering institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      <section className="section-pad border-b border-[#e0ddd6] bg-[#f2f0eb]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-4">
                Latest
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1c1c1c] mb-4 leading-snug">
                {blogPosts[0].title}
              </h2>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <span className="text-xs border border-[#1c1c1c] text-[#1c1c1c] px-2 py-1 rounded-sm uppercase tracking-wider">{blogPosts[0].category}</span>
                <span className="text-sm text-[#666]">{blogPosts[0].readTime}</span>
                <span className="text-sm text-[#666]">{blogPosts[0].date}</span>
              </div>
            </div>
            <div>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
