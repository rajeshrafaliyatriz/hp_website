import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "@/Components/layout/navbar/Navbar";
import { Footer } from "@/Components/layout/footer/Footer";
import Script from "next/script";
import { BASE_URL, BUSINESS_CONFIG } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  preload: true,
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  preload: true,
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GapsToGrowth - We find, fix skill & competency gaps—role by role, task by task",
    template: "%s | GapsToGrowth"
  },
  description: "GapsToGrowth HP is a leading AI-powered University Management System (ERP) and Education ERP for universities, colleges, and K-12 schools in Himachal Pradesh. Comprehensive solutions for Talent Management, Learning & Development, Finance & HR, Integration, and Analytics. Transform your educational institution with intelligent automation.",
  keywords: [
    "University Management System",
    "Education ERP",
    "School ERP",
    "College ERP",
    "AI Education Platform",
    "Talent Management System",
    "Learning Management System",
    "LMS",
    "HRIS",
    "Human Resource Information System",
    "Student Information System",
    "SIS",
    "ERP for Education",
    "University ERP Software",
    "School Management Software",
    "Campus Management",
    "GapsToGrowth",
    "Himachal Pradesh",
    "HP",
    "AI in Education",
    "EdTech",
    "Educational Technology",
    "Higher Education ERP",
    "K-12 ERP"
  ],
  authors: [{ name: 'GapsToGrowth HP' }],
  creator: 'GapsToGrowth HP',
  publisher: 'GapsToGrowth HP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'GapsToGrowth HP | AI-Powered University Management System & Education ERP',
    description: 'Transform your educational institution with GapsToGrowth\'s comprehensive AI-powered ERP solutions for universities, colleges, and schools. Talent, Learning, Finance & HR.',
    url: BASE_URL,
    siteName: 'GapsToGrowth HP',
    locale: 'en_US',
    type: 'website',
    alternateLocale: 'en_IN',
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GapsToGrowth HP | AI-Powered University Management',
    description: 'Comprehensive AI-powered ERP solutions for universities, colleges, and schools. Transform education with intelligent automation.',
    creator: '@gapstogrowth',
    images: ['/assets/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // ⚠️ REQUIRES BUSINESS CONFIRMATION - Add actual verification codes:
    // google: 'google-site-verification-code', // TODO: Add Google verification code
    // yandex: 'yandex-verification-code', // TODO: Add Yandex verification code if needed
  },
  category: 'technology',
  classification: 'Education Software, ERP, AI Solutions',
  icons: {
    icon: '/assets/Logo.png?v=v3',
    shortcut: '/assets/Logo.png?v=v3',
    apple: '/assets/Logo.png?v=v3',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_CONFIG.name,
  legalName: BUSINESS_CONFIG.legalName,
  url: BASE_URL,
  logo: `${BASE_URL}/assets/Logo.png`,
  description: `${BUSINESS_CONFIG.name} provides AI-powered unified solutions for Talent Management, Learning & Development, Finance & HR, Integration, and Analytics for educational institutions across ${BUSINESS_CONFIG.address.addressRegion} and India.`,
  foundingDate: BUSINESS_CONFIG.foundingYear,
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_CONFIG.address.streetAddress,
    addressLocality: BUSINESS_CONFIG.address.addressLocality,
    addressRegion: BUSINESS_CONFIG.address.addressRegion,
    postalCode: BUSINESS_CONFIG.address.postalCode,
    addressCountry: BUSINESS_CONFIG.address.addressCountry
  },
  areaServed: {
    '@type': 'Country',
    name: BUSINESS_CONFIG.areaServed.country
  },
  serviceArea: [
    {
      '@type': 'State',
      name: BUSINESS_CONFIG.areaServed.states[0]
    },
    {
      '@type': 'Country',
      name: BUSINESS_CONFIG.areaServed.states[1]
    }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS_CONFIG.contactPoint.telephone,
    contactType: BUSINESS_CONFIG.contactPoint.contactType,
    areaServed: BUSINESS_CONFIG.contactPoint.areaServed,
    availableLanguage: BUSINESS_CONFIG.contactPoint.availableLanguage
  },
  sameAs: BUSINESS_CONFIG.sameAs,
  industry: ['Education Technology', 'Enterprise Software', 'Artificial Intelligence'],
  serviceType: ['Education ERP', 'Talent Management', 'Learning Management System', 'HR Software'],
  potentialAction: {
    '@type': 'ContactAction',
    name: 'Request Demo',
    target: `${BASE_URL}/contact`
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
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





