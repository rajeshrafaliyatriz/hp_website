import ProductComponent from '@/Components/pages/products/talent-solutions/skill-health-scan';

export const metadata = {
  title: "Skill Health Scan | Talent Solutions",
  description: "Assess the health of your organization's skill set with GapsToGrowth's Skill Health Scan.",
  keywords: ["Skill Health", "Workforce Analytics", "Skill Assessment", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/skill-health-scan',
  },
  openGraph: {
    title: "Skill Health Scan | Talent Solutions | GapsToGrowth",
    description: "Assess the health of your organization's skill set with GapsToGrowth's Skill Health Scan.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



