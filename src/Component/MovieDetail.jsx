import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apikey, BaseURL, imageBaseURL } from '../apiconfig'
import { useLocation } from 'react-router-dom';


function MovieDetail() {
  const { id } = useParams();
  const location = useLocation();
  const isTV = location.pathname.includes('/tv');
  const contentType = isTV ? 'tv' : 'movie';

  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const { data } = await axios.get(`${BaseURL}/${contentType}/${id}?api_key=${apikey}`);
        setItem(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    }
    fetchDetails();
  }, [id, contentType]);

  if (!item) return <div className="text-center mt-10 text-white">Loading...</div>;
  return (
    <div className=" px-6 py-10">
      <div
        className="relative w-full lg:h-[500px] rounded-lg overflow-hidden "
        style={{
          backgroundImage: `url(${imageBaseURL}w1280${item.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`${imageBaseURL}w342${item.poster_path}`}
          alt={item.name || item.title}
          className="shadow-lg w-full max-w-xs p-5 z-1 rounded-3xl "
        />

        <div className="flex-1  z-1 px-5 py-5">
          {item.tagline && <p className=" text-white mb-4">"{item.tagline}"</p>}
          <p className="mb-6 text-xl text-white">{item.overview}</p>

          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300">
            <div>
              <span className="font-bold font-xl">Genres : </span>
              {item.genres?.map(g => g.name).join(', ')}
            </div>
            <div>
              <span className="font-bold font-xl ">Rating : </span>{item.vote_average}
            </div>
            <div>
              <span className="font-bold font-xl">Release Date : </span>
              {item.release_date || item.first_air_date}
            </div>
            {isTV && (
              <>
                <div>
                  <span className="font-bold font-xl">Seasons : </span>{item.number_of_seasons}
                </div>
                <div>
                  <span className="font-bold font-xl">Episodes : </span>{item.number_of_episodes}
                </div>
              </>
            )}
            {!isTV && (
              <div>
                <span className="font-bold font-xl">Runtime : </span>{item.runtime} min
              </div>
            )}
            {item.networks && (
              <div>
                <span className="font-bold font-xl">Network : </span>
                {item.networks.map(n => n.name).join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default MovieDetail;