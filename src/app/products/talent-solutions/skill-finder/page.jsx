import ProductComponent from '@/Components/pages/products/talent-solutions/skill-finder';

export const metadata = {
  title: "Skill Finder | Talent Solutions",
  description: "Instantly locate the right skills within your workforce using GapsToGrowth's Skill Finder.",
  keywords: ["Skill Finder", "Internal Mobility", "Talent Search", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/skill-finder',
  },
  openGraph: {
    title: "Skill Finder | Talent Solutions | GapsToGrowth",
    description: "Instantly locate the right skills within your workforce using GapsToGrowth's Skill Finder.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



