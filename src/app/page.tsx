import { Hero } from "@/components/home/Hero";
import { Principle } from "@/components/home/Principle";
import { ThemeIndex } from "@/components/home/ThemeIndex";
import { LatestWork } from "@/components/home/LatestWork";
import { WorldLab } from "@/components/home/WorldLab";
import { MethodBand } from "@/components/home/MethodBand";
import { Commitments } from "@/components/home/Commitments";
import { AboutCta } from "@/components/home/AboutCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principle />
      <ThemeIndex />
      <LatestWork />
      <WorldLab />
      <MethodBand />
      <Commitments />
      <AboutCta />
    </>
  );
}
