
import PartnersHero from '@/Components/pages/company/PartnersHero';
import PartnerGrid from '@/Components/pages/company/PartnerGrid';

export const metadata = {
    title: "Partners",
    description: "Partner with GapsToGrowth to expand your reach in the education sector. Explore our partnership programs for schools, higher education institutes, and corporations.",
    openGraph: {
        title: "Become a Partner - GapsToGrowth",
        description: "Join our partner network and grow your education business.",
        images: ['/Images/Hero_Partners.png'],
    },
};

export default function PartnersPage() {
    return (
        <main>
            <PartnersHero />
            <PartnerGrid />
        </main>
    );
}




