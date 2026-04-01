import ProductComponent from '@/Components/pages/products/finance-hr/payroll-management';

export const metadata = {
  title: "Payroll Management | Finance & HR Solutions",
  description: "Simplify payroll processing with automated calculations and tax compliance using GapsToGrowth.",
  keywords: ["Payroll Management", "Automated Payroll", "HR Finance", "GapsToGrowth"],
  alternates: {
    canonical: '/products/finance-hr/payroll-management',
  },
  openGraph: {
    title: "Payroll Management | Finance & HR Solutions | GapsToGrowth",
    description: "Simplify payroll processing with automated calculations and tax compliance using GapsToGrowth.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



