import TalentContent from "./TalentContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";

export const metadata = {
    title: "Talent Solutions | AI-Powered HR & Recruitment | ScholarClone HP",
    description: "Transform your workforce with ScholarClone's AI-driven Talent Solutions. Features Smart Hiring, Competency Matrix, and Skill Management for modern institutions.",
    keywords: ["Talent Management System", "AI Recruitment", "HRMS Himachal", "Skill Management Software", "Competency Mapping Tool"],
    alternates: {
        canonical: 'https://hp.scholarclone.com/products/talent-solutions',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "What is ScholarClone Talent Solutions?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "ScholarClone Talent Solutions is a comprehensive suite of tools designed to manage the entire employee lifecycle, from AI-driven recruitment to performance enablement and succession planning."
        }
    }, {
        "@type": "Question",
        "name": "How does the Smart Hiring Engine work?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Smart Hiring Engine uses AI to parse resumes, rank candidates based on job descriptions, and automate interview scheduling, significantly reducing time-to-hire."
        }
    }, {
        "@type": "Question",
        "name": "Can I track employee skills with this platform?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Skill Management and Competency Matrix modules allow you to map, track, and validate organizational skills and identify gaps for targeted training."
        }
    }]
};

const TalentSolutionsPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <TalentContent />
        </>
    );
};

export default TalentSolutionsPage;



