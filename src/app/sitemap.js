/**
 * Sitemap for GapsToGrowth HP
 * Production-optimized with correct priority/change frequency
 */

import { BASE_URL } from "@/lib/seo";

export default async function sitemap() {
    const baseUrl = BASE_URL;
    const currentDate = new Date();

    // Static routes - highest priority pages
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0, // Homepage - highest priority
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Company pages
        {
            url: `${baseUrl}/company/careers`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/company/partners`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // Product category pages - high priority
    const productCategoryRoutes = [
        '/products/talent-solutions',
        '/products/learning-solutions',
        '/products/finance-hr',
        '/products/integration',
        '/products/analytics-solutions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Product sub-pages - medium priority
    const productSubPageRoutes = [
        // Talent Solutions (14 sub-pages)
        '/products/talent-solutions/talent-management',
        '/products/talent-solutions/smart-hiring-engine',
        '/products/talent-solutions/skills-validation-studio',
        '/products/talent-solutions/skill-management',
        '/products/talent-solutions/skill-health-scan',
        '/products/talent-solutions/skill-genome-builder',
        '/products/talent-solutions/skill-finder',
        '/products/talent-solutions/resource-commander',
        '/products/talent-solutions/seamless-onboarding',
        '/products/talent-solutions/organization-management',
        '/products/talent-solutions/performance-enablement',
        '/products/talent-solutions/growth-predictor',
        '/products/talent-solutions/competency-matrix',
        '/products/talent-solutions/career-pathing',
        // Learning Solutions (8 sub-pages)
        '/products/learning-solutions/learning-management',
        '/products/learning-solutions/mobile-learning',
        '/products/learning-solutions/learning-paths',
        '/products/learning-solutions/course-library',
        '/products/learning-solutions/knowledge-vault',
        '/products/learning-solutions/build-your-training',
        '/products/learning-solutions/leadership-shield',
        '/products/learning-solutions/workforce-planning',
        // Finance & HR (5 sub-pages)
        '/products/finance-hr/payroll-management',
        '/products/finance-hr/time-attendance',
        '/products/finance-hr/leave-management',
        '/products/finance-hr/compliance-management',
        '/products/finance-hr/petty-cash-expense-management',
        // Integration (2 sub-pages)
        '/products/integration/system-integration',
        '/products/integration/hrit-solutions',
        // Analytics (2 sub-pages)
        '/products/analytics-solutions/team-analytics',
        '/products/analytics-solutions/learning-analytics',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Guide pages - informational content
    const guideRoutes = [
        '/guides/learning-analytics-student-outcomes',
        '/guides/talent-management-skill-development-educational-institutions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...productCategoryRoutes,
        ...productSubPageRoutes,
        ...guideRoutes,
    ];
}
