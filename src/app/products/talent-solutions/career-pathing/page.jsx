import React from 'react';
import ProductComponent from '@/Components/pages/products/talent-solutions/career-pathing/index';

export const metadata = {
    title: "Career Pathing | Talent Solutions",
    description: "Map out clear career progression paths for your employees with GapsToGrowth's Career Pathing tools.",
    keywords: ["Career Pathing", "Employee Growth", "Talent Development", "GapsToGrowth"],
    alternates: {
        canonical: '/products/talent-solutions/career-pathing',
    },
    openGraph: {
        title: "Career Pathing | Talent Solutions | GapsToGrowth",
        description: "Map out clear career progression paths for your employees with GapsToGrowth's Career Pathing tools.",
    }
};

export default function CareerPathingPage() {
    return <ProductComponent />;
}



