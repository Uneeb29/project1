import Layout from "@/components/baselayout/layout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import blogData from "@/data/blog";
import Head from "next/head";
import AppointmentButton from "@/components/button";
import Image from "next/image";

interface BlogPost {
  id: number;
  blog_title: string;
  image_url: string;
  tags: string;
  created_at: string;
  meta: string;
  blog_content: string;
  buttonText?: string;
  youtube?: string;
  buttonText2?: string;
}

export default function Index() {
  const { query } = useRouter();
  const [blog, setBlog] = useState<BlogPost | undefined | null>(null);

  useEffect(() => {
    async function getBlog() {
      try {
        const blogId = query.id as string;
        const blog = blogData.find(
          (post: BlogPost) => post.id === parseInt(blogId, 10)
        );
        setBlog(blog);
      } catch (error) {
        console.error(error);
      }
    }

    if (query.id) {
      getBlog();
    }
  }, [query]);
  console.log(blog);
  return (
    <Layout title={blog?.blog_title} meta={blog?.meta}>
      <div className="container mx-auto p-4 bg-white ">
        <Head>
          <title>{blog?.blog_title}</title>
          <meta name="description" content={blog?.meta} />
        </Head>
        {blog ? (
          <div className="text-black flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl font-bold mb-4">{blog.blog_title}</h1>
            {blog.image_url && (
              <Image
                src={blog.image_url}
                alt={blog.blog_title}
                width={1000}
                height={1000}
                className=" mb-4 rounded-lg shadow-sm"
                loading='eager' 
              />
            )}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />
            <div className="w-full flex flex-col justify-center items-center mt-4">
              {blog.buttonText && (
                <div className="flex flex-row justify-center items-center w-full gap-10">
                  <AppointmentButton text={blog.buttonText?.toUpperCase()} />
                  {blog.buttonText2 && (
                    <AppointmentButton text={blog.buttonText2?.toUpperCase()} />
                  )}
                </div>
              )}
              {/* youtube if available */}
              {blog.youtube && (
                <iframe
                  src={`https://www.youtube.com/embed/${blog.youtube}`}
                  title={blog.blog_title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mt-10 w-full md:w-1/2 h-[315px]"
                ></iframe>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </Layout>
  );
}
