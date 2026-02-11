import ProductComponent from '@/Components/pages/products/finance-hr/leave-management';

export const metadata = {
  title: "Leave Management | Finance & HR Solutions",
  description: "Streamline leave requests and approval workflows with Scholar Clone's Leave Management system.",
  keywords: ["Leave Management", "Employee Leave", "HR Automation", "Scholar Clone"],
  alternates: {
    canonical: '/products/finance-hr/leave-management',
  },
  openGraph: {
    title: "Leave Management | Finance & HR Solutions | Scholar Clone",
    description: "Streamline leave requests and approval workflows with Scholar Clone's Leave Management system.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



