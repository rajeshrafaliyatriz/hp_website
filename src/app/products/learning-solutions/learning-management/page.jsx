import ProductComponent from '@/Components/pages/products/learning-solutions/learning-management';

export const metadata = {
  title: "Learning Management System (LMS) | Learning Solutions",
  description: "Deliver, track, and manage training with Scholar Clone's robust Learning Management System.",
  keywords: ["LMS", "Learning Management", "Corporate Training", "Scholar Clone"],
  alternates: {
    canonical: '/products/learning-solutions/learning-management',
  },
  openGraph: {
    title: "Learning Management System (LMS) | Learning Solutions | Scholar Clone",
    description: "Deliver, track, and manage training with Scholar Clone's robust Learning Management System.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



