import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogBox from "./blogBox";
import AppointmentButton from "../button";
import blogData from "../../data/blog";
import Image from "next/image";

// Define the type for a blog post
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

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Dummy data to replace API call
    const dummyData: BlogPost[] = blogData;
    // Filter and set the latest 4 blogs
    setBlogs(dummyData.slice(0, 4));
  }, []);

  return (
    <section className="bg-[white] flex flex-col py-14">
      <div className=" text-[#0393D6] text-[48px] font-bold leading-[50px] text-center w-full">
        Suivre l’actualité des études de droit{" "}
      </div>

      <div className="flex lg:flex-row flex-col justify-center mt-10 mx-auto gap-x-6 px-4 lg:px-10">
        {blogs && blogs[0] && (
          <Link
            href={`/blog/${blogs[0].id}`}
            className="lg:w-1/2 w-full bg-white rounded-lg shadow mb-4 lg:mb-0 px-6 lg:px-10">
            <div>
  
              <Image src={blogs[0].image_url} width={457} height={287} alt="blogImage" className="mt-8" loading='eager'/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-2">
              <p className="w-full lg:w-auto text-[#0393D6] text-xs font-normal leading-3 lg:leading-5 mb-2 lg:mb-0">
                #{blogs[0].tags.split(",").join(" #")}
              </p>
              <p className="text-[#0393D6] text-[13px] font-normal leading-[21px]">
                {`20 juillet ${new Date(blogs[0].created_at).getFullYear()}`}
              </p>
            </div>
            <p className=" text-[#0393D6] text-[19px] leading-normal mt-2 ">
              {blogs[0].blog_title}
            </p>
          </Link>
        )}
        <div className="lg:w-1/2 w-full">
          {blogs && blogs.length > 1 && (
            <div className="flex flex-col gap-4">
              {blogs.slice(1).map((blog, index) => (
                <BlogBox
                  key={index}
                  blogImgSrc={blog.image_url}
                  blogTitle={"#" + blog.tags.split(",").join(" #")}
                  blogDetails1={blog.blog_title
                    .split(" ")
                    .slice(0, 5)
                    .join(" ")}
                  blogDetails2={blog.blog_title
                    .split(" ")
                    .slice(5, 15)
                    .join(" ")}
                  blogLink={`/blog/${blog.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <AppointmentButton
          inverted={true}
          text={"Découvrir le blog"}
          link="/resources"
        />
      </div>
    </section>
  );
}
