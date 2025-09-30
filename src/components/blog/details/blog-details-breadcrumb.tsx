"use client";
import React from "react";
import Link from "next/link";

const BlogDetailsBreadcrumb: React.FC<any> = ({ blog }) => {
  return (
    <div className="blog-details-breadcrumb container">
      <nav>
        <Link href="/">Home</Link> / <span>{blog?.title || 'Blog'}</span>
      </nav>
    </div>
  );
};

export default BlogDetailsBreadcrumb;
