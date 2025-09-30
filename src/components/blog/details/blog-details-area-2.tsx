"use client";
import React from "react";

const BlogDetailsAreaTwo: React.FC<any> = ({ blog }) => {
  return (
    <div className="blog-details-area-2 container">
      <h2>{blog?.title || 'Blog Details 2'}</h2>
      <p>{blog?.desc || 'Alternate details content.'}</p>
    </div>
  );
};

export default BlogDetailsAreaTwo;
