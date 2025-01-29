"use client";

import { HeroSection } from "@/components/hero-section";
import { Icons } from "@/components/ui/icons";

export function Hero() {
  return (
    <HeroSection
      badge={{
        text: "AI-Guided Product Building",
        action: {
          text: "",
          href: "/",
        },
      }}
      title="Build faster with beautiful components"
      description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
      image={{
        light: "/placeholder.png",
        dark: "/placeholder.png",
        alt: "UI Components Preview",
      }}
    />
  );
}
