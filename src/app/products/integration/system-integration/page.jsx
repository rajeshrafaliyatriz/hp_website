import ProductComponent from '@/Components/pages/products/integration/system-integration';

export const metadata = {
  title: "System Integration | Integration Solutions",
  description: "Seamlessly integrate your existing systems with GapsToGrowth for a unified workflow.",
  keywords: ["System Integration", "API Integration", "Data Sync", "GapsToGrowth"],
  alternates: {
    canonical: '/products/integration/system-integration',
  },
  openGraph: {
    title: "System Integration | Integration Solutions | GapsToGrowth",
    description: "Seamlessly integrate your existing systems with GapsToGrowth for a unified workflow.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



