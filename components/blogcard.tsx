import Image from "next/image";

import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  authorName: string;
  authorImg: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  authorImg,
  href,
  authorName,
}) => {
  return (
    <a
      className="flex flex-col rounded-lg border border-gray-200 transition-all hover:shadow-lg"
      href={href}
    >
      <Image
        alt={title}
        width="1200"
        height="630"
        decoding="async"
        data-nimg="1"
        className="aspect-[1200/630] rounded-t-xl object-cover blur-0"
        src={imageUrl}
        style={{ color: "transparent" }}
      />
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
        <div>
          <h2 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
            {title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Image
            alt={authorName}
            loading="lazy"
            width="36"
            height="36"
            decoding="async"
            data-nimg="1"
            className="rounded-full transition-all group-hover:brightness-90 blur-0"
            src={authorImg}
            style={{ color: "transparent" }}
          />
          <time className="text-sm text-gray-500" dateTime={date}>
            {date}
          </time>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
