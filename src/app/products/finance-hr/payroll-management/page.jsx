import ProductComponent from '@/Components/pages/products/finance-hr/payroll-management';

export const metadata = {
  title: "Payroll Management | Finance & HR Solutions",
  description: "Simplify payroll processing with automated calculations and tax compliance using Scholar Clone.",
  keywords: ["Payroll Management", "Automated Payroll", "HR Finance", "Scholar Clone"],
  alternates: {
    canonical: '/products/finance-hr/payroll-management',
  },
  openGraph: {
    title: "Payroll Management | Finance & HR Solutions | Scholar Clone",
    description: "Simplify payroll processing with automated calculations and tax compliance using Scholar Clone.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



