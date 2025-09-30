"use client";
import React from "react";

const BlogDetailsArea: React.FC<any> = ({ blog }) => {
  return (
    <div className="blog-details-area container">
      <h2 dangerouslySetInnerHTML={{ __html: blog?.title || 'Blog Details' }} />
      <p>{blog?.desc || 'No description available.'}</p>
    </div>
  );
};

export default BlogDetailsArea;
