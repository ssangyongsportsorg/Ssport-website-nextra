import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale"
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
export default function BlogIndex({ more = "Read more" }) {
  const { locale, defaultLocale } = useRouter();
  return filterRouteLocale(getPagesUnderRoute("/blog"), locale, defaultLocale).map((page) => {
    return (
      <>
    <div className="flex justify-between px-4 mx-auto max-w-8xl">
  <div className="hidden mb-6 xl:block lg:w-80">
    <div className="sticky top-36">
    </div>
  </div>
  <div className="w-full max-w-2xl mx-auto">
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <article className="py-6">
        <div className="flex items-center justify-between mb-3 text-gray-500">
          <div>
            <Link
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
              href="#"
            >
              #{tags}
            </Link>
          </div>
          <span className="text-sm">
       {page.frontMatter.date}
          </span>
        </div>
    <h2 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}>
    <Link href={page.route}>
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h2>
        <p className="mb-5 text-gray-500 dark:text-gray-400">
          {seo}
        </p>
        <div className="flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="https://discuss.ssangyongsports.org/members/peter-yang.1/"
          >
            <Image
  className="rounded-full w-7 h-7"
  src={img}
  alt={author}
/>
            
            <span className="font-medium dark:text-white">
               {author}
            </span>
          </a>
          <Link
            className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
              href={page.route}
          >
                    閱讀文章
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          </div>
      </article>
    </div>
  </div>
</div>
                  </>
       
    );
  });
}
