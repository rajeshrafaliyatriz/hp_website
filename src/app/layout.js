import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "@/Components/layout/navbar/Navbar";
import { Footer } from "@/Components/layout/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://hp.gapstogrowth.com'),
  title: {
    default: "GapsToGrowth HP | Leading AI-Powered University Management System",
    template: "%s | GapsToGrowth HP"
  },
  description: "GapsToGrowth HP offers comprehensive AI-powered solutions for talent management, learning, finance, and HR. Empower your institution with our unified platform.",
  keywords: ["University Management System", "AI Education Platform", "Talent Management", "LMS", "HRIS", "GapsToGrowth", "Himachal Pradesh"],
  openGraph: {
    title: 'GapsToGrowth HP | AI-Powered University Management',
    description: 'Unified solutions for Talent, Learning, Finance & HR. Transform your educational institution with GapsToGrowth.',
    url: 'https://hp.gapstogrowth.com',
    siteName: 'GapsToGrowth HP',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GapsToGrowth HP | AI-Powered University Management',
    description: 'Unified solutions for Talent, Learning, Finance & HR. Transform your educational institution with GapsToGrowth.',
  },
  icons: {
    icon: '/assets/Logo.png?v=v2',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GapsToGrowth HP',
  url: 'https://hp.gapstogrowth.com',
  logo: 'https://hp.gapstogrowth.com/assets/Logo.png?v=v2',
  description: 'GapsToGrowth HP provides AI-powered unified solutions for Talent Management, Learning & Development, Finance & HR, Integration, and Analytics.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-1234567890', // Replace with actual number if available
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'en'
  },
  sameAs: [
    'https://www.linkedin.com/company/gapstogrowth',
    'https://twitter.com/gapstogrowth',
    'https://www.facebook.com/gapstogrowth'
    // Add other social profiles here
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}





