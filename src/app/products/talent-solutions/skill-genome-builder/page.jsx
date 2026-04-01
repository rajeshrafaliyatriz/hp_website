import ProductComponent from '@/Components/pages/products/talent-solutions/skill-genome-builder';

export const metadata = {
  title: "Skill Genome Builder | Talent Solutions",
  description: "Construct a comprehensive skill framework for your organization with GapsToGrowth's Skill Genome Builder.",
  keywords: ["Skill Genome", "Skill Framework", "Competency Mapping", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/skill-genome-builder',
  },
  openGraph: {
    title: "Skill Genome Builder | Talent Solutions | GapsToGrowth",
    description: "Construct a comprehensive skill framework for your organization with GapsToGrowth's Skill Genome Builder.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



