import { notFound } from "next/navigation";
import { getCategoryDetail, getNewsList } from "../../../_libs/microcms";
import Pagination from "../../../_components/Pagination";
import NewsList from "../../../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../../../_constants";

type Props = {
  params: Promise<{
    id: string;
    current: string;
    basePath?: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current, 10);
  const category = await getCategoryDetail(params.id).catch(notFound);

  if(Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if(news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}