
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL, apikey } from "../../apiconfig";

export const Genres = () => {
    const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get(`${BaseURL}/genre/movie/list`, {
          params: {
            api_key: apikey,
            language: "en-US",
          },
        });
        setGenres(res.data.genres || []);
      } catch (error) {
        console.error("خطا در واکشی ژانرها:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) {
    return <div className="text-center text-white py-8">در حال بارگذاری...</div>;
  }
  return (
     <div className="p-6 max-w-6xl mx-auto mb-20">
      <h1 className="text-3xl font-bold text-white mb-6">ژانرها</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-gray-800 rounded-xl p-4 text-white text-center cursor-pointer hover:bg-gray-700 transition"
            onClick={() => alert(`در حال توسعه: ${genre.name}`)}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};
