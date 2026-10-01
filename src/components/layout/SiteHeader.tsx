"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/site";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le menu mobile à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Échap ferme le menu ; on bloque le défilement de la page derrière.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.slice(1).map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-md px-3 py-2 font-display text-[0.98rem] font-semibold transition-colors hover:text-reset ${
                      active ? "text-reset" : "text-ink/80"
                    }`}
                  >
                    {item.label}
                    {active ? <span aria-hidden="true" className="absolute inset-x-3 -bottom-[13px] h-[3px] rounded-full bg-coral" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-reset lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
        </button>
      </div>
    </header>

      {/* Hors du <header> : son backdrop-filter piégerait l'élément fixe. */}
      <nav
        id="menu-mobile"
        aria-label="Navigation principale"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-reset px-5 pb-10 pt-6 text-white sm:top-[4.5rem] sm:px-8 lg:hidden"
      >
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-display text-2xl font-bold tracking-tight"
                >
                  {item.label}
                  {active ? <span aria-hidden="true" className="text-coral">●</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-reset-pale">Observer. Comparer. Comprendre. Adapter.</p>
      </nav>
    </>
  );
}
