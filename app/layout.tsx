import type { Metadata } from "next";
import localFont from "next/font/local";

import { ReactNode } from "react";

import "./globals.css";


const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "StackMind",
  description:
    "A modern developer community platform enhanced with AI to provide instant, accurate answers to coding questions. Where human expertise meets artificial intelligence for smarter problem-solving",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
         
            {children}
         
        </body>
     
    </html>
  );
};

export default RootLayout;