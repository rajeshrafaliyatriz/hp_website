/**
 * Robots.txt for ScholarClone HP
 * Production-optimized crawl rules
 */

import { BASE_URL } from "@/lib/seo";

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/private/',
                    '/test-banner/',
                ],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
