import blogs from "../../db/blogs.json";

export default function Blog({ params }: { params: any }) {
  const blogIndex = parseInt(params.blogid, 10);
  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= blogs.length) {
    return <div>Invalid blog ID</div>;
  }
  const selectedBlog = blogs[blogIndex];

  return (
    <article
      data-mdx-container="true"
      className="prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold px-5 pb-20 pt-4 sm:px-10"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Commodo quis
        imperdiet massa tincidunt nunc pulvinar sapien et. Semper auctor neque
        vitae tempus quam. Convallis aenean et tortor at. Id donec ultrices
        tincidunt arcu non sodales neque sodales.
      </p>
      <h2
        className="text-2xl underline-offset-4 mt-4 hover:underline"
        id="new-business-plan"
      >
        Lorem ipsum dolor
      </h2>
      <p className="mt-2">Dolor sit amet, consectetur adipiscing elit.</p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla facilisi. Proin eget ex ac nisi posuere dictum.</li>
        <li>
          Fusce euismod odio a arcu malesuada, id semper elit pellentesque.
        </li>
        <li>Vivamus vestibulum urna vitae efficitur volutpat.</li>
        <li>Integer sed risus vel ex posuere pellentesque.</li>
      </ul>
      <h2
        className="text-2xl underline-offset-4 mt-4 hover:underline"
        id="new-business-plan"
      >
        Lorem ipsum dolor
      </h2>
      <p className="mt-2">Dolor sit amet, consectetur adipiscing elit.</p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla facilisi. Proin eget ex ac nisi posuere dictum.</li>
        <li>
          Fusce euismod odio a arcu malesuada, id semper elit pellentesque.
        </li>
        <li>Vivamus vestibulum urna vitae efficitur volutpat.</li>
        <li>Integer sed risus vel ex posuere pellentesque.</li>
      </ul>
      <h2
        className="text-2xl underline-offset-4 mt-4 hover:underline"
        id="new-business-plan"
      >
        Lorem ipsum dolor
      </h2>
      <p className="mt-2">Dolor sit amet, consectetur adipiscing elit.</p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla facilisi. Proin eget ex ac nisi posuere dictum.</li>
        <li>
          Fusce euismod odio a arcu malesuada, id semper elit pellentesque.
        </li>
        <li>Vivamus vestibulum urna vitae efficitur volutpat.</li>
        <li>Integer sed risus vel ex posuere pellentesque.</li>
      </ul>
    </article>
  );
}
