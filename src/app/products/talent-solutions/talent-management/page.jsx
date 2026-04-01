import ProductComponent from '@/Components/pages/products/talent-solutions/talent-management';

export const metadata = {
  title: "Talent Management | Talent Solutions",
  description: "Holistic talent management strategies to nurture and retain top talent with GapsToGrowth.",
  keywords: ["Talent Management", "Employee Retention", "HR Strategy", "GapsToGrowth"],
  alternates: {
    canonical: '/products/talent-solutions/talent-management',
  },
  openGraph: {
    title: "Talent Management | Talent Solutions | GapsToGrowth",
    description: "Holistic talent management strategies to nurture and retain top talent with GapsToGrowth.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



