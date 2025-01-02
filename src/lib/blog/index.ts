import { getItem, postItem, Server_URL } from "../Constans";
import { Blog, Image } from "../types";

type BlogDrugStore = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  state: string;
  image: Image[];
  author: {
    id: number;
    name: string;
  };
};
const reshapeBlog = (blog: BlogDrugStore): Blog | undefined => {
  if (!blog) return undefined;
  if (!blog.author)
    blog.author = {
      id: 1,
      name: "Quản lý",
    };
  return { ...blog, img: blog.image };
};
const reshapedBlogs = (blogs: BlogDrugStore[]): Blog[] => {
  const reshapeBlogs = [];
  for (const blog of blogs) {
    if (blog) {
      const reshapedBlog = reshapeBlog(blog);

      if (reshapedBlog) {
        reshapeBlogs.push(reshapedBlog);
      }
    }
  }

  return reshapeBlogs;
};
export async function getBlogs(): Promise<Blog[] | undefined> {
  const endpoint = `${Server_URL}/blog`;
  const result = await getItem({ endpoint });
  return reshapedBlogs(result);
}
export async function updateBlog(id: number, type: string) {
  const endpoint = `${Server_URL}/blog/${id}`;
  const result = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type }),
  });
  const body = await result.json();
  return body;
}
