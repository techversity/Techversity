"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GlobalPartnersRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/universities");
  }, [router]);

  return (
    <>
      {/* fallback for no-JS / instant crawlers */}
      <meta httpEquiv="refresh" content="0; url=/universities" />
      <main className="min-h-[50vh] flex items-center justify-center bg-ivory">
        <p className="text-slate text-sm">
          Redirecting to{" "}
          <Link href="/universities" className="text-gold underline">
            our university partners
          </Link>
          …
        </p>
      </main>
    </>
  );
}