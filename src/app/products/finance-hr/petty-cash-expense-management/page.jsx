import ProductComponent from '@/Components/pages/products/finance-hr/petty-cash-expense-management';

export const metadata = {
  title: "Petty Cash & Expense Management | Finance & HR Solutions",
  description: "Track petty cash and manage business expenses efficiently with GapsToGrowth's financial tools.",
  keywords: ["Petty Cash", "Expense Management", "Financial Tools", "GapsToGrowth"],
  alternates: {
    canonical: '/products/finance-hr/petty-cash-expense-management',
  },
  openGraph: {
    title: "Petty Cash & Expense Management | Finance & HR Solutions | GapsToGrowth",
    description: "Track petty cash and manage business expenses efficiently with GapsToGrowth's financial tools.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



