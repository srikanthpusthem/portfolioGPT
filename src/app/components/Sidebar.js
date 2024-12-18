import { HomeIcon, BriefcaseIcon, SparklesIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Projects", href: "#", icon: BriefcaseIcon },
  { name: "Skills", href: "#", icon: SparklesIcon },
  { name: "Contact", href: "#", icon: EnvelopeIcon },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-50 dark:bg-gray-900 border-r border-gray-50 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-4 text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-50 dark:border-gray-700">
        PortfolioGPT
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <link.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Srikanth. All rights reserved.
      </div>
    </aside>
  );
}
