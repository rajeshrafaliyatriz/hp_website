import ProductComponent from '@/Components/pages/products/learning-solutions/learning-paths';

export const metadata = {
  title: "Learning Paths | Learning Solutions",
  description: "Curate personalized learning journeys for your employees with Scholar Clone's Learning Paths.",
  keywords: ["Learning Paths", "Personalized Learning", "Employee Development", "Scholar Clone"],
  alternates: {
    canonical: '/products/learning-solutions/learning-paths',
  },
  openGraph: {
    title: "Learning Paths | Learning Solutions | Scholar Clone",
    description: "Curate personalized learning journeys for your employees with Scholar Clone's Learning Paths.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



