import BlogItem from "./BlogItem";
import Popular from "./Popular";
import Tags from "./Tags";

export default function Blogs() {
  return (
    <section>
      <div class="container mx-auto w-full px-4 md:flex">
        <div class="pt-4 mb-10 flex-3">
          <BlogItem />
          <BlogItem />
        </div>
        <div class="ml-5 flex-2">
          <Tags />
          <Popular />
        </div>
      </div>
    </section>
  );
}
