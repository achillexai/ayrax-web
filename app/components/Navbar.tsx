"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="w-full bg-[#1d1e1d]/70 backdrop-blur-md rounded-full border border-gray-800">
        <div className="mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="ml-5 flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-6 w-6 sm:h-7 sm:w-7"
                />
              </Link>
              <h1 className="font-semibold tracking-wider text-base sm:text-lg">
                AyraX
              </h1>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              <Link
                href="#features"
                className="text-gray-300 hover:text-white tracking-wide transition-colors text-sm sm:text-base font-normal"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white tracking-wide transition-colors text-sm sm:text-base font-normal"
              >
                Testimonials
              </Link>
              <Link
                href="#blog"
                className="text-gray-300 hover:text-white tracking-wide transition-colors text-sm sm:text-base font-normal mr-0"
              >
                Blog
              </Link>
            </div>

            {/* Empty div for flex spacing */}
            <div className="w-6 sm:w-7"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
