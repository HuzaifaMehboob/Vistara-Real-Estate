import React from "react";

const BlogsSection = () => {
  const blogs = [
    {
      title: "10 Tips to Increase Your Property's Value",
      snippet:
        "Discover the secrets to enhancing your property's market value. From renovations to strategic upgrades, these tips will help you sell faster and for more.",
      link: "#",
    },
    {
      title: "Bahria Town: A Lifestyle Investment",
      snippet:
        "Explore why Bahria Town is one of the most sought-after communities for homeowners and investors alike. Learn about its amenities and lifestyle perks.",
      link: "#",
    },
    {
      title: "Understanding the Real Estate Market in Islamabad",
      snippet:
        "Get insights into Islamabad's real estate trends. This blog explains everything you need to know to make informed buying and selling decisions.",
      link: "#",
    },
  ];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-md shadow-md p-4 w-full mt-14">
      <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
      <div className="space-y-10">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <h3 className="text-blue-600 text-lg font-semibold hover:underline">
              <a href={blog.link}>{blog.title}</a>
            </h3>
            <p className="text-gray-700 ">{blog.snippet}</p>
            <a
              href={blog.link}
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
