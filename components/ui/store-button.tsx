import { cn } from "@/lib/utils";
import { Apple, Play } from "lucide-react";
import Image from "next/image";

interface StoreButtonProps {
  type: "apple" | "google";
  href: string;
  className?: string;
}

export function StoreButton({ type, href, className }: StoreButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white transition-all hover:scale-105",
        "border border-white/10 relative z-20",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {type === "apple" ? (
        <>
          <Image src="/logos/apple.png" alt="apple" height={50} width={50} />
          <div className="flex flex-col items-start">
            <span className="text-xs font-normal">Download on the</span>
            <span className="text-xl font-medium leading-tight">App Store</span>
          </div>
        </>
      ) : (
        <>
          <Image src="/logos/google.png" alt="google" height={50} width={50} />
          <div className="flex flex-col items-start">
            <span className="text-xs font-normal">GET IT ON</span>
            <span className="text-xl font-normal leading-tight">
              Google Play
            </span>
          </div>
        </>
      )}
    </a>
  );
}
