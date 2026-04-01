import { notFound } from "next/navigation";
import Link from "next/link";
import { AnimatedArticle } from "@/Components/blog/AnimatedArticle";
import { User } from "lucide-react";

async function getBlogs() {
  try {
    const res = await fetch(
      "https://erp.triz.co.in/lms_data?table=blogs&filters[status]=published&filters[type]=blog&filters[platform]=HP",
      { cache: 'no-store' }
    );
    if (!res.ok) return [];
    
    const json = await res.json();
    let data = [];
    if (Array.isArray(json.data)) data = json.data;
    else if (Array.isArray(json)) data = json;
    else if (Array.isArray(json.blogs)) data = json.blogs;

    return data.map((item) => ({
      ...item,
      id: item.id || crypto.randomUUID(),
      author: typeof item.author === "string"
        ? { name: item.author }
        : {
            name: item.author?.name || "Unknown Author",
          },
      date: item.created_at
        ? new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric",
          })
        : "Unknown date",
      slug: item.slug || item.id?.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch blog list:", error);
    return [];
  }
}

async function getBlogByIdOrSlug(id) {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === id || b.id.toString() === id);
}

export async function generateMetadata({ params }) {
  const parameters = await params;
  const id = parameters.id;
  
  const blog = await getBlogByIdOrSlug(id);

  if (!blog) {
    return {
      title: "Blog Not Found | Triz Innovation"
    };
  }

  const plainTextDescription = blog.description 
    ? blog.description.replace(/<[^>]+>/g, '').slice(0, 160)
    : "Read our latest blog.";

  return {
    title: `${blog.title} | Triz Innovation Blog`,
    description: plainTextDescription,
    openGraph: {
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const parameters = await params;
  const id = parameters.id;
  
  const blog = await getBlogByIdOrSlug(id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-[900px] mx-auto mb-20 bg-white">
      <AnimatedArticle>
        <div className="flex justify-between items-start mb-8 w-full">
          <Link href="/blog" className="group flex items-center text-slate-500 hover:text-[#76B900] transition-colors font-medium">
            <span className="mr-2 transform transition-transform group-hover:-translate-x-1">&larr;</span> 
            Back to all blogs
          </Link>
        </div>

        <div className="w-full pb-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              {blog.title}
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-12 pb-8 border-b border-slate-200">
             <div className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-100 ring-2 ring-slate-100 shadow-sm text-slate-500">
               <User size={24} />
             </div>
             <div className="text-left">
               <p className="font-bold text-slate-800 text-lg">{blog.author.name}</p>
               <p className="text-sm text-slate-500 font-medium">
                 {blog.date} {blog.readTime && <span className="mx-1.5">•</span>} {blog.readTime && <span>{blog.readTime}</span>}
               </p>
             </div>
          </div>

          {blog.image && (
            <div className="mb-14 w-full flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5 max-h-[550px] w-full relative">
                <img 
                   src={blog.image} 
                   alt={blog.title} 
                   className="w-full h-full object-cover shrink-0 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}

          <div 
            className="prose prose-lg prose-slate max-w-none w-full leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {blog.additionalImage && (
            <div className="mt-16 w-full flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-900/5">
                <img 
                   src={blog.additionalImage} 
                   alt="Additional content preview" 
                   className="w-full max-h-[550px] object-cover" 
                />
              </div>
            </div>
          )}
        </div>
      </AnimatedArticle>
    </main>
  );
}
