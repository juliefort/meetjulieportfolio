import type { Metadata } from "next";
import { Josefin_Sans} from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "/public/globals.css";
import { cn } from "@/lib/utils";

const JosefinSans = Josefin_Sans({ subsets: ["latin"], 
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Meet Julie",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, JosefinSans.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
