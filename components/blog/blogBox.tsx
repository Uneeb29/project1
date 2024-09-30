import Link from "next/link";
import Image from "next/image";

interface BlogBoxProps {
    blogImgSrc: string;
    blogTitle: string;
    blogDetails1: string;
    blogDetails2: string;
    blogLink: string;
    }

export default function BlogBox({ blogImgSrc, blogTitle, blogDetails1, blogDetails2, blogLink }: BlogBoxProps) {
  return (
    <Link href={blogLink}>
      <div className="flex w-full  h-[140px] bg-white rounded-lg shadow">
        <Image src={blogImgSrc} width={157} height={107} alt="blogImage" className="mt-4 ml-4 mb-4" loading='eager'/>
        <div className="flex items-center lg:items-start px-6">
          <div className=" mr-auto ">
            <p className=" text-[#0393D6] text-xs font-normal leading-3 mt-2 lg:mt-4 ">
              {blogTitle}
            </p>
            <p className=" text-[#0393D6] lg:text-lg text-sm pb-2 lg:pb-0 leading-snug mt-2 lg:mt-4 mr-auto">
              {blogDetails1} <br />{blogDetails2}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}