import React from "react";
import { IBlogDT } from "@/types/blog-d-t";

type Props = {
  blog?: IBlogDT;
};

const BlogDetailsMain: React.FC<Props> = ({ blog }) => {
  if (!blog) {
    return (
      <div className="blog-details">
        <h2>Blog Details</h2>
        <p>Details content placeholder.</p>
      </div>
    );
  }

  return (
    <div className="blog-details container">
      <h1 dangerouslySetInnerHTML={{ __html: blog.title }} />
      {blog.desc && <p>{blog.desc}</p>}
    </div>
  );
};

export default BlogDetailsMain;
