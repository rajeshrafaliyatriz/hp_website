import ProductComponent from '@/Components/pages/products/talent-solutions/skill-management';

export const metadata = {
  title: "Skill Management | Talent Solutions",
  description: "Identify key skills and bridge gaps with GapsToGrowth's comprehensive Skill Management system.",
  keywords: ["Skill Management", "Upskilling", "Reskilling", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/skill-management',
  },
  openGraph: {
    title: "Skill Management | Talent Solutions | GapsToGrowth",
    description: "Identify key skills and bridge gaps with GapsToGrowth's comprehensive Skill Management system.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



