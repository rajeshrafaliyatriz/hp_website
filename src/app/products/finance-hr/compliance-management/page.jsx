import React from 'react';
import ProductComponent from '@/Components/pages/products/finance-hr/compliance-management/index';

export const metadata = {
    title: "Compliance Management | Finance & HR Solutions",
    description: "Ensure regulatory compliance and manage risk effectively with Scholar Clone's Compliance Management tools.",
    keywords: ["Compliance Management", "Risk Management", "HR Compliance", "Scholar Clone"],
    alternates: {
        canonical: '/products/finance-hr/compliance-management',
    },
    openGraph: {
        title: "Compliance Management | Finance & HR Solutions | Scholar Clone",
        description: "Ensure regulatory compliance and manage risk effectively with Scholar Clone's Compliance Management tools.",
    }
};

export default function ComplianceManagementPage() {
    return <ProductComponent />;
}



