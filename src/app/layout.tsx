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
  title: "Kizarmie — Product Engineer & React Native Specialist",
  description:
    "Product Engineer with 4+ years shipping live mobile apps across fintech, healthcare, agritech, and education for users across Africa. React Native Specialist. Lagos, Nigeria.",
  keywords: ["React Native", "Product Engineer", "Mobile Developer", "Lagos", "Nigeria", "Jeffery Adolor"],
  openGraph: {
    title: "Kizarmie — Product Engineer & React Native Specialist",
    description: "Building live mobile products for millions across Africa.",
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
