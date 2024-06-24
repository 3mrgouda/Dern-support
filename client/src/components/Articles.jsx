import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/articles`
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching Articles:", error);
      }
    }
    fetchArticles();
  }, []);

  const latestArticles = articles.slice(-3).reverse();
  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest
        <span className="text-red-600 border-b-2 border-black"> Articles</span>
      </h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {latestArticles.map((article) => (
          <div
            key={article._id}
            className="article-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500   hover:shadow-2xl w-full"
          >
            <img
              className="w-full h-64 object-contain transform transition duration-500 hover:opacity-75 hover:cursor-pointer"
              src={article.img}
              alt={article.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {article.title}
              </div>
              <p className="text-gray-700 text-base mb-4">{article.excerpt}</p>
              <div className="flex justify-center">
                <Link
                  to={`/articles/${article._id}`}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
