import { BlogsList } from "@/Components/blog/BlogsList";

export const metadata = {
    title: "Insights & Blog | Triz Innovation",
    description: "Insights, trends, and guides on Talent Management, Learning & Development, and HR Technology.",
};

async function getBlogs() {
    try {
        const res = await fetch(
            "https://erp.triz.co.in/lms_data?table=blogs&filters[status]=published&filters[type]=blog&filters[platform]=HP",
            { cache: 'no-store' }
        );
        
        if (!res.ok) {
            console.error("Failed to fetch blogs from ERP API");
            return [];
        }

        const json = await res.json();

        let data = [];
        if (Array.isArray(json.data)) {
            data = json.data;
        } else if (Array.isArray(json)) {
            data = json;
        } else if (Array.isArray(json.blogs)) {
            data = json.blogs;
        } else {
            console.warn("Unexpected data shape:", json);
        }

        const blogsWithFixedFields = data.map((item) => ({
            ...item,
            id: item.id || crypto.randomUUID(),
            author: typeof item.author === "string"
              ? { name: item.author }
              : {
                  name: item.author?.name || "Unknown Author",
                },
            date: item.created_at
              ? new Date(item.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown date",
            slug: item.slug || item.id,
        }));

        return blogsWithFixedFields;
    } catch (error) {
        console.error("Failed to sequence blogs:", error);
        return [];
    }
}

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <main className="min-h-screen pt-24 lg:pt-32 pb-10 bg-white">
            <BlogsList initialBlogs={blogs} />
        </main>
    );
}
