import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "../../../_components/NewsList";
import Pagination from "../../../_components/Pagination";
import Category from "../../../_components/Category";
import { NEWS_LIST_LIMIT } from "../../../_constants";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p> 
        <Category category={category} />の記事一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}