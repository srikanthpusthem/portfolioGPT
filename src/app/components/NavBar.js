"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle"; // Import your theme toggle component

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-sm
        bg-white/10 dark:bg-gray-900/10
        border-b border-white/20 dark:border-gray-700
        flex items-center justify-between
        px-4 py-3
        shadow-sm
        transition-colors
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      {/* Left: Brand Name with Gradient Text */}
      <div
        className="
          text-2xl sm:text-3xl font-bold
          bg-clip-text text-transparent
          bg-gradient-to-r from-blue-400 to-green-400
          cursor-pointer
          transition-transform hover:scale-105
        "
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        SRIKANTH GPT
      </div>

      {/* Right: Nav Links + Theme Toggle + Profile */}
      <nav className="flex items-center gap-4">
        {/* Nav Links */}
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              relative
              text-gray-200 dark:text-gray-300
              hover:text-white dark:hover:text-white
              font-medium
              transition-colors
            "
          >
            <span className="hover-underline">{link.name}</span>
          </a>
        ))}

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Profile Icon */}
        <button
          className="
            text-gray-300 dark:text-gray-300
            hover:text-white dark:hover:text-white
            transition-colors
            relative
          "
          aria-label="User profile"
        >
          <UserCircleIcon className="h-8 w-8" />
        </button>
      </nav>
    </header>
  );
}