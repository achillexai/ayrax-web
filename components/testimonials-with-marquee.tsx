import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  type TestimonialAuthor,
} from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-transparent text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        {/* Testimonial row */}
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h1 className="max-w-[600px] text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-tr from-[#fff] via-[#387657] to-[#2d3732] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl font-medium text-gray-300/80 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Testimonal row */}
        <div className="relative flex w-full flex-col items-center bg-transparent justify-center overflow-x-hidden px-4 sm:px-0">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`original-${i}`} {...testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`duplicate-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#080908] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#080908] sm:block" />
        </div>

        {/* Testimonal row (reverse) */}
        <div className="relative flex w-full flex-col items-center bg-transparent justify-center overflow-x-hidden px-4 sm:px-0 sm:mt-[-60px]">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marqueeReverse group-hover:[animation-play-state:paused] flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`reverse-original-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marqueeReverse group-hover:[animation-play-state:paused] flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`reverse-duplicate-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#080908] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#080908] sm:block" />
        </div>
      </div>
    </section>
  );
}
