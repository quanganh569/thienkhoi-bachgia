import { CalendarIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import "moment/locale/vi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import urlSlug from "url-slug";
import LayoutPage from "./LayoutPage";
import MarkdownLayout from "./MarkdownLayout";
import BASE_URL_STRAPI from "@/services/api/constants";

type ArticlesLayoutProps = {
  articlesData: any;
  suggestArticlesData: any[];
};
const ArticlesLayout = ({
  articlesData,
  suggestArticlesData,
}: ArticlesLayoutProps) => {
  const [articles, setArticles] = useState<any>({});
  const [suggestArticles, setSuggestArticles] = useState<any>([]);

  const getArticlesImage = (imageUrl: any) => {
    return `${BASE_URL_STRAPI}${imageUrl}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticles(articlesData);
    document.title = articles.title;
    const _suggestArticles = suggestArticlesData.sort((a: any) => {
      if (a?.attributes?.Tags === articlesData?.Tags) {
        return -1;
      }
      return 1;
    });

    setSuggestArticles(_suggestArticles);
  }, [articles, articlesData, suggestArticlesData]);

  return (
    <LayoutPage title={articles?.title}>
      <div className="container mt-3">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div
            className="col-span-1 p-0 mb-3 bg-white border lg:col-span-3"
            style={{ borderRadius: "0.5rem" }}
          >
            {articles.image && (
              <img
                src={getArticlesImage(articles?.image?.data?.attributes?.url)}
                alt={articles.title}
                className="w-full mb-2 rounded-t oject-cover"
                height={315}
              />
            )}

            <div className="p-3">
              <h2 className="mt-10 mb-2 text-4xl font-bold">
                {articles?.title}
              </h2>
              <span className="text-sm text-gray-600 ">
                <CalendarIcon className="inline-block w-5 mr-1" />
                {moment(articles.date).calendar()}
              </span>
              <div
                className="mt-10 mb-3 overflow-hidden"
                style={{ lineHeight: 2 }}
              >
                <MarkdownLayout>{articles.content}</MarkdownLayout>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-6 text-4xl font-bold text-left">Tin liên quan</h3>
            <div className="grid max-h-screen grid-cols-1 gap-4 overflow-y-scroll sm:grid-cols-2 lg:grid-cols-1">
              {suggestArticles.map(
                (item: any, index: React.Key | null | undefined) => (
                  <Link 
                    key={index}
                    href={`${urlSlug(item.attributes.title)}.${item.id}`}
                  >
                    <a
                      className="flex flex-col px-2 mb-4 cursor-pointer"
                      title={item.attributes.title}
                    >
                      {item?.attributes?.image?.data?.attributes?.formats
                        ?.thumbnail?.url && (
                        <img
                          className="object-cover mb-1 rounded h-44"
                          alt="Loading.."
                          src={getArticlesImage(
                            item?.attributes?.image?.data?.attributes?.formats
                              ?.thumbnail?.url
                          )}
                        />
                      )}
                      <span className="font-semibold text-dark">
                        {item.attributes.title}
                      </span>

                      <p className="flex flex-row items-center">
                        <CalendarIcon className="inline-block w-5 mr-1 text-gray-600" />
                        {moment(item.attributes.date).calendar()}
                      </p>
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default ArticlesLayout;
