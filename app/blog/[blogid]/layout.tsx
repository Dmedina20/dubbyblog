import { select } from "@nextui-org/theme";
import blogs from "../../db/blogs.json";
import Image from "next/image";
export default function BlogLayout({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const blogIndex = parseInt(params.blogid, 10);
  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= blogs.length) {
    return <div>Invalid blog ID</div>;
  }

  const selectedBlog = blogs[blogIndex];
  return (
    <section className="mx-auto w-full ">
      {/* Header Section */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex max-w-screen-sm flex-col space-y-4 pt-16">
          <div className="flex items-center space-x-4">
            <a
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
              href="/"
            >
              {selectedBlog.tag}
            </a>
            <time className="text-sm text-gray-500 transition-colors hover:text-gray-800">
              {selectedBlog.date}
            </time>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-gray-700 sm:text-4xl sm:leading-snug">
            {selectedBlog.title}
          </h1>
          <p className="text-xl text-gray-500">{selectedBlog.description}</p>
        </div>
      </div>
      {/* Content Section */}
      <div className="relative">
        <div className="absolute top-52 h-[calc(100%-13rem)] w-full border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg" />
        <div className="mx-auto w-full max-w-screen-xl lg:px-20 grid grid-cols-4 gap-5 px-0 pt-10 lg:gap-10">
          {/* Left Content Section */}
          <div className="relative col-span-4 flex flex-col space-y-8 bg-white sm:rounded-t-xl sm:border sm:border-gray-200 md:col-span-3">
            <Image
              alt={selectedBlog.title}
              draggable="false"
              width={1200}
              height={630}
              decoding="async"
              data-nimg="1"
              className="aspect-[1200/630] rounded-t-xl object-cover blur-0"
              src={selectedBlog.imageUrl}
              style={{ color: "transparent" }}
            />

            {children}
          </div>
          {/* Right Content Section */}
          <div className="sticky top-20 col-span-1 mt-48 hidden flex-col divide-y divide-gray-200 self-start sm:flex">
            <div className="flex flex-col space-y-4 py-5">
              <p className="text-sm text-gray-500">Written by</p>
              <a
                className="group flex items-center space-x-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/steventey"
              >
                <Image
                  alt={selectedBlog.authorName}
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-full transition-all group-hover:brightness-90 blur-0"
                  src={selectedBlog.authorImg}
                  style={{ color: "transparent" }}
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-700">
                    {selectedBlog.authorName}
                  </p>
                  <p className="text-sm text-gray-500">@steventey</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col space-y-4 py-5">
              <p className="text-sm text-gray-500">Read more</p>
              <ul className="flex flex-col space-y-4">
                <li>
                  <a className="group flex flex-col space-y-2" href="/">
                    <p className="font-semibold text-gray-700 underline-offset-4 group-hover:underline">
                      Unveiling Dub.co&apos;s New Chapter
                    </p>
                    <p className="line-clamp-2 text-sm text-gray-500 underline-offset-2 group-hover:underline">
                      Excited to announce that I&apos;m starting a company
                      around Dub.co. Here&apos;s how it all started, and where
                      we&apos;re going.
                    </p>
                    <p className="text-xs text-gray-400 underline-offset-2 group-hover:underline">
                      January 17, 2024
                    </p>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col space-y-2" href="/">
                    <p className="font-semibold text-gray-700 underline-offset-4 group-hover:underline">
                      Introducing New &amp; Improved Analytics for Dub
                    </p>
                    <p className="line-clamp-2 text-sm text-gray-500 underline-offset-2 group-hover:underline">
                      We&apos;re delighted to reveal our new and improved
                      analytics dashboard, which is now available to all Dub
                      users.
                    </p>
                    <p className="text-xs text-gray-400 underline-offset-2 group-hover:underline">
                      November 4, 2023
                    </p>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col space-y-2" href="/">
                    <p className="font-semibold text-gray-700 underline-offset-4 group-hover:underline">
                      Introducing Dub.co –&nbsp;the new face of Dub
                    </p>
                    <p className="line-clamp-2 text-sm text-gray-500 underline-offset-2 group-hover:underline">
                      We&apos;re thrilled to announce our rebrand. Dub.sh is now
                      Dub.co.
                    </p>
                    <p className="text-xs text-gray-400 underline-offset-2 group-hover:underline">
                      August 21, 2023
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          ;
        </div>
      </div>
    </section>
  );
}
