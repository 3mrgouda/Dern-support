import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

export default function ArticleByID() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticleById() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        setError("Error fetching article details");
      } finally {
        setLoading(false);
      }
    }
    fetchArticleById();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 my-28 text-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 my-28">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <img
          className="max-w-full aspect-video objc"
          src={article.img}
          alt={article.title}
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
          <p className="text-gray-700 leading-relaxed">{article.content}</p>
        </div>
      </div>
    </div>
  );
}
