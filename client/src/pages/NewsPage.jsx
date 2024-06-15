import React from "react";
import newsImage from "../assets/products/TV/acer I Series 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, MEMC (2022 Model) (AR50AR2851UDFL) 1.webp";

export default function NewsPage() {
  const newsData = [
    {
      id: 1,
      title: "Exciting New Feature Released!",
      excerpt:
        "We are thrilled to announce the release of our new feature. This update brings a lot of exciting changes that will enhance your experience...",
      image: newsImage,
      link: "#",
    },
    {
      id: 2,
      title: "Upcoming Maintenance Schedule",
      excerpt:
        "Please be advised that we will be performing scheduled maintenance on our servers. This will help us ensure the reliability and security of our services...",
      image: newsImage,
      link: "#",
    },
    {
      id: 3,
      title: "Join Our Webinar Next Week",
      excerpt:
        "We are hosting a webinar next week to discuss the latest trends in the industry. Join us to gain valuable insights and network with professionals...",
      image: newsImage,
      link: "#",
    },
  ];
  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our{" "}
        <span className="text-red-600 border-b-2 border-black">Articles</span>
      </h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="news-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500   hover:shadow-2xl w-full"
          >
            <img
              className="w-full h-64 object-cover transform transition duration-500 hover:scale-105  hover:cursor-pointer"
              src={news.image}
              alt={news.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {news.title}
              </div>
              <p className="text-gray-700 text-base mb-4">{news.excerpt}</p>
              <div className="flex justify-center">
                <a
                  href={news.link}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
