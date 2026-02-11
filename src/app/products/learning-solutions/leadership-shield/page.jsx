import ProductComponent from '@/Components/pages/products/learning-solutions/leadership-shield';

export const metadata = {
  title: "Leadership Shield | Learning Solutions",
  description: "Develop strong leaders and protect your organization's future with Scholar Clone's Leadership Shield.",
  keywords: ["Leadership Development", "Executive Training", "Succession Planning", "Scholar Clone"],
  alternates: {
    canonical: '/products/learning-solutions/leadership-shield',
  },
  openGraph: {
    title: "Leadership Shield | Learning Solutions | Scholar Clone",
    description: "Develop strong leaders and protect your organization's future with Scholar Clone's Leadership Shield.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



