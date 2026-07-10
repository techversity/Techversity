import { notFound } from "next/navigation";
import { posts } from "@/lib/blog";
import { getBlogContent } from "@/lib/blog-content";
import ArticleHero from "@/components/blog/ArticleHero";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleCTA from "@/components/blog/ArticleCTA";
import RelatedArticles from "@/components/blog/RelatedArticles";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const content = getBlogContent(slug);
  return {
    title: `${post.title} | Techversity.ai`,
    description: content?.dek || post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getBlogContent(slug);
  const heroPost = { ...post, dek: content?.dek || post.excerpt };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: content?.dek || post.excerpt,
    image: `https://techversity.ai${post.img}`,
    author: { "@type": "Organization", name: post.author || "Techversity Editorial" },
    publisher: {
      "@type": "Organization",
      name: "Techversity.ai",
      logo: { "@type": "ImageObject", url: "https://techversity.ai/images/Logo/logo.avif" },
    },
    datePublished: post.date,
    mainEntityOfPage: `https://techversity.ai${post.href}`,
  };

  return (
    <main className="bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleHero post={heroPost} />

      <article className="max-w-[820px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        {content ? (
          <>
            <KeyTakeaways items={content.keyTakeaways} />
            <ArticleBody blocks={content.blocks} />
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-line px-7 py-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-mist mb-3">
              Full Article Coming Soon
            </p>
            <p className="text-[15px] text-slate leading-relaxed max-w-[440px] mx-auto">
              {post.excerpt} We&apos;re still writing up the complete guide for
              this one — in the meantime, an advisor can walk you through it directly.
            </p>
          </div>
        )}

        <ArticleCTA />
      </article>

      <RelatedArticles currentSlug={post.slug} category={post.category} />
    </main>
  );
}