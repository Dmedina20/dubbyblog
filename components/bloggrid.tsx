import BlogCard from "./blogcard";
import blogs from "../app/db/blogs.json";
import Link from "next/link";
export const BlogGrid = () => {
  return (
    <div className="min-h-[50vh] border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
        {blogs.map((blogItem, index) => (
          <Link key={index} href={`/blog/${blogItem.id}`}>
            <BlogCard
              id={blogItem.id}
              tag={blogItem.tag}
              authorName={blogItem.authorName}
              title={blogItem.title}
              description={blogItem.description}
              date={blogItem.date}
              imageUrl={blogItem.imageUrl}
              authorImg={blogItem.authorImg}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
