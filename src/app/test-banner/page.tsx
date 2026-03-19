import AnalysisHeroBanner from "@/Components/ui/analysis-hero-banner";

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function TestBannerPage() {
    return (
        <div className="min-h-screen bg-black">
            <AnalysisHeroBanner />
        </div>
    );
}
