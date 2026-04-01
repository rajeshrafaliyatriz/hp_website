import ProductComponent from '@/Components/pages/products/learning-solutions/learning-paths';

export const metadata = {
  title: "Learning Paths | Learning Solutions",
  description: "Curate personalized learning journeys for your employees with GapsToGrowth's Learning Paths.",
  keywords: ["Learning Paths", "Personalized Learning", "Employee Development", "GapsToGrowth"],
  alternates: {
    canonical: '/products/learning-solutions/learning-paths',
  },
  openGraph: {
    title: "Learning Paths | Learning Solutions | GapsToGrowth",
    description: "Curate personalized learning journeys for your employees with GapsToGrowth's Learning Paths.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



