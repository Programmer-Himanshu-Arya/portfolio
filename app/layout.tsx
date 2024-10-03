import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu's Portfolio",
  description:
    "Welcome to my portfolio! I am Himanshu, a passionate web developer specializing in the MERN stack, Next.js, Framer Motion, and Shadcn. Explore my projects showcasing dynamic, responsive, and visually captivating web applications. Let’s build something amazing together!. Feel free to tweak it to better match your personal style or add any additional technologies or skills you want to highlight. How does that sound?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
