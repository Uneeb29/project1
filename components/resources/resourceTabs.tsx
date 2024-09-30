import { useState } from "react";
import Articles from "./tabs/articles";
import blogData from "@/data/blog";

const resourceTab = [
  {
    tabTitle: "Articles",
    data: "article",
  },
  {
    tabTitle: "Guides",
    data: "guide",
  },
];

interface Blog {
  image_url: string;
  id: number;
  blog_title: string;
  tags: string;
  created_at: string;
  type: string;
  meta: string;
  blog_content: string;
  buttonText?: string;
  youtube?: string;
  buttonText2?: string;
}

export default function ResourceTabs({}) {
  const [activeTab, setActiveTab] = useState("Articles");
  const [articles, setArticles] = useState<Blog[]>(blogData.filter((item) => item.type === "article"));
  const [guides, setGuides] = useState<Blog[]>(blogData.filter((item) => item.type === "guide"));

  

  const handleTabChange = (tabTitle: string) => {
    setActiveTab(tabTitle);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-8 w-full py-10 lg:py-16 ">
      <div className="flex flex-col items-center gap-y-10 appoint-shadow p-6 lg:p-12 rounded-[10px] bg-white ">
        <div className="flex flex-col lg:flex-row  items-center justify-between w-full gap-y-4 lg:gap-y-0">
          <span className="text-3xl lg:text-[40px] leading-[60px] text-[#0393D6] font-bold  ">
            Resources
          </span>
          <div className="flex items-center  ">
            <button className="bg-[#0393D6] text-white text-center rounded-full font-bold text-xl leading-[22px] py-2 w-[218px]">
              Me prévenir 🛎️
            </button>
          </div>
        </div>
        <div className="  flex flex-col lg:flex-row items-center w-full gap-y-8 lg:gap-y-0 gap-x-8">
          {resourceTab.map((item, index) => (
            <div
              key={index}
              className={`${
                activeTab === item.tabTitle
                  ? "text-white bg-[#0393D6]"
                  : " bg-white text-[#0393D6]"
              } cursor-pointer rounded-full tab-shadow font-bold text-xl leading-[22px] px-4 lg:px-10 py-2`}
              onClick={() => handleTabChange(item.tabTitle)}
            >
              {item.tabTitle}
            </div>
          ))}
        </div>
        <div className="w-full">
        {activeTab === "Articles" && (
            <div className="">
             <Articles articles={articles} />
            </div>
          )}
          {activeTab === "Guides" && (
            <div className="">
             <Articles articles={guides} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
