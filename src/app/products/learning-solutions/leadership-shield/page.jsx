import ProductComponent from '@/Components/pages/products/learning-solutions/leadership-shield';

export const metadata = {
  title: "Leadership Shield | Learning Solutions",
  description: "Develop strong leaders and protect your organization's future with GapsToGrowth's Leadership Shield.",
  keywords: ["Leadership Development", "Executive Training", "Succession Planning", "GapsToGrowth"],
  alternates: {
    canonical: '/products/learning-solutions/leadership-shield',
  },
  openGraph: {
    title: "Leadership Shield | Learning Solutions | GapsToGrowth",
    description: "Develop strong leaders and protect your organization's future with GapsToGrowth's Leadership Shield.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



