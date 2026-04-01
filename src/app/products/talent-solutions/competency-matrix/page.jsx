import React from 'react';
import ProductComponent from '@/Components/pages/products/talent-solutions/competency-matrix/index';

export const metadata = {
    title: "Competency Matrix | Talent Solutions",
    description: "Visualize and manage workforce skills and competencies effectively with GapsToGrowth's Competency Matrix.",
    keywords: ["Competency Matrix", "Skills Gap Analysis", "Workforce Planning", "GapsToGrowth"],
    alternates: {
        canonical: '/products/talent-solutions/competency-matrix',
    },
    openGraph: {
        title: "Competency Matrix | Talent Solutions | GapsToGrowth",
        description: "Visualize and manage workforce skills and competencies effectively with GapsToGrowth's Competency Matrix.",
    }
};

export default function CompetencyMatrixPage() {
    return <ProductComponent />;
}



