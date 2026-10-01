import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; narrow?: boolean };

export function Container({ children, className = "", narrow = false }: Props) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${narrow ? "max-w-3xl" : "max-w-[1200px]"} ${className}`}>
      {children}
    </div>
  );
}
