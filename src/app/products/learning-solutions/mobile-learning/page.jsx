import ProductComponent from '@/Components/pages/products/learning-solutions/mobile-learning';

export const metadata = {
  title: "Mobile Learning | Learning Solutions",
  description: "Empower your workforce with on-the-go learning accessible from any device with GapsToGrowth.",
  keywords: ["Mobile Learning", "mLearning", "Remote Training", "GapsToGrowth"],
  alternates: {
    canonical: '/products/learning-solutions/mobile-learning',
  },
  openGraph: {
    title: "Mobile Learning | Learning Solutions | GapsToGrowth",
    description: "Empower your workforce with on-the-go learning accessible from any device with GapsToGrowth.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



