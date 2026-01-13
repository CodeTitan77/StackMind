import type { Metadata } from "next";
import localFont from "next/font/local";

import { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from '../components/navigation/index';
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


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
  const session= await auth();


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
            <SessionProvider session={session}>
          <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
           
            {children}
             <Toaster richColors position="top-right"/>
            </ThemeProvider>
               </SessionProvider>
         
        </body>
     
       
     
    </html>
  );
};

export default RootLayout;