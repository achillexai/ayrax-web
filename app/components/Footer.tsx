import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-[220px]">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-xl" />

      <div className="relative z-10 py-12 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-medium">Ayrax</h3>
              <p className="text-sm text-gray-400">
                A revolutionary mobile app for your needs. Experience the future
                of mobile technology with our innovative solutions.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@ayrax.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 App Street, San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ayrax. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
