export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/', '/api/'],
        },
        sitemap: 'https://hp.scholarclone.com/sitemap.xml',
    };
}
