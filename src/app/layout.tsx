import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kizarmie — Full-Stack & AI Integration Engineer",
  description:
    "Full-stack engineer specialised in React Native mobile apps and embedded AI agent systems for vertical SaaS. 4+ years shipping live products in fintech, healthcare, and edtech across Africa. Lagos, Nigeria.",
  keywords: ["React Native", "AI Integration Engineer", "Full-Stack Engineer", "Embedded AI", "Multi-agent", "Node.js", "Mobile Developer", "Lagos", "Nigeria", "Jeffery Adolor"],
  openGraph: {
    title: "Kizarmie — Full-Stack & AI Integration Engineer",
    description: "Building mobile products and AI agent layers for products used by millions across Africa.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
