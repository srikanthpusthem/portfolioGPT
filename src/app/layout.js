import "./globals.css";
import Providers from "./providers"; // Redux or any global provider
import NavBar from "./components/NavBar";
import AnimatedLayout from "./components/AnimatedLayout";

export const metadata = {
  title: "SrikanthGPT",
  description: "A conversational portfolio to showcase projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white antialiased min-h-screen">
        {/* Global providers (e.g., Redux) */}
        <Providers>
          {/* Fixed navbar at the top */}
          <NavBar />

          {/* Main content with top padding so it's not hidden behind the navbar */}
          <main className="pt-16">
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </main>
        </Providers>
      </body>
    </html>
  );
}