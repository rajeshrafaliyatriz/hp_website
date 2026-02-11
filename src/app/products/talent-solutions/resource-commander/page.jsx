import ProductComponent from '@/Components/pages/products/talent-solutions/resource-commander';

export const metadata = {
  title: "Resource Commander | Talent Solutions",
  description: "Optimize resource allocation and project staffing with Scholar Clone's Resource Commander.",
  keywords: ["Resource Management", "Staffing Optimization", "Project Planning", "Scholar Clone"],
  alternates: {
    canonical: '/products/talent-solutions/resource-commander',
  },
  openGraph: {
    title: "Resource Commander | Talent Solutions | Scholar Clone",
    description: "Optimize resource allocation and project staffing with Scholar Clone's Resource Commander.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



