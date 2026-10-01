import Link from "next/link";

type Props = { tone?: "blue" | "white"; size?: "sm" | "lg" };

export function Logo({ tone = "blue", size = "sm" }: Props) {
  const color = tone === "white" ? "text-white" : "text-reset";
  const scale = size === "lg" ? "text-5xl" : "text-[1.75rem]";
  return (
    <Link href="/" aria-label="RESET, retour à l’accueil" className={`inline-flex items-baseline font-display font-extrabold leading-none tracking-[-0.06em] ${color} ${scale}`}>
      RESET
      <span aria-hidden="true" className="text-coral">.</span>
    </Link>
  );
}
