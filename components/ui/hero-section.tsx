"use client";

import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-red-200 dark:border-red-800">
            <Sparkles className="h-4 w-4" />
            <span>Explore 195+ Countries</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Explore the
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
              World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover fascinating details about every country on Earth. From
            capitals to cultures,
            <span className="text-red-500 font-semibold">
              {" "}
              embark on a journey of global discovery
            </span>
            .
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-red-500 group-hover:scale-110 transition-transform duration-300">
                195+
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Countries
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-500 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Continents
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-500 group-hover:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Discoveries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
