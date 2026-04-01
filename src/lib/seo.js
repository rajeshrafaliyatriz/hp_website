/**
 * SEO Utility for Next.js App Router
 * Reusable functions for metadata generation
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://scholarclone.com';
const SITE_NAME = 'ScholarClone HP';

// ============================================
// BUSINESS IDENTITY CONFIG
// Requires business confirmation for accuracy
// ============================================

/**
 * Business identity configuration
 * ⚠️ FIELDS REQUIRING REAL BUSINESS DATA CONFIRMATION:
 * - organization.legalName: Verify official legal entity name
 * - address.streetAddress: Verify exact street address
 * - address.postalCode: Verify correct postal code  
 * - contactPoint.telephone: Verify phone number
 * - sameAs: Confirm all social media URLs
 * - verification: Add actual verification codes
 */
export const BUSINESS_CONFIG = {
    // Company details
    name: SITE_NAME,
    legalName: 'ScholarClone Pvt Ltd', // ⚠️ REQUIRES CONFIRMATION
    foundingYear: '2020',
    
    // Address - ⚠️ REQUIRES CONFIRMATION
    address: {
        streetAddress: 'Near Lift Road', // ⚠️ REQUIRES CONFIRMATION
        addressLocality: 'Shimla',
        addressRegion: 'Himachal Pradesh',
        postalCode: '395009', // ⚠️ REQUIRES CONFIRMATION  
        addressCountry: 'IN'
    },
    
    // Contact - ⚠️ REQUIRES CONFIRMATION
    contactPoint: {
        telephone: '+91 98241 54142', // ⚠️ REQUIRES CONFIRMATION
        contactType: 'sales',
        areaServed: ['IN', 'HP'],
        availableLanguage: ['en', 'hi']
    },
    
    // Social media - ⚠️ REQUIRES CONFIRMATION
    sameAs: [
        'https://www.linkedin.com/company/scholar-clone-pvt-ltd/', // ⚠️ REQUIRES CONFIRMATION
        'https://www.facebook.com/LMS.ScholarClone/', // ⚠️ REQUIRES CONFIRMATION
        'https://x.com/ScholarClone', // ⚠️ REQUIRES CONFIRMATION
        'https://www.instagram.com/scholarclone/' // ⚠️ REQUIRES CONFIRMATION
    ],
    
    // Service areas
    areaServed: {
        country: 'India',
        states: ['Himachal Pradesh', 'India']
    }
};

// Export for reuse across the application
export { BASE_URL };

/**
 * Generate basic page metadata
 */
export function generateMetadata({ title, description, keywords = [], options = {} }) {
    const { canonical, images, type = 'website', locale = 'en_US' } = options;

    return {
        title: title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI-Powered University Management System & Education ERP`,
        description: description || `${SITE_NAME} - AI-powered education management solutions for universities, colleges, and schools.`,
        keywords: [
            'University Management System',
            'Education ERP',
            'ScholarClone',
            'Himachal Pradesh',
            ...keywords
        ],
        alternates: {
            canonical: canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}/`,
        },
        openGraph: {
            title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
            description: description,
            url: canonical ? `${BASE_URL}${canonical}` : BASE_URL,
            siteName: SITE_NAME,
            locale,
            type,
            ...(images && { images }),
        },
        twitter: {
            card: 'summary_large_image',
            title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
            description: description,
            ...(images && { images }),
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate metadata for product/service pages
 */
export function generateProductMetadata({ name, description, path, options = {} }) {
    const { keywords = [], images } = options;

    return generateMetadata({
        title: name,
        description,
        keywords: [
            'Education ERP',
            'University Management',
            'AI Solutions',
            ...keywords
        ],
        options: {
            canonical: path,
            images,
            type: 'website',
        }
    });
}

/**
 * Generate canonical URL safely
 */
export function generateCanonical(path = '/') {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
}

/**
 * Generate JSON-LD schema for Organization with local SEO focus
 */
export function generateOrganizationSchema(overrides = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: BUSINESS_CONFIG.name,
        legalName: BUSINESS_CONFIG.legalName,
        url: BASE_URL,
        logo: `${BASE_URL}/assets/Logo.png`,
        description: `${SITE_NAME} provides AI-powered unified solutions for Talent Management, Learning & Development, Finance & HR, Integration, and Analytics for educational institutions across ${BUSINESS_CONFIG.address.addressRegion} and India.`,
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
        },
        ...overrides,
    };
}

/**
 * Generate FAQ schema
 */
export function generateFaqSchema(faqs = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: BASE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${BASE_URL}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(crumbs = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url
        }))
    };
}

/**
 * Generate Service schema for product pages
 */
export function generateServiceSchema({ name, description, category }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'Organization',
            name: BUSINESS_CONFIG.name,
            url: BASE_URL
        },
        areaServed: BUSINESS_CONFIG.areaServed.states,
        serviceType: category,
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            priceRange: 'Contact for pricing'
        }
    };
}

/**
 * Generate Article schema for guide pages
 */
export function generateArticleSchema({ title, description, publishDate, author }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: publishDate,
        author: {
            '@type': 'Organization',
            name: author || BUSINESS_CONFIG.name
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_CONFIG.name,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/assets/Logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': BASE_URL
        }
    };
}

/**
 * Default metadata for simple pages
 */
export const defaultMetadata = generateMetadata({});
