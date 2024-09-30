import BlogCard from "@/components/blog/blogCard";
import React from "react";

interface Blog {
  image_url: string;
  id: number;
  blog_title: string;
  tags: string;
  created_at: string;
}

export default function Articles({articles}: {articles: Blog[]}) {


  return (
    <div className="w-full  grid grid-col-1 lg:grid-cols-2 gap-16 justify-between">
      {articles.map((article: any) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
}
