import ProductComponent from '@/Components/pages/products/talent-solutions/skill-management';

export const metadata = {
  title: "Skill Management | Talent Solutions",
  description: "Identify key skills and bridge gaps with Scholar Clone's comprehensive Skill Management system.",
  keywords: ["Skill Management", "Upskilling", "Reskilling", "Scholar Clone"],
  alternates: {
    canonical: '/products/talent-solutions/skill-management',
  },
  openGraph: {
    title: "Skill Management | Talent Solutions | Scholar Clone",
    description: "Identify key skills and bridge gaps with Scholar Clone's comprehensive Skill Management system.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



