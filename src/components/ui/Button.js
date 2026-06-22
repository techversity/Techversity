import Link from "next/link";

export default function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all";

  const styles = {
    primary: "bg-wine text-white hover:bg-wine-mid",
    secondary: "bg-transparent text-wine border border-wine hover:bg-wine-pale",
    gold: "bg-gold text-white hover:bg-gold-deep",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}