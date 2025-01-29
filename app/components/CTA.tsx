import { Glow } from "@/components/ui/glow";
import { StoreButton } from "@/components/ui/store-button";

export default function CTA() {
  return (
    <section className="relative mt-40 mb-40 py-20">
      <Glow variant="ctaCenter" className="z-0" />
      <div className="relative z-10 max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-tr from-[#fff] via-[#387657] to-[#2d3732] bg-clip-text text-transparent mb-4">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Download our app now and experience the difference!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-appear opacity-0 delay-300">
          <StoreButton
            type="apple"
            href="https://apps.apple.com/app/your-app"
          />
          <StoreButton
            type="google"
            href="https://play.google.com/store/apps/details?id=your.app"
          />
        </div>
      </div>
    </section>
  );
}
