import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Article {
  image_url: string;
  tags: string;
  created_at: string;
  blog_title: string;
  id: number;
}

export default function BlogCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.id}`}>
      <div className="flex flex-col lg:w-[520px] lg:h-[452px]  bg-white rounded-lg shadow py-6 px-6 lg:px-6 gap-y-4">
        <div>
          <Image src={article.image_url} width={520} height={452} alt="blogImage" className="mt-4" loading='eager' />
        </div>
        <div className="flex flex-col lg:flex-row justify-between ">
          <p className="w-full lg:w-auto text-[#0393D6] text-xs font-normal leading-3 lg:leading-5 mb-2 lg:mb-0">
            #{article.tags.split(",").join(' #')}
          </p>
          <p className="text-[#0393D6] text-[13px] font-normal leading-[21px]">
            {article.created_at}
          </p>
        </div>
        <p className="text-[#0393D6] text-xl leading-6 mt-2">
          {article.blog_title}
        </p>
      </div>
    </Link>
  );
}
