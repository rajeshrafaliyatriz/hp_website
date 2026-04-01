import React from 'react';
import ProductComponent from '@/Components/pages/products/learning-solutions/build-your-training/index';

export const metadata = {
    title: "Build Your Training | Learning Solutions",
    description: "Create custom training programs tailored to your organization's needs with GapsToGrowth.",
    keywords: ["Custom Training", "Course Builder", "Instructional Design", "GapsToGrowth"],
    alternates: {
        canonical: '/products/learning-solutions/build-your-training',
    },
    openGraph: {
        title: "Build Your Training | Learning Solutions | GapsToGrowth",
        description: "Create custom training programs tailored to your organization's needs with GapsToGrowth.",
    }
};

export default function BuildYourTrainingPage() {
    return <ProductComponent />;
}



