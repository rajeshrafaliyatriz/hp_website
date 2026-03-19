import ClientFaqPage from "./ClientFaqPage";

export const metadata = {
  title: "FAQ | Frequently Asked Questions",
  description: "Find answers to common questions about ScholarClone HP's Education ERP solutions, including Talent Management, Learning Solutions, Finance & HR, and more.",
  keywords: ["FAQ", "Frequently Asked Questions", "Education ERP", "University Management", "Talent Solutions", "Learning Management"],
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <ClientFaqPage />
  );
}
