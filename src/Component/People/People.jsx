import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { apikey, BaseURL ,imageBaseURL} from '../../apiconfig';
import { Link } from 'react-router-dom';


export const People = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  async function getPopularPeople(pageNumber = 1) {
    const apiPath = '/person/popular';

    try {
      const { data } = await axios.get(`${BaseURL}${apiPath}?api_key=${apikey}&page=${pageNumber}`);
      console.log("✅ People DATA:", data);
      setPeople(data.results || []);
    } catch (err) {
      console.error("❌ Error fetching people:", err.response?.data || err.message);
    }
  }

  useEffect(() => {
    getPopularPeople(page);
  }, [page]);
  return (
    <div className='container'>
        <p className='my-8 text-2xl font-bold'>Popular People</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4'>
        {people.map((person) => (
          <div key={person.id} className="bg-gray-800 rounded-xl pb-2">
            {person.profile_path ? (
              <img
                src={`${imageBaseURL}w300${person.profile_path}`}
                alt={person.name}
                className="rounded-xl mb-2"
              />
            ) : (
              <div className="w-full h-[300px] bg-gray-600 rounded-xl mb-2 flex items-center justify-center">
                <span className="text-sm text-gray-300">No Image</span>
              </div>
            )}
            <h2 className="text-lg font-semibold text-white px-2">{person.name}</h2>
          </div>
        ))}
      </div>

      {/* دکمه‌های صفحه‌بندی */}
      <div className="flex justify-center mt-6 gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-4 py-2 rounded ${
              page === num ? 'bg-yellow-500 text-black' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
    
