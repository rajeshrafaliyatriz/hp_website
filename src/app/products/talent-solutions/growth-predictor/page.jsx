import React from 'react';
import ProductComponent from '@/Components/pages/products/talent-solutions/growth-predictor/index';

export const metadata = {
    title: "Growth Predictor | Talent Solutions",
    description: "Predict future workforce trends and needs with GapsToGrowth's AI-powered Growth Predictor.",
    keywords: ["Growth Predictor", "Workforce Forecasting", "AI HR", "GapsToGrowth"],
    alternates: {
        canonical: '/products/talent-solutions/growth-predictor',
    },
    openGraph: {
        title: "Growth Predictor | Talent Solutions | GapsToGrowth",
        description: "Predict future workforce trends and needs with GapsToGrowth's AI-powered Growth Predictor.",
    }
};

export default function GrowthPredictorPage() {
    return <ProductComponent />;
}



