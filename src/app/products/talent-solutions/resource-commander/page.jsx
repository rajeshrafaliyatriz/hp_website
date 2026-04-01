import ProductComponent from '@/Components/pages/products/talent-solutions/resource-commander';

export const metadata = {
  title: "Resource Commander | Talent Solutions",
  description: "Optimize resource allocation and project staffing with GapsToGrowth's Resource Commander.",
  keywords: ["Resource Management", "Staffing Optimization", "Project Planning", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/resource-commander',
  },
  openGraph: {
    title: "Resource Commander | Talent Solutions | GapsToGrowth",
    description: "Optimize resource allocation and project staffing with GapsToGrowth's Resource Commander.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



