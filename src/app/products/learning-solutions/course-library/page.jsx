import React from 'react';
import ProductComponent from '@/Components/pages/products/learning-solutions/course-library/index';

export const metadata = {
    title: "Course Library | Learning Solutions",
    description: "Access a vast library of pre-built courses covering various industries and skills with GapsToGrowth.",
    keywords: ["Course Library", "eLearning Content", "Training Catalog", "GapsToGrowth"],
    alternates: {
        canonical: '/products/learning-solutions/course-library',
    },
    openGraph: {
        title: "Course Library | Learning Solutions | GapsToGrowth",
        description: "Access a vast library of pre-built courses covering various industries and skills with GapsToGrowth.",
    }
};

export default function CourseLibraryPage() {
    return <ProductComponent />;
}



