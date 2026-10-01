import Link from "next/link";
import { legalNav, mainNav, site } from "@/config/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="white" size="lg" />
          <p className="mt-5 max-w-sm font-display text-xl font-bold leading-snug">{site.signature}</p>
          <p className="mt-3 max-w-sm text-white/75">
            Laboratoire indépendant de réflexion sur les politiques publiques. Affilié à aucun parti politique.
          </p>
        </div>

        <nav aria-label="Plan du site">
          <h2 className="mb-4 font-display text-base font-bold text-reset-pale">Explorer</h2>
          <ul className="space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations légales">
          <h2 className="mb-4 font-display text-base font-bold text-reset-pale">Informations</h2>
          <ul className="space-y-2.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/65">Aucun cookie publicitaire, aucun traceur.</p>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-[1200px] px-5 py-6 text-sm text-white/65 sm:px-8">
          Observer<span className="text-coral">.</span> Comparer<span className="text-coral">.</span> Comprendre
          <span className="text-coral">.</span> Adapter<span className="text-coral">.</span>
        </p>
      </div>
    </footer>
  );
}
