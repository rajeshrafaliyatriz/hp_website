import React from 'react';
import ProductComponent from '@/Components/pages/products/learning-solutions/build-your-training/index';

export const metadata = {
    title: "Build Your Training | Learning Solutions",
    description: "Create custom training programs tailored to your organization's needs with Scholar Clone.",
    keywords: ["Custom Training", "Course Builder", "Instructional Design", "Scholar Clone"],
    alternates: {
        canonical: '/products/learning-solutions/build-your-training',
    },
    openGraph: {
        title: "Build Your Training | Learning Solutions | Scholar Clone",
        description: "Create custom training programs tailored to your organization's needs with Scholar Clone.",
    }
};

export default function BuildYourTrainingPage() {
    return <ProductComponent />;
}



