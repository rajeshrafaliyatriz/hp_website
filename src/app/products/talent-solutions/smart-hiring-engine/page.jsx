import ProductComponent from '@/Components/pages/products/talent-solutions/smart-hiring-engine';

export const metadata = {
  title: "Smart Hiring Engine | Talent Solutions",
  description: "Accelerate your recruitment process with AI-driven insights from GapsToGrowth's Smart Hiring Engine.",
  keywords: ["Smart Hiring", "AI Recruitment", "Talent Acquisition", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/smart-hiring-engine',
  },
  openGraph: {
    title: "Smart Hiring Engine | Talent Solutions | GapsToGrowth",
    description: "Accelerate your recruitment process with AI-driven insights from GapsToGrowth's Smart Hiring Engine.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



