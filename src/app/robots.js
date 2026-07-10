export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/apply/application-form", // post-lead-capture step, not a public landing page
      ],
    },
    sitemap: "https://techversity.ai/sitemap.xml",
  };
}