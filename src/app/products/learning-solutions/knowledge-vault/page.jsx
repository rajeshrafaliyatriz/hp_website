import ProductComponent from '@/Components/pages/products/learning-solutions/knowledge-vault';

export const metadata = {
  title: "Knowledge Vault | Learning Solutions",
  description: "Centralize your organizational knowledge and resources in a secure, searchable Knowledge Vault.",
  keywords: ["Knowledge Management", "LMS", "Document Repository", "GapsToGrowth"],
  alternates: {
    canonical: '/products/learning-solutions/knowledge-vault',
  },
  openGraph: {
    title: "Knowledge Vault | Learning Solutions | GapsToGrowth",
    description: "Centralize your organizational knowledge and resources in a secure, searchable Knowledge Vault.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



