import TableBlog from "~/components/blog/tableBlog";
import { getBlogs } from "~/lib/blog";

async function BlogsPage() {
  const blogList = await getBlogs();
  return (
    <main className="flex min-w-full flex-col items-center justify-between p-24">
      {blogList && <TableBlog blogs={blogList} />}
    </main>
  );
}

export default BlogsPage;
