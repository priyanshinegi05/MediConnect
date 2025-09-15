import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { LoadingProvider } from "@/components/GlobalLoadingProvider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MediConnect | Healthcare Patient Management System",
  description:
    "MediConnect is a full-stack healthcare patient management system for clinics and hospitals. Streamline patient registration, appointment scheduling, medical records, notifications, and file uploads with a modern, secure, and responsive Next.js app.",
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://arnob-mahmud.vercel.app/",
    },
  ],
  keywords: [
    "HealthCare",
    "Patient Management",
    "Appointment",
    "Twilio",
    "Appwrite",
    "Sentry",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Shadcn-UI",
    "Zod",
    "Admin Dashboard",
    "File Upload",
    "Responsive Design",
    "Medical App",
    "Full Stack",
    "Clinic",
    "Hospital",
    "Database",
    "Form Validation",
    "React",
  ],
  icons: {
    icon: "/assets/icons/logo-icon.svg",
    shortcut: "/favicon.ico",
    apple: "/assets/icons/logo-icon.svg",
  },
  openGraph: {
    title: "MediConnect | Healthcare Patient Management System",
    description:
      "Modern healthcare app for clinics and hospitals. Register patients, schedule appointments, manage records, and more.",
    url: "https://example.com/",
    images: [
      {
        url: "/assets/icons/logo-icon.svg",
        width: 120,
        height: 120,
        alt: "MediConnect Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MediConnect | Healthcare Patient Management System",
    description:
      "Modern healthcare app for clinics and hospitals. Register patients, schedule appointments, manage records, and more.",
    images: ["/assets/icons/logo-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
