"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative group">
        {/* Search Input */}
        <div className="relative search-glow rounded-2xl transition-all duration-300">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors duration-300" />
          <Input
            type="text"
            placeholder="Search for a country..."
            className="w-full pl-12 pr-20 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-red-500 dark:focus:border-red-500 focus:ring-0 transition-all duration-300 shadow-lg hover:shadow-xl"
          />
          <Button
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Suggestions Placeholder */}
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 group-focus-within:opacity-100 transition-all duration-300 transform translate-y-2 group-focus-within:translate-y-0 z-10">
          <div className="p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
              Popular Searches
            </div>
            <div className="space-y-2">
              {["United States", "Japan", "Germany", "Brazil", "Australia"].map(
                (country) => (
                  <div
                    key={country}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {country}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
