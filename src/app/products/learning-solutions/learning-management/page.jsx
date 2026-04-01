import ProductComponent from '@/Components/pages/products/learning-solutions/learning-management';

export const metadata = {
  title: "Learning Management System (LMS) | Learning Solutions",
  description: "Deliver, track, and manage training with GapsToGrowth's robust Learning Management System.",
  keywords: ["LMS", "Learning Management", "Corporate Training", "GapsToGrowth"],
  alternates: {
    canonical: '/products/learning-solutions/learning-management',
  },
  openGraph: {
    title: "Learning Management System (LMS) | Learning Solutions | GapsToGrowth",
    description: "Deliver, track, and manage training with GapsToGrowth's robust Learning Management System.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



