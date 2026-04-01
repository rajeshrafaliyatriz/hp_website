import ProductComponent from '@/Components/pages/products/integration/hrit-solutions';

export const metadata = {
  title: "HRIT Solutions | Integration Solutions",
  description: "Optimize your HR IT infrastructure with GapsToGrowth's specialized HRIT solutions.",
  keywords: ["HRIT Solutions", "HR Technology", "IT Infrastructure", "GapsToGrowth"],
  alternates: {
    canonical: '/products/integration/hrit-solutions',
  },
  openGraph: {
    title: "HRIT Solutions | Integration Solutions | GapsToGrowth",
    description: "Optimize your HR IT infrastructure with GapsToGrowth's specialized HRIT solutions.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



