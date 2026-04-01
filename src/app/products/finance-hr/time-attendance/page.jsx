import ProductComponent from '@/Components/pages/products/finance-hr/time-attendance';

export const metadata = {
  title: "Time & Attendance | Finance & HR Solutions",
  description: "Automate time tracking and attendance management with GapsToGrowth's advanced HR solutions.",
  keywords: ["Time Attendance", "HR Solutions", "GapsToGrowth", "Workforce Management"],
  alternates: {
    canonical: '/products/finance-hr/time-attendance',
  },
  openGraph: {
    title: "Time & Attendance | Finance & HR Solutions | GapsToGrowth",
    description: "Automate time tracking and attendance management with GapsToGrowth's advanced HR solutions.",
  }
};

export default function Page() {
  return <ProductComponent />;
}



