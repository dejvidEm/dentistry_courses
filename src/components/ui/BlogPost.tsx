import React from "react";

interface BlogCardProps {
  category: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

const BlogPostCard: React.FC<BlogCardProps> = ({
  category,
  imageUrl,
  title,
  description,
  date,
}) => {
  return (
    <div className="max-w-sm bg-white rounded shadow-lg overflow-hidden">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-[#BC6C25] text-white text-sm px-3 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <hr className="border-gray-200" />
      <div className="p-4 text-gray-500 text-sm">{date}</div>
    </div>
  );
};

export default BlogPostCard;