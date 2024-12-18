import "./globals.css";
import Sidebar from "../app/components/Sidebar";

export const metadata = {
  title: "PortfolioGPT",
  description: "A conversational portfolio to showcase projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <main className="flex-grow bg-white overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
