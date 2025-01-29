import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Using AI-Generated Content from Our SAAS for Better Marketing",
    category: "Content Creation",
    date: "October 1, 2023",
    image: "/images/1.jpg",
    href: "#",
  },
  {
    title: "How Our AI Software Revolutionizes Your Content Marketing",
    category: "AI Tools",
    date: "October 1, 2023",
    image: "/images/2.jpg",
    href: "#",
  },
  {
    title: "Crafting Compelling Content with Our SAAS AI Software",
    category: "Marketing",
    date: "October 1, 2023",
    image: "/images/3.jpg",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <div id="blog">
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-[#fff] via-[#387657] to-[#2d3732] bg-clip-text text-transparent">
              Read Resources Written By Professionals.
            </h2>
            <p className="text-xl font-medium text-gray-300/80 max-w-3xl mx-auto">
              Discover The Tools Designed To Streamline Your Sales Process And
              Maximize Your Team&apos;s Productivity
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <div className="flex flex-col">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 md:mt-6 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400/80">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-sm font-medium text-white/80">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-white group-hover:text-white/70 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
