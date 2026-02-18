import { PRODUCTS_DROPDOWN_DATA } from '@/lib/data';

export default async function sitemap() {
    const baseUrl = 'https://hp.scholarclone.com';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/products/talent-solutions',
        '/products/learning-solutions',
        '/products/finance-hr',
        '/products/integration',
        '/products/analytics-solutions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    }));

    // Dynamic product routes from PRODUCTS_DROPDOWN_DATA
    const productRoutes = [];
    PRODUCTS_DROPDOWN_DATA.forEach((category) => {
        category.products.forEach((product) => {
            productRoutes.push({
                url: `${baseUrl}${product.href}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        });
    });

    return [...staticRoutes, ...productRoutes];
}
