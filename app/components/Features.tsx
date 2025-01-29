import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Glow } from "@/components/ui/glow";

export default function Features() {
  const data = [
    {
      title: "User-Friendly Interface",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-normal mb-8">
            Our app features an intuitive, easy-to-navigate interface designed
            for users of all ages and tech-savviness levels.
          </p>
          <div className="flex">
            <Image
              src="/images/4.png"
              alt="User-friendly interface screenshot 1"
              width={500}
              height={500}
              className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Lightning-Fast Performance",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-normal mb-8">
            Experience blazing-fast load times and smooth interactions, thanks
            to our optimized codebase and efficient data management.
          </p>
          <div className="flex">
            <Image
              src="/images/4.png"
              alt="User-friendly interface screenshot 2"
              width={500}
              height={800}
              className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Robust Security",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-normal mb-4">
            Your data&apos;s safety is our top priority. Our app employs
            state-of-the-art security measures to protect your information.
          </p>
          <div className="flex">
            <Image
              src="/images/4.png"
              alt="User-friendly interface screenshot 1"
              width={500}
              height={800}
              className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
      <Glow variant="featuresLeft" />
    </section>
  );
}
