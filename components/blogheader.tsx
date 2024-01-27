export const BlogHeader = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 __web-inspector-hide-shortcut__">
      <div className="max-w-screen-sm py-16">
        <h1 className="font-display text-3xl font-extrabold text-gray-700 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Latest news and updates from Dub.
        </p>
        <nav className="mt-6 hidden w-fit items-center space-x-2 rounded-full border border-gray-200 bg-white p-2 md:flex">
          <a className="relative z-10" href="/">
            <div className="rounded-full px-4 py-2 text-sm transition-all text-white">
              Overview
            </div>
            <div
              className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800"
              style={{ zIndex: -1, opacity: 1 }}
            ></div>
          </a>
          <a className="relative z-10" href="/">
            <div className="rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 active:bg-gray-200">
              Company News
            </div>
          </a>
          <a className="relative z-10" href="/">
            <div className="rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 active:bg-gray-200">
              Engineering
            </div>
          </a>
          <a className="relative z-10" href="/">
            <div className="rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 active:bg-gray-200">
              Customer Stories
            </div>
          </a>
          <a className="relative z-10" href="/">
            <div className="rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 active:bg-gray-200">
              Changelog
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
};
