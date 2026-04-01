import ProductComponent from '@/Components/pages/products/analytics-solutions/team-analytics';

export const metadata = {
  title: "Team Analytics | Analytics Solutions",
  description: "Analyze team dynamics and performance metrics with GapsToGrowth's Team Analytics.",
  keywords: ["Team Analytics", "Performance Metrics", "Team Dynamics", "GapsToGrowth"],
  alternates: {
    canonical: '/products/analytics-solutions/team-analytics',
  },
  openGraph: {
    title: "Team Analytics | Analytics Solutions | GapsToGrowth",
    description: "Analyze team dynamics and performance metrics with GapsToGrowth's Team Analytics.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



