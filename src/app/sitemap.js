import { universities } from "@/lib/universities";
import { programs } from "@/lib/programs";
import { certifications } from "@/lib/certifications";
import { posts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://techversity.ai";

export default function sitemap() {
  const now = new Date();

  // ── static pages ──
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { url: "/about-us/faqs", priority: 0.5, changeFrequency: "monthly" },
    { url: "/universities", priority: 0.9, changeFrequency: "weekly" },
    { url: "/programs", priority: 0.9, changeFrequency: "weekly" },
    { url: "/doctorate", priority: 0.9, changeFrequency: "weekly" },
    { url: "/certifications", priority: 0.9, changeFrequency: "weekly" },
    { url: "/resources/blog", priority: 0.8, changeFrequency: "weekly" },
    { url: "/verification", priority: 0.4, changeFrequency: "monthly" },
    { url: "/apply/eligibility-check", priority: 0.6, changeFrequency: "monthly" },
    { url: "/apply/application-form", priority: 0.5, changeFrequency: "monthly" },
    { url: "/contact-us", priority: 0.6, changeFrequency: "monthly" },
    { url: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
    { url: "/refund-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
    { url: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/rescheduling-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/shipping-delivery-policy", priority: 0.2, changeFrequency: "yearly" },
  ].map((p) => ({
    url: `${BASE_URL}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // ── university detail pages ──
  const universityPages = universities.map((u) => ({
    url: `${BASE_URL}/universities/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── program detail pages (excluding certifications, which redirect to /certifications) ──
  const programPages = programs
    .filter((p) => p.category !== "certifications")
    .map((p) => ({
      url: `${BASE_URL}/programs/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  // ── certification detail pages ──
  const certificationPages = certifications.map((c) => ({
    url: `${BASE_URL}${c.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // ── blog posts ──
  const blogPages = posts.map((p) => ({
    url: `${BASE_URL}${p.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...universityPages,
    ...programPages,
    ...certificationPages,
    ...blogPages,
  ];
}