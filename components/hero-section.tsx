"use client";

import { Badge } from "@/components/ui/badge";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { StoreButton } from "@/components/ui/store-button";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "ghost";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({ badge, title, description, image }: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;

  return (
    <section
      className={cn(
        " text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge
              variant="outline"
              className="animate-appear border-none  gap-2 bg-[#2d3732] p-2 px-4 mb-[-20px] shadow-md"
            >
              <span className="text-white font-normal text-sm ">
                {badge.text}
              </span>
            </Badge>
          )}

          {/* Title */}
          <h1
            className="relative z-10 inline-block animate-appear bg-gradient-to-r 
          from-[#fff] via-[#387657] to-[#2d3732] bg-clip-text text-5xl font-semibold leading-tight text-transparent
           drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight max-w-6xl"
          >
            {title}
          </h1>

          {/* Description */}
          <p className="text-base relative z-10 max-w-[550px] animate-appear font-normal text-gray-300 opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="z-10 relative flex flex-col sm:flex-row justify-center gap-4 animate-appear opacity-0 delay-300">
            <StoreButton
              type="apple"
              href="https://apps.apple.com/app/your-app"
            />
            <StoreButton
              type="google"
              href="https://play.google.com/store/apps/details?id=your.app"
            />
          </div>

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={1248}
                  height={765}
                  priority
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom delay-1000 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
